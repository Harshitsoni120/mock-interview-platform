"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { Code2, Users2, Sparkles, Terminal, ArrowRight } from "lucide-react";

export default function LandingPage() {
  const router = useRouter();
  const [customRoom, setCustomRoom] = useState("");

  const handleCreateInstantRoom = () => {
    const randomId = "room-" + Math.random().toString(36).substring(2, 8);
    router.push(`/room/${randomId}`);
  };

  const handleJoinCustom = (e) => {
    e.preventDefault();
    if (customRoom.trim()) {
      router.push(`/room/${customRoom.trim()}`);
    }
  };

  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100 flex flex-col justify-between selection:bg-indigo-500 selection:text-white">
      {/* Navbar */}
      <nav className="border-b border-zinc-800/80 px-6 py-4 flex items-center justify-between max-w-6xl mx-auto w-full">
        <div className="flex items-center gap-2">
          <div className="bg-indigo-600 p-1.5 rounded-lg text-white">
            <Code2 className="w-5 h-5" />
          </div>
          <span className="font-extrabold text-lg tracking-tight">PeerPrep</span>
        </div>
        <div className="text-xs text-zinc-400 font-mono border border-zinc-800 px-3 py-1 rounded-full">
          v1.0 • Ready for Node.js Engine
        </div>
      </nav>

      {/* Hero Content */}
      <main className="max-w-4xl mx-auto px-6 py-16 text-center flex flex-col items-center">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-950/60 border border-indigo-800 text-indigo-300 text-xs font-medium mb-6">
          <Sparkles className="w-3.5 h-3.5" />
          Real-Time Technical Mock Platform
        </div>

        <h1 className="text-4xl sm:text-6xl font-black tracking-tight text-white mb-6">
          Master Coding Interviews <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-emerald-400">
            Side-by-Side With Peers
          </span>
        </h1>

        <p className="text-zinc-400 text-base sm:text-lg max-w-2xl mb-10 leading-relaxed">
          Full-featured coding workspace with synchronized Monaco editor, integrated peer video layout, 
          and curated DSA problem suites built for software engineering interviews.
        </p>

        {/* CTA Actions */}
        <div className="flex flex-col sm:flex-row gap-4 items-center justify-center w-full max-w-md">
          <button
            onClick={handleCreateInstantRoom}
            className="w-full sm:w-auto flex-1 flex items-center justify-center gap-2 bg-indigo-600 hover:bg-indigo-500 text-white font-semibold py-3 px-6 rounded-lg transition shadow-lg shadow-indigo-600/20"
          >
            Create Instant Room
            <ArrowRight className="w-4 h-4" />
          </button>

          <form onSubmit={handleJoinCustom} className="w-full sm:w-auto flex-1 flex gap-2">
            <input
              type="text"
              placeholder="Enter Room Code"
              value={customRoom}
              onChange={(e) => setCustomRoom(e.target.value)}
              className="w-full bg-zinc-900 border border-zinc-800 rounded-lg px-3 py-2.5 text-sm text-zinc-200 outline-none focus:border-zinc-600 font-mono"
            />
            <button
              type="submit"
              className="bg-zinc-800 hover:bg-zinc-700 text-zinc-200 font-medium px-4 py-2.5 rounded-lg text-sm transition border border-zinc-700"
            >
              Join
            </button>
          </form>
        </div>

        {/* Feature Grid Highlights */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-20 text-left w-full">
          <div className="p-5 rounded-xl bg-zinc-900/50 border border-zinc-800/80">
            <div className="w-8 h-8 rounded bg-zinc-800 flex items-center justify-center text-indigo-400 mb-3">
              <Terminal className="w-4 h-4" />
            </div>
            <h3 className="font-semibold text-sm text-zinc-200 mb-1">Monaco Engine</h3>
            <p className="text-xs text-zinc-400 leading-normal">
              Industry-grade VS Code editor inside browser with multi-language syntax support.
            </p>
          </div>

          <div className="p-5 rounded-xl bg-zinc-900/50 border border-zinc-800/80">
            <div className="w-8 h-8 rounded bg-zinc-800 flex items-center justify-center text-emerald-400 mb-3">
              <Users2 className="w-4 h-4" />
            </div>
            <h3 className="font-semibold text-sm text-zinc-200 mb-1">Dual Peer Setup</h3>
            <p className="text-xs text-zinc-400 leading-normal">
              Pre-built layouts for candidate and interviewer video feeds alongside live chat.
            </p>
          </div>

          <div className="p-5 rounded-xl bg-zinc-900/50 border border-zinc-800/80">
            <div className="w-8 h-8 rounded bg-zinc-800 flex items-center justify-center text-amber-400 mb-3">
              <Code2 className="w-4 h-4" />
            </div>
            <h3 className="font-semibold text-sm text-zinc-200 mb-1">DSA Ready</h3>
            <p className="text-xs text-zinc-400 leading-normal">
              Structured problem schemas with examples, test cases, and constraints preloaded.
            </p>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-zinc-900 py-6 text-center text-xs text-zinc-500">
        PeerPrep Interview Platform • Ready for Node.js & WebSockets Integration
      </footer>
    </div>
  );
}