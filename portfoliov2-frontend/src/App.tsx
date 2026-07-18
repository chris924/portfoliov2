import { useEffect, useRef, useState } from "react";
import { AnimatePresence } from "framer-motion";

import LeverViewer from "./components/animations/leverviewer";
import PullCord from "./components/PullCord";
import Hero from "./components/sections/Hero";
import About from "./components/sections/About";
import Projects from "./components/sections/Projects";
import Contact from "./components/sections/Contact";

function App() {
  const [triggered, setTriggered] = useState(false);
  const [pulled, setPulled] = useState(false);

  const aboutRef = useRef<HTMLElement>(null);
  const projectsRef = useRef<HTMLElement>(null);
  const contactRef = useRef<HTMLElement>(null);

  const scrollTo = (ref: React.RefObject<HTMLElement>) =>
    ref.current?.scrollIntoView({ behavior: "smooth" });

  useEffect(() => {
    document.documentElement.classList.toggle("dark", !pulled);
  }, [pulled])

  return (
    <div>
      <section className="hero-section">
        <LeverViewer modelUrl="/models/lever.glb" onLeverTrigger={() => setTriggered(true)} />

        <div className="overlay-center">
          <AnimatePresence>
            {triggered && (
              <Hero
                onNavigateAbout={() => scrollTo(aboutRef)}
                onNavigateProjects={() => scrollTo(projectsRef)}
                onNavigateContact={() => scrollTo(contactRef)}
              />
            )}
          </AnimatePresence>
        </div>

        <AnimatePresence>{triggered && <PullCord onPull={() => setPulled((p) => !p)} />}</AnimatePresence>
      </section>

      {triggered && (
        <>
          <About ref={aboutRef} />
          <Projects ref={projectsRef} />
          <Contact ref={contactRef} />
        </>
      )}
    </div>
  );
}

export default App;
