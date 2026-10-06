"use client";
import Editor from "@monaco-editor/react";
import { Play, RotateCcw } from "lucide-react";

export default function CodeEditor({ language, setLanguage, code, setCode, onRun, isRunning }) {
  const languages = [
    { label: "JavaScript", value: "javascript" },
    { label: "C++", value: "cpp" },
    { label: "Java", value: "java" },
  ];

  return (
    <div className="flex flex-col h-full bg-[#1e1e1e] border-r border-zinc-800">
      {/* Editor Action Bar */}
      <div className="flex items-center justify-between px-4 py-2 bg-[#252526] border-b border-zinc-800">
        <div className="flex items-center gap-2">
          <label className="text-xs text-zinc-400 font-medium">Language:</label>
          <select
            value={language}
            onChange={(e) => setLanguage(e.target.value)}
            className="bg-[#333333] text-zinc-200 text-xs px-2.5 py-1 rounded outline-none border border-zinc-700 cursor-pointer"
          >
            {languages.map((lang) => (
              <option key={lang.value} value={lang.value}>
                {lang.label}
              </option>
            ))}
          </select>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={() => setCode("")}
            className="flex items-center gap-1 text-xs text-zinc-400 hover:text-zinc-200 px-2 py-1 transition"
            title="Reset Code"
          >
            <RotateCcw className="w-3.5 h-3.5" />
          </button>
          <button
            onClick={onRun}
            disabled={isRunning}
            className="flex items-center gap-1.5 bg-emerald-600 hover:bg-emerald-500 text-white text-xs px-3.5 py-1.5 rounded font-medium transition disabled:opacity-50"
          >
            <Play className="w-3.5 h-3.5 fill-current" />
            {isRunning ? "Running..." : "Run Code"}
          </button>
        </div>
      </div>

      {/* Editor Body */}
      <div className="flex-1 w-full">
        <Editor
          height="100%"
          language={language === "cpp" ? "cpp" : language}
          value={code}
          theme="vs-dark"
          onChange={(val) => setCode(val || "")}
          options={{
            minimap: { enabled: false },
            fontSize: 14,
            lineNumbers: "on",
            scrollBeyondLastLine: false,
            automaticLayout: true,
            tabSize: 2,
          }}
        />
      </div>
    </div>
  );
}