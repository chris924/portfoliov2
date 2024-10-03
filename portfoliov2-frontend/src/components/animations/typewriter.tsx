import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { useInView } from "react-intersection-observer";

interface TypeWriterProps {
  text: string;
  thold?: number;
  onRevealComplete?: () => void;
}

const TypewriterEffect = ({ text, thold = 0.4, onRevealComplete }: TypeWriterProps) => {
  const [displayedText, setDisplayedText] = useState("");
  const [ref, inView] = useInView({
    threshold: thold,  
    triggerOnce: true, 
  });

  useEffect(() => {
    if (inView && displayedText.length === 0) {
      let currentText = "";
      let index = 0;

      const typeInterval = setInterval(() => {
        currentText += text[index];
        setDisplayedText(currentText);
        index++;

        if (index === text.length) {
          clearInterval(typeInterval);

          if (onRevealComplete) {
            onRevealComplete();
          }
        }
      }, 30); 

      return () => clearInterval(typeInterval); 
    }
  }, [inView, text, onRevealComplete]);

  return (
    <span ref={ref}>
      <motion.span
        animate={{ opacity: [0, 1] }}
        transition={{ duration: 0.1 }}
        className="text-3xl font-mono"
      >
        {displayedText}
      </motion.span>
    </span>
  );
};

export default TypewriterEffect;