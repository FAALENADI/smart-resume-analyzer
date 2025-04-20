
# Smart Resume Analyzer with AI Feedback

This full-stack application analyzes resumes and provides actionable feedback using FastAPI and React/Next.js.

## Features
- Upload resume (PDF/DOCX)
- Analyze formatting, keywords, structure
- Match resume against job description
- Clean UI and responsive feedback

## Tech Stack
- FastAPI + Python (Backend)
- Next.js + React (Frontend)
- scikit-learn for NLP
- CI/CD with GitHub Actions
- Deployment-ready (Vercel + Render)

## Local Setup

### Backend
```bash
cd backend
python -m venv env
source env/bin/activate
pip install -r requirements.txt
uvicorn app.main:app --reload
```

### Frontend
```bash
cd frontend
npm install
npm run dev
```

## License
MIT
