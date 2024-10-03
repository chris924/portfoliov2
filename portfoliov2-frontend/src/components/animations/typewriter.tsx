import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { useInView } from "react-intersection-observer";

interface TypeWriterProps {
  children: string; 
  thold?: number;
  onRevealComplete?: () => void;
}

const TypewriterEffect = ({ children, thold = 0.4, onRevealComplete }: TypeWriterProps) => {
  const [displayedText, setDisplayedText] = useState("");
  const [ref, inView] = useInView({
    threshold: thold,
    triggerOnce: true,
  });

  useEffect(() => {
    if (inView) {
      let currentText = "";
      let index = 0;

      const typeInterval = setInterval(() => {
        if (index < children.length) {
          currentText += children[index];
          setDisplayedText(currentText);
          index++;
        } else {
          clearInterval(typeInterval);
          if (onRevealComplete) {
            onRevealComplete();
          }
        }
      }, 30); 

      return () => clearInterval(typeInterval);
    }
  }, [inView, children, onRevealComplete]);

  return (
    <span ref={ref}>
      <motion.span
        key={displayedText}
        animate={{ opacity: displayedText.length === children.length ? 1 : 0 }} 
        transition={{ duration: 0.5 }} 
        className="flex flex-row justify-center items-center text-3xl font-mono"
      >
        {displayedText}
      </motion.span>
    </span>
  );
};

export default TypewriterEffect;