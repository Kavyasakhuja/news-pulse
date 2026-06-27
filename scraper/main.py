import feedparser
import trafilatura
from sklearn.feature_extraction.text import TfidfVectorizer
from sklearn.metrics.pairwise import cosine_similarity
import json

# Example RSS feeds
feeds = [
    "http://feeds.bbci.co.uk/news/rss.xml",
    "https://feeds.npr.org/1001/rss.xml",
    "http://feeds.reuters.com/reuters/topNews"
]

articles = []

for url in feeds:
    feed = feedparser.parse(url)
    for entry in feed.entries[:5]:  # limit for testing
        title = entry.get("title", "")
        link = entry.get("link", "")
        summary = entry.get("summary", "")
        published = entry.get("published", "")

        # Try to fetch full article text
        try:
            downloaded = trafilatura.fetch_url(link)
            text = trafilatura.extract(downloaded) if downloaded else ""
        except Exception:
            text = ""

        articles.append({
            "title": title,
            "summary": summary,
            "link": link,
            "published": published,
            "text": text
        })

# Print collected articles
for a in articles:
    print(a["title"], "-", a["published"])



texts = [a["title"] + " " + a["summary"] for a in articles]

# Convert to TF-IDF vectors(into no.)
vectorizer = TfidfVectorizer(stop_words="english") #remove english word
X = vectorizer.fit_transform(texts)   # convert into no.

# Compare similarity matrix or article
similarity = cosine_similarity(X)

# Group articles if similarity > 0.3
clusters = []
visited = set()

for i in range(len(texts)):
    if i in visited:
        continue
    cluster = [i]
    visited.add(i)
    for j in range(i+1, len(texts)):
        if similarity[i][j] > 0.3:  # threshold
            cluster.append(j)
            visited.add(j)
    clusters.append(cluster)

# console me print
for idx, cluster in enumerate(clusters):
    print(f"\nCluster {idx+1}:")
    for article_index in cluster:
        print("-", articles[article_index]["title"])

cluster_data = []
for idx, cluster in enumerate(clusters):
    cluster_articles = [articles[i] for i in cluster]
    cluster_data.append({
        "cluster_id": idx + 1,
        "articles": cluster_articles
    })

# Save clusters to JSON file
with open("clusters.json", "w", encoding="utf-8") as f:
    json.dump(cluster_data, f, ensure_ascii=False, indent=2)
