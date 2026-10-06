"use client";
import { BookOpen, CheckCircle, AlertCircle } from "lucide-react";

export default function ProblemPanel({ question }) {
  if (!question) return <div className="p-4 text-zinc-500">Loading Question...</div>;

  return (
    <div className="flex flex-col h-full bg-[#18181b] border-r border-zinc-800 text-zinc-200 overflow-y-auto">
      {/* Header */}
      <div className="p-4 border-b border-zinc-800">
        <div className="flex items-center gap-2 mb-2">
          <span className="text-xs font-semibold px-2 py-0.5 rounded bg-emerald-950 text-emerald-400 border border-emerald-800">
            {question.difficulty}
          </span>
          <span className="text-xs text-zinc-400 bg-zinc-800 px-2 py-0.5 rounded">
            {question.category}
          </span>
        </div>
        <h1 className="text-lg font-bold text-zinc-100">{question.title}</h1>
      </div>

      {/* Description */}
      <div className="p-4 space-y-4 text-sm leading-relaxed text-zinc-300">
        <p className="whitespace-pre-line">{question.description}</p>

        {/* Examples */}
        <div className="space-y-3 pt-2">
          <h3 className="font-semibold text-xs tracking-wider uppercase text-zinc-400">Examples:</h3>
          {question.examples.map((ex, idx) => (
            <div key={idx} className="bg-zinc-900 border border-zinc-800 rounded p-3 text-xs space-y-1">
              <div><strong className="text-zinc-400">Input:</strong> <code className="text-amber-300">{ex.input}</code></div>
              <div><strong className="text-zinc-400">Output:</strong> <code className="text-emerald-400">{ex.output}</code></div>
              {ex.explanation && (
                <div className="text-zinc-500 italic mt-1">{ex.explanation}</div>
              )}
            </div>
          ))}
        </div>

        {/* Constraints */}
        <div className="space-y-2 pt-2">
          <h3 className="font-semibold text-xs tracking-wider uppercase text-zinc-400">Constraints:</h3>
          <ul className="list-disc pl-5 space-y-1 text-xs text-zinc-400">
            {question.constraints.map((c, i) => (
              <li key={i}><code>{c}</code></li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}