
export default function ResultCard({ result }) {
  const { insights, match_score } = result;

  return (
    <div style={{ marginTop: "2rem", padding: "1rem", border: "1px solid #ccc" }}>
      <h2>Resume Insights</h2>
      <ul>
        <li>Word Count: {insights.word_count}</li>
        <li>Has Email: {insights.has_email ? "Yes" : "No"}</li>
        <li>Has Phone Number: {insights.has_phone ? "Yes" : "No"}</li>
        <li>Skills Section Present: {insights.has_skills_section ? "Yes" : "No"}</li>
      </ul>

      {match_score !== null && (
        <h3>Job Match Score: {match_score}%</h3>
      )}
    </div>
  );
}
