import { useEffect, useState } from "react";
import { motion } from "framer-motion";

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

function ArrowIcon({ rotate = 0 }: { rotate?: number }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" style={{ transform: `rotate(${rotate}deg)` }}>
      <path
        d="M12 4v14m0 0-6-6m6 6 6-6"
        stroke="currentColor"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

interface HeroProps {
  onNavigateAbout: () => void;
  onNavigateProjects: () => void;
  onNavigateContact: () => void;
}

export default function Hero({ onNavigateAbout, onNavigateProjects, onNavigateContact }: HeroProps) {
  return (
    <motion.div
      className="hero-copy"
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.7 }}
    >
      <h1 className="wip-text">
        <Typewriter text="Welcome here!" />
      </h1>
      <motion.p
        className="hero-tagline"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 2.2 }}
      >

        Krisztofer Burka — Software Developer
      </motion.p>

      <motion.div
        className="hero-arrows"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 3 }}
      >
        <button className="hero-arrow" onClick={onNavigateAbout}>
          <ArrowIcon rotate={-25} />
          about
        </button>
        <button className="hero-arrow" onClick={onNavigateProjects}>
          <ArrowIcon />
          projects
        </button>
        <button className="hero-arrow" onClick={onNavigateContact}>
          <ArrowIcon rotate={25} />
          contact
        </button>
      </motion.div>
    </motion.div>
  );
}
