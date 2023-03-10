import { useState } from "react";
import reactLogo from "../assets/react.svg";
import memoji_1 from "../assets/memojis/memoji-1.png";
import memoji_2 from "../assets/memojis/memoji-2.png";
import memoji_3 from "../assets/memojis/memoji-3.png";
import obLogo from "../assets/ob-logo.svg";
import linkedIn from "../assets/linkedin-icon.svg";
import gitHub from "../assets/github-icon.svg";
import "./styles/App.css";

function App() {
  // memojis
  const memojis: string[] = [memoji_1, memoji_2, memoji_3];
  const [currentMemojiIndex, setCurrentMemojiIndex] = useState(0);

  function iterateMemoji() {
    setCurrentMemojiIndex((currentMemojiIndex + 1) % memojis.length);
  }

  return (
    <div className="App">
      <div>
        <div>
          <br />
          <br />
          <br />
          <br />
          <br />
          <img
            src={memojis[currentMemojiIndex]}
            className="memoji"
            id="memoji"
            alt="Oliver's memoji"
            onClick={iterateMemoji}
          />
          <h1>Oliver Bluff</h1>
          <code>Click the memoji to change!</code>
        </div>
        <a href="https://vitejs.dev" target="_blank">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
        <img src={obLogo} className="logo react" alt="OB Logo" />
        <a
          href="https://www.linkedin.com/in/oliver-bluff-4ba183196/"
          target="_blank"
        >
          <img src={linkedIn} className="logo icon" alt="LinkedIn Icon" />
        </a>
        <a href="https://github.com/bllluuu" target="_blank">
          <img src={gitHub} className="logo icon" alt="GitHub Icon" />
        </a>
      </div>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
    </div>
  );
}

export default App;
