import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

// Function to generate random characters
const getRandomChar = () => {
  const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()";
  return chars[Math.floor(Math.random() * chars.length)];
};

const HoverInHackerTyper: React.FC<{ children: string, hoverFrom: string }> = ({ children, hoverFrom }) => {
  const [displayedText, setDisplayedText] = useState<string>("");

  const getInitialPosition = () => {
    switch (hoverFrom) {
      case "up":
        return { y: -50, x: 0 };
      case "down":
        return { y: 50, x: 0 };
      case "left":
        return { x: -50, y: 0 };
      case "right":
        return { x: 50, y: 0 };
      default:
        return { y: -50, x: 0 }; 
    }
  };

  const initialPosition = getInitialPosition();

  useEffect(() => {
    let currentIndex = 0;

    const intervalTime = children.length < 5 ? 200 : 65;

    const updateText = () => {
      if (currentIndex < children.length) {
        const randomChars = children
          .split("")
          .map((char, idx) =>
            idx <= currentIndex ? char : getRandomChar()
          )
          .join("");
        setDisplayedText(randomChars);
        currentIndex++;
      } else {
        clearInterval(intervalId);
      }
    };

    const intervalId = setInterval(updateText, intervalTime); 

    return () => clearInterval(intervalId);
  }, [children]);

  return (
    <motion.div
      initial={{ opacity: 0, x: initialPosition.x, y: initialPosition.y }}
      animate={{ opacity: 1, x: 0, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      {displayedText}
    </motion.div>
  );
};

export default HoverInHackerTyper;