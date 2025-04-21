# Smart Resume Analyzer 🧠📄  
**Work In Progress (WIP)**

An AI-powered web application that analyzes resumes and provides job match recommendations using Natural Language Processing (NLP) and Machine Learning (ML).

---

## 🚀 Live Demo

### 🔗 Backend API  
Hosted on Render:  
[https://smart-resume-analyzer-api.onrender.com](https://smart-resume-analyzer-api.onrender.com)

You can test the `/analyze/` endpoint by sending a `POST` request with:
- A resume file (`.pdf`, `.docx`, etc.)
- (Optional) A job description text

Use tools like [Postman](https://www.postman.com/) or your frontend to interact with it.

### 🔗 Frontend UI  
Hosted on Vercel:  
➡️ **[Visit the Web App](https://smart-resume-analyzer-theta.vercel.app/)**  

---

## ⚙️ Features

- ✅ Upload and parse resumes (PDF/DOCX)
- ✅ AI-based skill extraction
- ✅ Job description matching
- ✅ Resume insights dashboard
- 🚧 Downloadable reports *(coming soon)*

---

## 🛠️ Tech Stack

**Frontend:** React, Tailwind CSS  
**Backend:** FastAPI, Python  
**AI:** spaCy, scikit-learn, PyMuPDF  
**Deployment:**  
- Backend → Render  
- Frontend → Vercel

---

## 📦 How to Run Locally

### 1. Clone the Repository

```bash
git clone https://github.com/FAALENADI/smart-resume-analyzer.git
cd smart-resume-analyzer
```

### 2. Backend Setup

```bash
cd backend
pip install -r requirements.txt
uvicorn app.app:app --reload
```

### 3. Frontend Setup
   
```bash
cd ../frontend
npm install
npm run dev
```

## 📄 License
MIT License

## 🧑‍💼 Author  
**Fawaz Al Enadi**  
[GitHub](https://github.com/FAALENADI) | [LinkedIn](https://www.linkedin.com/in/fawaz-alenadi)
