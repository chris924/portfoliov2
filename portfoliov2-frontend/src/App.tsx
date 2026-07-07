import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import LeverViewer from "./components/animations/leverviewer";
import PullCord from "./components/PullCord";

function Typewriter({ text, speed = 110 }: { text: string; speed?: number }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (count >= text.length) return;
    const id = setTimeout(() => setCount((c) => c + 1), speed);

    return () => clearTimeout(id);
  }, [count, text, speed]);

  return (
    <span>
      {text.slice(0, count)}
      <span className="type-cursor">|</span>
    </span>
  );
}

function App() {
  const [triggered, setTriggered] = useState(false);

  return (
    <div className="fullscreen-container">
      <LeverViewer modelUrl="/models/lever.glb" onLeverTrigger={() => setTriggered(true)} />

      <div className="overlay-center">
        <AnimatePresence>
          {triggered && (
            <motion.h1
              className="wip-text"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
            >
              <Typewriter text="Work in progress... :)" />
            </motion.h1>
          )}
        </AnimatePresence>
      </div>

      <AnimatePresence>{triggered && <PullCord />}</AnimatePresence>
    </div>
  );
}

export default App;
