"use client";

import { useState, useRef } from "react";
import Loading from "@/components/Loading";
import ErrorMessage from "@/components/ErrorMessage";
import ResultCard from "@/components/ResultCard";

export default function UploadButton() {
  const [analysis, setAnalysis] = useState<{
    score: string;
    skill_match: string;
    grammar_formatting: string;
    improvements: string[];
  } | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [role, setRole] = useState("Software Developer");
  const inputRef = useRef<HTMLInputElement | null>(null);

  const handleFileSelect = async (file: File) => {
    setLoading(true);
    setError("");
    setAnalysis(null);

    const formData = new FormData();
    formData.append("file", file);
    formData.append("role", role);

    try {
      const res = await fetch("/api/analyze", {
        method: "POST",
        body: formData,
      });

      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Something went wrong");

      setAnalysis(data.result);
    } catch (err: any) {
      setError(err.message || "Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  const onFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file && file.type === "application/pdf") {
      handleFileSelect(file);
    } else {
      alert("Please upload a valid PDF file.");
    }
  };

  return (
    <>
      <div className="mb-4">
        <label className="block mb-1 text-sm  text-gray-700 font-bold">
          Target Role
        </label>
        <input
          type="text"
          value={role}
          onChange={(e) => setRole(e.target.value)}
          placeholder="e.g., Data Scientist, UX Designer"
          className="text-gray-900 w-1/2 p-2 border border-gray-300 rounded-md text-center"
        />
      </div>

      <div>
        <input
          type="file"
          accept=".pdf"
          onChange={onFileChange}
          ref={inputRef}
          className="hidden"
        />
        <button
          onClick={() => inputRef.current?.click()}
          className="px-6 py-3 bg-blue-600 text-white rounded-xl shadow hover:bg-blue-700 transition"
        >
          Upload PDF Resume
        </button>
      </div>

      {loading && <Loading />}
      {error && <ErrorMessage message={error} />}
      {analysis && <ResultCard result={analysis} />}
    </>
  );
}
