import { useState } from "react";
import reactLogo from "./assets/react.svg";
import memoji_1 from "./assets/memojis/memoji-1.png";
import memoji_2 from "./assets/memojis/memoji-2.png";
import memoji_3 from "./assets/memojis/memoji-3.png";
import "./App.css";

function App() {
  // memojis
  const memojis: string[] = [memoji_1, memoji_2, memoji_3,];
  const [currentMemojiIndex, setCurrentMemojiIndex] = useState(0);

  function iterateMemoji() {
    setCurrentMemojiIndex((currentMemojiIndex + 1) % memojis.length);
  }

  return (
    <div className="App">
      <div>
        <div>
          <img src={memojis[currentMemojiIndex]} className="memoji" id="memoji" alt="Oliver's memoji" onClick={iterateMemoji}/>
          <h1>Oliver Bluff</h1>
          <code>Click the memoji to change!</code>
        </div>
        <a href="https://vitejs.dev" target="_blank">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
    </div>
  );
}

export default App;
