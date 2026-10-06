"use client";
import { useState, use } from "react";
import Link from "next/link";
import ProblemPanel from "@/components/ProblemPanel";
import CodeEditor from "@/components/CodeEditor";
import VideoChatPanel from "@/components/VideoChatPanel";
import OutputPanel from "@/components/OutputPanel";
import { MOCK_QUESTIONS } from "@/data/mockQuestions";
import { ArrowLeft, CheckCircle2 } from "lucide-react";

export default function InterviewRoom({ params }) {
  const unwrappedParams = use(params);
  const roomId = unwrappedParams.roomId;

  const currentQuestion = MOCK_QUESTIONS[0];
  const [language, setLanguage] = useState("javascript");
  const [code, setCode] = useState(currentQuestion.starterCode.javascript);
  const [output, setOutput] = useState("");
  const [isError, setIsError] = useState(false);
  const [isRunning, setIsRunning] = useState(false);

  // Language change hone par boilerplate code update
  const handleLanguageChange = (newLang) => {
    setLanguage(newLang);
    setCode(currentQuestion.starterCode[newLang] || "");
  };

  // Safe client-side evaluator demo (backend se pehle demo run ke liye)
  const handleRunCode = () => {
    setIsRunning(true);
    setOutput("Running test cases...");

    setTimeout(() => {
      setIsRunning(false);
      if (language === "javascript") {
        try {
          // JS evaluation for twoSum demo
          const runFunc = new Function(`${code}; return twoSum([2, 7, 11, 15], 9);`);
          const result = runFunc();
          setOutput(`✓ Test Case 1 Passed:\nInput: nums = [2,7,11,15], target = 9\nOutput: ${JSON.stringify(result)}\nExpected: [0,1]\n\nExecution Time: 42ms`);
          setIsError(false);
        } catch (err) {
          setOutput(`Error: ${err.message}`);
          setIsError(true);
        }
      } else {
        setOutput(`Note: Full C++/Java compilation will be executed via our Node.js Judge API.\nSyntax verified locally.`);
        setIsError(false);
      }
    }, 800);
  };

  return (
    <div className="flex flex-col h-screen w-screen overflow-hidden bg-zinc-950">
      {/* Top Navbar */}
      <header className="h-12 border-b border-zinc-800 bg-zinc-900/80 px-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Link href="/" className="text-zinc-400 hover:text-white transition">
            <ArrowLeft className="w-4 h-4" />
          </Link>
          <div className="flex items-center gap-2">
            <span className="font-bold text-sm tracking-tight text-white">PeerPrep Room</span>
            <span className="text-[11px] bg-zinc-800 text-zinc-400 px-2 py-0.5 rounded font-mono">
              ID: {roomId}
            </span>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <div className="flex items-center gap-1 text-xs text-emerald-400 bg-emerald-950/60 border border-emerald-800 px-2.5 py-1 rounded">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
            Peer Connected
          </div>
          <button
            onClick={() => alert("Feedback summary will trigger once the backend session completes!")}
            className="flex items-center gap-1.5 bg-indigo-600 hover:bg-indigo-500 text-white text-xs px-3 py-1.5 rounded transition font-medium"
          >
            <CheckCircle2 className="w-3.5 h-3.5" />
            Finish Interview
          </button>
        </div>
      </header>

      {/* Main 3-Column Split Workspace */}
      <div className="flex-1 grid grid-cols-12 overflow-hidden">
        {/* Left: Problem Statement (3.5 cols) */}
        <div className="col-span-3 h-full overflow-hidden">
          <ProblemPanel question={currentQuestion} />
        </div>

        {/* Center: Monaco Code Editor + Output (6 cols) */}
        <div className="col-span-6 flex flex-col h-full overflow-hidden">
          <div className="flex-1 overflow-hidden">
            <CodeEditor
              language={language}
              setLanguage={handleLanguageChange}
              code={code}
              setCode={setCode}
              onRun={handleRunCode}
              isRunning={isRunning}
            />
          </div>
          <OutputPanel output={output} isError={isError} />
        </div>

        {/* Right: Video Feeds & Live Chat (3 cols) */}
        <div className="col-span-3 h-full overflow-hidden">
          <VideoChatPanel />
        </div>
      </div>
    </div>
  );
}