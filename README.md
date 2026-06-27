# News Pulse - Timeline Project

## 📌 Overview
News Pulse is a web application that displays the latest news in a **timeline format**.  
- **Python Scraper**: Collects news data and groups related articles into clusters.  
- **Backend (Node.js + Express)**: Provides an API that serves the clustered news data.  
- **Frontend (Next.js + Tailwind CSS)**: Renders a timeline UI with hover zoom, blur effects, and responsive design.  

---

## 🛠 Tech Stack
- Python (Scraper)
- Node.js + Express (Backend API)
- Next.js + Tailwind CSS (Frontend UI)

---

# ⚙️ Setup Instructions

### 1. Clone Repository
```bash
git clone https://github.com/Kavyasakhuja/news-pulse.git
cd news-pulse

### 2. Scraper Setup
```bash
cd scraper
python -m venv venv
.\venv\Scripts\activate
pip install -r requirements.txt
python main.py

### 3. Backend Setup
```bash
cd ../backend
npm install
node server.js

### 4. Frontend Setup
```bash
cd ../frontend
npm install
npm run dev