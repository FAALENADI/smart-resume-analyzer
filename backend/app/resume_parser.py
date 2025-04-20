
import docx2txt
import fitz  # PyMuPDF
import re
from typing import Tuple

def extract_text_from_pdf(file_bytes: bytes) -> str:
    text = ""
    with fitz.open(stream=file_bytes, filetype="pdf") as doc:
        for page in doc:
            text += page.get_text()
    return text

def extract_text_from_docx(file_bytes: bytes) -> str:
    with open("temp.docx", "wb") as f:
        f.write(file_bytes)
    return docx2txt.process("temp.docx")

def clean_text(text: str) -> str:
    return re.sub(r'\s+', ' ', text).strip()

def analyze_resume(file_bytes: bytes) -> Tuple[str, dict]:
    try:
        text = extract_text_from_pdf(file_bytes)
    except:
        text = extract_text_from_docx(file_bytes)
    
    text = clean_text(text)
    
    insights = {
        "word_count": len(text.split()),
        "has_email": "@" in text,
        "has_phone": bool(re.search(r"\d{3,}", text)),
        "has_skills_section": "skills" in text.lower()
    }
    return text, insights
