# 📰 News Pulse - Timeline Project

## 📌 Overview

News Pulse is a web application that displays the latest news in a **timeline format**.

- **Python Scraper**: Collects news data from RSS feeds and groups related articles into clusters.
- **Backend (Node.js + Express)**: Provides a REST API that serves the clustered news data.
- **Frontend (Next.js + Tailwind CSS)**: Displays the clustered news in a responsive timeline interface.

---

## 🛠 Tech Stack

- Python
- feedparser
- trafilatura
- scikit-learn
- Node.js
- Express.js
- Next.js
- React
- Tailwind CSS

---

# ⚙️ Setup Instructions

## 1. Clone Repository

```bash
git clone https://github.com/Kavyasakhuja/news-pulse.git
cd news-pulse
```

## 2. Scraper Setup

```bash
cd scraper
python -m venv venv
.\venv\Scripts\activate
pip install -r requirements.txt
python main.py
```

## 3. Backend Setup

```bash
cd ../backend
npm install
node server.js
```

The backend will run on:

```
http://localhost:5000
```

## 4. Frontend Setup

```bash
cd ../frontend
npm install
npm run dev
```

The frontend will run on:

```
http://localhost:3000
```

---

## 📂 Project Structure

```text
news-pulse/
│
├── scraper/
│   ├── main.py
│   ├── requirements.txt
│   └── clusters.json
│
├── backend/
│   ├── server.js
│   └── package.json
│
├── frontend/
│   ├── app/
│   └── package.json
│
└── .github/
    └── workflows/
        └── update-clusters.yml
```

---

## 🔄 Project Workflow

```
RSS Feeds
    ↓
Python Scraper
    ↓
Article Clustering
    ↓
clusters.json
    ↓
Express API
    ↓
Next.js Frontend
    ↓
News Timeline
```

---

## 🚀 Future Improvements

- AI-generated summaries
- Category filters
- Search functionality
- Dark mode
- User authentication
- Bookmark articles

---

## 👨‍💻 Developer

Developed by **Kavya Sakhuja**

🚀 **Live Demo**

- **Frontend:** https://news-pulse-nine-gules.vercel.app
- **Backend API:** https://news-pulse-jjeq.onrender.com/api/news