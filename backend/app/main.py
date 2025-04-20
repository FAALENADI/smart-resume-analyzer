
from fastapi import FastAPI, File, UploadFile, Form
from fastapi.middleware.cors import CORSMiddleware
from app.resume_parser import analyze_resume
from app.job_matcher import match_job_description

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.post("/analyze/")
async def analyze(file: UploadFile = File(...), job_description: str = Form(None)):
    contents = await file.read()
    resume_text, insights = analyze_resume(contents)
    
    match_score = None
    if job_description:
        match_score = match_job_description(resume_text, job_description)
    
    return {
        "insights": insights,
        "match_score": match_score
    }
