import { useState, useEffect, useRef } from "react";
import reactLogo from "../assets/react.svg";
import memoji_1 from "../assets/memojis/memoji-1.png";
import memoji_2 from "../assets/memojis/memoji-2.png";
import memoji_3 from "../assets/memojis/memoji-3.png";
import obLogo from "../assets/ob-logo.svg";
import iOSIcon from "../assets/iOSIconWhite.svg";
import bluffOvalDesktop from "../assets/0001-0250.mp4";
import bluffTextMobile from "../assets/Bluff_Portrait_Text.mp4";
import linkedIn from "../assets/linkedin-icon.svg";
import gitHub from "../assets/github-icon.svg";
import "./styles/App.css";

function App() {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 750);
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const previousTimeRef = useRef<number>(0);
  const isPlayingRef = useRef<boolean>(false);

  useEffect(() => {
    const isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);

    if (isSafari && isMobile) {
      document.body.style.overflow = "hidden";

      return () => {
        document.body.style.overflow = "auto";
      };
    }
  }, [isMobile]);

  useEffect(() => {
    const handleResize = () => {
      if (videoRef.current) {
        previousTimeRef.current = videoRef.current.currentTime;
        isPlayingRef.current = !videoRef.current.paused;

        videoRef.current.src = null!;
        videoRef.current.load();

        videoRef.current.src = isMobile ? bluffTextMobile : bluffOvalDesktop;

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
      const scrollPosition = window.scrollY;
      const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
      const timestamp = (scrollPosition / maxScroll) * (videoRef.current?.duration || 0);

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
            <div>
              <br />
              <br />
              <video ref={videoRef} width="750" height="500" autoPlay loop muted playsInline>
                <source src={bluffOvalDesktop} type="video/mp4" />
              </video>
            </div>
          )}
          <h1>Oliver Bluff</h1>
        </div>
        <img src={iOSIcon} className="logo react" alt="OB Logo" />
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
