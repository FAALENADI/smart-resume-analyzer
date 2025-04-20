
import { useState } from 'react';
import axios from 'axios';
import ResultCard from '../components/ResultCard';

export default function Home() {
  const [file, setFile] = useState(null);
  const [jobDesc, setJobDesc] = useState('');
  const [result, setResult] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('file', file);
    formData.append('job_description', jobDesc);

    try {
      const res = await axios.post('http://localhost:8000/analyze/', formData);
      setResult(res.data);
    } catch (err) {
      alert("Error analyzing resume.");
    }
  };

  return (
    <div style={{ padding: "2rem", fontFamily: "sans-serif" }}>
      <h1>Smart Resume Analyzer</h1>
      <form onSubmit={handleSubmit}>
        <input type="file" onChange={(e) => setFile(e.target.files[0])} required />
        <br /><br />
        <textarea
          placeholder="Paste job description (optional)"
          rows="5"
          cols="50"
          value={jobDesc}
          onChange={(e) => setJobDesc(e.target.value)}
        />
        <br /><br />
        <button type="submit">Analyze Resume</button>
      </form>

      {result && <ResultCard result={result} />}
    </div>
  );
}
