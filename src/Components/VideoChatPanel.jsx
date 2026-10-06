"use client";
import { useState } from "react";
import { Mic, MicOff, Video, VideoOff, MessageSquare, Send } from "lucide-react";

export default function VideoChatPanel() {
  const [micOn, setMicOn] = useState(true);
  const [videoOn, setVideoOn] = useState(true);
  const [messages, setMessages] = useState([
    { sender: "System", text: "Interview room initialized. Candidate joined." },
    { sender: "Interviewer", text: "Hi, let's start with the Two Sum problem." },
  ]);
  const [inputMsg, setInputMsg] = useState("");

  const handleSendMessage = (e) => {
    e.preventDefault();
    if (!inputMsg.trim()) return;
    setMessages((prev) => [...prev, { sender: "You", text: inputMsg }]);
    setInputMsg("");
  };

  return (
    <div className="flex flex-col h-full bg-[#18181b] border-l border-zinc-800">
      {/* Video Feeds Container */}
      <div className="p-3 border-b border-zinc-800 grid grid-rows-2 gap-3 h-64">
        {/* Peer Video (Interviewer) */}
        <div className="relative bg-zinc-900 border border-zinc-800 rounded-lg flex items-center justify-center overflow-hidden">
          <div className="w-12 h-12 rounded-full bg-indigo-600/30 border border-indigo-500 flex items-center justify-center text-indigo-300 font-bold text-sm">
            IN
          </div>
          <span className="absolute bottom-2 left-2 text-[10px] bg-black/60 px-2 py-0.5 rounded text-zinc-300">
            Interviewer (Host)
          </span>
        </div>

        {/* Self Video (Candidate) */}
        <div className="relative bg-zinc-900 border border-zinc-800 rounded-lg flex items-center justify-center overflow-hidden">
          {videoOn ? (
            <div className="w-12 h-12 rounded-full bg-emerald-600/30 border border-emerald-500 flex items-center justify-center text-emerald-300 font-bold text-sm">
              YOU
            </div>
          ) : (
            <div className="text-xs text-zinc-500">Camera Off</div>
          )}
          <span className="absolute bottom-2 left-2 text-[10px] bg-black/60 px-2 py-0.5 rounded text-zinc-300">
            You (Candidate)
          </span>

          {/* Quick Controls inside self card */}
          <div className="absolute bottom-2 right-2 flex gap-1">
            <button
              onClick={() => setMicOn(!micOn)}
              className={`p-1.5 rounded ${micOn ? "bg-zinc-700 text-zinc-200" : "bg-red-600 text-white"}`}
            >
              {micOn ? <Mic className="w-3 h-3" /> : <MicOff className="w-3 h-3" />}
            </button>
            <button
              onClick={() => setVideoOn(!videoOn)}
              className={`p-1.5 rounded ${videoOn ? "bg-zinc-700 text-zinc-200" : "bg-red-600 text-white"}`}
            >
              {videoOn ? <Video className="w-3 h-3" /> : <VideoOff className="w-3 h-3" />}
            </button>
          </div>
        </div>
      </div>

      {/* Real-time Room Chat */}
      <div className="flex-1 flex flex-col p-3 overflow-hidden">
        <div className="flex items-center gap-1.5 mb-2 text-xs font-semibold text-zinc-400">
          <MessageSquare className="w-3.5 h-3.5" />
          <span>Session Discussion</span>
        </div>

        <div className="flex-1 overflow-y-auto space-y-2 pr-1 text-xs">
          {messages.map((m, i) => (
            <div
              key={i}
              className={`p-2 rounded max-w-[85%] ${
                m.sender === "You"
                  ? "ml-auto bg-indigo-600 text-white"
                  : m.sender === "System"
                  ? "mx-auto bg-zinc-800/60 text-zinc-400 text-[11px] text-center w-full"
                  : "bg-zinc-800 text-zinc-200"
              }`}
            >
              {m.sender !== "System" && (
                <div className="text-[10px] opacity-70 mb-0.5 font-bold">{m.sender}</div>
              )}
              <div>{m.text}</div>
            </div>
          ))}
        </div>

        <form onSubmit={handleSendMessage} className="mt-2 flex gap-1.5">
          <input
            type="text"
            placeholder="Type message or ask hint..."
            value={inputMsg}
            onChange={(e) => setInputMsg(e.target.value)}
            className="flex-1 bg-zinc-900 border border-zinc-800 rounded px-2.5 py-1.5 text-xs text-zinc-200 outline-none focus:border-zinc-600"
          />
          <button
            type="submit"
            className="bg-indigo-600 hover:bg-indigo-500 text-white px-2.5 rounded transition flex items-center justify-center"
          >
            <Send className="w-3 h-3" />
          </button>
        </form>
      </div>
    </div>
  );
}