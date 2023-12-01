import { useState, useEffect, useRef } from "react";
import reactLogo from "../assets/react.svg";
import memoji_1 from "../assets/memojis/memoji-1.png";
import memoji_2 from "../assets/memojis/memoji-2.png";
import memoji_3 from "../assets/memojis/memoji-3.png";
import obLogo from "../assets/ob-logo.svg";
import bluffOvalDesktop from "../assets/0001-0250.mp4";
import bluffTextMobile from "../assets/Bluff_Portrait_Text.mp4";
import linkedIn from "../assets/linkedin-icon.svg";
import gitHub from "../assets/github-icon.svg";
import "./styles/App.css";

function App() {
  // memojis
  const memojis: string[] = [memoji_1, memoji_2, memoji_3];
  const [currentMemojiIndex, setCurrentMemojiIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 750);
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const previousTimeRef = useRef<number>(0);
  const isPlayingRef = useRef<boolean>(false);

  useEffect(() => {
    const handleResize = () => {
      if (videoRef.current) {
        // Save the current playback state
        previousTimeRef.current = videoRef.current.currentTime;
        isPlayingRef.current = !videoRef.current.paused;

        videoRef.current.src = null!;
        videoRef.current.load();

        if (!isMobile) {
          videoRef.current.src = bluffOvalDesktop;
        } else {
          videoRef.current.src = bluffTextMobile;
        }

        // Restore the previous playback state
        videoRef.current.currentTime = previousTimeRef.current;
        if (isPlayingRef.current) {
          videoRef.current.play();
        }
      }

      setIsMobile(window.innerWidth <= 750);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [isMobile]);

  useEffect(() => {
    const handleScroll = () => {
      // Get the current scroll position
      const scrollPosition = window.scrollY;
  
      // Map the scroll position to the video timestamp
      const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
      const timestamp = (scrollPosition / maxScroll) * (videoRef.current?.duration || 0);
  
      // Set the video timestamp if videoRef is defined
      if (videoRef.current) {
        videoRef.current.currentTime = timestamp;
      }
    };
  
    window.addEventListener("scroll", handleScroll);
  
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [videoRef.current]);

  return (
    <div className="App">
      <div>
        <div>
          <br />
          <br />
          <br />
          {isMobile ? (
            <video ref={videoRef} width="500" height="750" autoPlay loop muted playsInline
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              objectPosition: "center center",
            }}
            >
              <source src={bluffTextMobile} type="video/mp4" />
            </video>
          ) : (
            <video ref={videoRef} width="750" height="500" autoPlay loop muted playsInline>
              <source src={bluffOvalDesktop} type="video/mp4" />
            </video>
          )}
          <h1>Oliver Bluff</h1>
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
