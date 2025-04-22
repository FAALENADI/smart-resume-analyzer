export default function UploadForm({ onFileUpload }) {
  return (
    <div className="p-6 bg-white rounded-xl shadow-md mt-4 text-center">
      <input type="file" accept=".pdf,.docx" onChange={onFileUpload} className="mb-4" />
      <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition">
        Analyze Resume
      </button>
    </div>
  );
}
