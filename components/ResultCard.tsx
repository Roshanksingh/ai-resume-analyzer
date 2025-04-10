export default function ResultCard({
  result,
}: {
  result: {
    score: string;
    skill_match: string;
    grammar_formatting: string;
    improvements: string[];
  };
}) {
  return (
    <div className="bg-white border rounded-xl shadow p-6 max-w-2xl w-full mt-10">
      <h2 className="text-gray-900 text-2xl font-bold mb-4">
        AI Resume Feedback
      </h2>
      <div className="mb-4">
        <span className="text-lg font-semibold text-gray-800">Score:</span>{" "}
        <span className="inline-block bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
          {result.score}
        </span>
      </div>

      <div className="mb-4">
        <h3 className="font-semibold text-gray-800">Skill Match:</h3>
        <p className="text-gray-700">{result.skill_match}</p>
      </div>

      <div className="mb-4">
        <h3 className="font-semibold text-gray-800">Grammar & Formatting:</h3>
        <p className="text-gray-700">{result.grammar_formatting}</p>
      </div>

      <div>
        <h3 className="font-semibold text-gray-800">Suggestions:</h3>
        <ul className="list-disc pl-6 text-gray-700">
          {result.improvements.map((tip, i) => (
            <li key={i}>{tip}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
