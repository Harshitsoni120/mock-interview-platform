"use client";
import { Terminal, Check, X } from "lucide-react";

export default function OutputPanel({ output, isError }) {
  return (
    <div className="h-44 bg-[#141416] border-t border-zinc-800 flex flex-col font-mono text-xs">
      <div className="px-4 py-1.5 bg-[#1a1a1e] border-b border-zinc-800 flex items-center justify-between text-zinc-400">
        <div className="flex items-center gap-1.5">
          <Terminal className="w-3.5 h-3.5" />
          <span>Execution Console / Test Results</span>
        </div>
        {output && (
          <span className={`flex items-center gap-1 ${isError ? "text-rose-400" : "text-emerald-400"}`}>
            {isError ? <X className="w-3 h-3" /> : <Check className="w-3 h-3" />}
            {isError ? "Runtime Error" : "Test Passed"}
          </span>
        )}
      </div>

      <div className="p-3 flex-1 overflow-y-auto text-zinc-300">
        {output ? (
          <pre className={`whitespace-pre-wrap ${isError ? "text-rose-400" : "text-zinc-200"}`}>
            {output}
          </pre>
        ) : (
          <div className="text-zinc-600 italic">Click "Run Code" to execute code against sample test cases...</div>
        )}
      </div>
    </div>
  );
}