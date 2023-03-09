import { useState } from "react";
import reactLogo from "./assets/react.svg";
import memoji from "./assets/memoji.png";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <div>
        <div>
          <img src={memoji} className="memoji" alt="Oliver's memoji" />
          <h1>Oliver Bluff</h1>
        </div>
        <a href="https://vitejs.dev" target="_blank">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
    </div>
  );
}

export default App;
