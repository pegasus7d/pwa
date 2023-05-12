// import ChatArea from "./components/ChatArea";
import { lazy,Suspense } from "react";
const ChatArea= lazy(()=>import("./components/ChatArea"))
function App() {
  return (
    <div>
      <Suspense fallback={<div>Please wait ....</div>}>
      <ChatArea/>
      </Suspense>
    </div>
  );
}

export default App;
