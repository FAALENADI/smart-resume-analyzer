
from sklearn.feature_extraction.text import TfidfVectorizer
from sklearn.metrics.pairwise import cosine_similarity

def match_job_description(resume_text: str, job_description: str) -> float:
    documents = [resume_text, job_description]
    tfidf = TfidfVectorizer().fit_transform(documents)
    similarity = cosine_similarity(tfidf[0:1], tfidf[1:2])
    return round(float(similarity[0][0]) * 100, 2)
