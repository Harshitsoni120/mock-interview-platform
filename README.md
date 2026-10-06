# PeerPrep - Real-Time Technical Mock Interview Platform

PeerPrep is a developer interview platform designed for live coding collaboration and technical evaluation rounds.

## 🚀 Key Highlights
- **Monaco Code Editor**: VS Code-powered browser IDE supporting multi-language syntax highlighting (JavaScript, C++, Java).
- **Client-Side Test Runner**: Dynamic code evaluator that validates DSA solutions against test cases in real time.
- **Peer Collaboration Workspace**: Synchronized layout featuring candidate/interviewer camera spaces and real-time chat.
- **Dynamic Routing**: Built using Next.js App Router for unique room generation (`/room/[roomId]`).
- **Backend Ready**: Modular architecture designed for Express.js, WebSockets (Socket.io), and code execution runners.

## 🛠️ Tech Stack
- **Framework**: Next.js 15 (App Router, React 19)
- **Styling**: Tailwind CSS
- **Code Editor**: `@monaco-editor/react`
- **Icons**: `lucide-react`
- **Planned Backend**: Node.js, Express, Socket.io, Judge API

## 💻 Local Setup
```bash
git clone <your-repo-link>
cd peer-prep
npm install
npm run dev