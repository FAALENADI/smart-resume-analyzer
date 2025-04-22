export default function ResultCard({ result }) {
  const { insights, match_score } = result;

  return (
    <div className="bg-white shadow-lg rounded-xl p-6 mt-6 border border-gray-200">
      <h2 className="text-xl font-bold text-blue-700 mb-4">📄 Resume Insights</h2>
      
      <ul className="space-y-2 text-gray-800 text-sm">
        <li><strong>Word Count:</strong> {insights.word_count}</li>
        <li><strong>Has Email:</strong> {insights.has_email ? "Yes" : "No"}</li>
        <li><strong>Has Phone Number:</strong> {insights.has_phone ? "Yes" : "No"}</li>
        <li><strong>Skills Section Present:</strong> {insights.has_skills_section ? "Yes" : "No"}</li>
      </ul>

      {match_score !== null && (
        <div className="mt-6">
          <h3 className="text-lg font-semibold text-green-600">
            ✅ Job Match Score: <span className="font-bold">{match_score}%</span>
          </h3>
        </div>
      )}
    </div>
  );
}
