import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

// Function to generate random characters
const getRandomChar = () => {
  const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()";
  return chars[Math.floor(Math.random() * chars.length)];
};

interface HoverInHackerTyperProps {
  children: string;
  hoverFrom: string;
  delay?: number;
}

const HoverInHackerTyper: React.FC<HoverInHackerTyperProps> = ({
  children,
  hoverFrom,
  delay = 0,
}) => {
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
    const intervalTime = children.length < 6 ? 200 : 85;

    const startAnimation = () => {
      const intervalId = setInterval(() => {
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
      }, intervalTime);
    };

    const timeoutId = setTimeout(startAnimation, delay);

    return () => {
      clearTimeout(timeoutId); 
    };
  }, [children, delay]);

  return (
    <motion.div
      initial={{ opacity: 0, x: initialPosition.x, y: initialPosition.y }}
      animate={{ opacity: 1, x: 0, y: 0 }}
      transition={{ duration: 0.5, delay: delay / 1000 }}
    >
      {displayedText}
    </motion.div>
  );
};

export default HoverInHackerTyper;