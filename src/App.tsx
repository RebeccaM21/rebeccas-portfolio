import "./App.css";
import "./index.css";

import LoadingScreen from "./components/LoadingScreen";
import { useRef, useState } from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import AboutMe from "./components/AboutMe";
import Projects from "./components/Projects";

function App() {
  const [isLoading, setIsLoading] = useState(true);

  const homeRef = useRef<HTMLElement | null>(null);
  const aboutRef = useRef<HTMLElement | null>(null);
  const projectsRef = useRef<HTMLElement | null>(null);

  return (
    <>
      {isLoading ? (
        <LoadingScreen onComplete={() => setIsLoading(false)} />
      ) : null}
      <div
        className={`min-h-screen transition-opacity-duration-700 ${isLoading ? "opacity-0" : "opacity-100"} bg-[#f6d6b1] text-gray-100`}
      >
        <Navbar refs={[homeRef, aboutRef, projectsRef]} />
        <Home refs={[homeRef, projectsRef]} />
        <AboutMe ref={aboutRef} />
        <Projects ref={projectsRef} />
      </div>
    </>
  );
}

export default App;
