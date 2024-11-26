import { motion } from "framer-motion";
import { useState, useEffect } from "react";

interface TypeWriterProps {
  text: string;
  onRevealComplete?: () => void;
}

const TypewriterEffect = ({ text, onRevealComplete }: TypeWriterProps) => {
  const [displayedText, setDisplayedText] = useState("");

  useEffect(() => {

    if ( displayedText.length === 0) {
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
  }, [ text, onRevealComplete]);

  return (
    <span>
      <motion.span
        initial="hidden"
        animate={{ opacity: [0, 1] }}
        transition={{ duration: 0.1 }}
        className=""
      >
        {displayedText}
      </motion.span>
    </span>
  );
};

export default TypewriterEffect;