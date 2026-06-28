"use client";

import { useEffect, useState } from "react";

export default function Home() {
  const [clusters, setClusters] = useState<any[]>([]);

  useEffect(() => {
    fetch("https://news-pulse-jjeq.onrender.com/api/news")
      .then(res => res.json())
      .then(data => setClusters(data));
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-4xl font-bold text-center mb-12 text-blue-700">
        📰 News Timeline
      </h1>

      <div className="relative border-l-4 border-blue-500 pl-6">
        {clusters.map(cluster => (
          <div key={cluster.cluster_id} className="mb-10 ml-4 relative">
            {/* Timeline dot */}
            <div className="absolute -left-6 top-2 w-4 h-4 bg-blue-500 rounded-full border-2 border-white"></div>

            {/* Cluster Header */}
            <h2 className="text-xl font-semibold text-gray-800 mb-3">
              News {cluster.cluster_id}
            </h2>

            {/* Articles (always visible) */}
            <ul className="space-y-4">
              {cluster.articles.map((article: any, idx: number) => (
                <li
                  key={idx}
                  className="bg-white shadow-md rounded-lg p-4 transform transition duration-300 hover:scale-105 hover:shadow-xl"
                >
                  <a
                    href={article.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-lg font-medium text-blue-600 hover:underline"
                  >
                    {article.title}
                  </a>
                  <p className="text-gray-700 mt-2">{article.summary}</p>
                  <span className="text-sm text-gray-500 block mt-1">
                    {new Date(article.published).toLocaleString()}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}
