import { motion } from "framer-motion";

interface TextModifierProps {
    children: React.ReactNode
}

const TextModifier = ({children}: TextModifierProps) => {
  return (
    <motion.h1
      initial={{ scale: 1, rotate: 0, color: "#ffffff" }}
      animate={{
        scale: [1, 1.2, 1], // Scales the text
        rotate: [0, 10, -10, 0], // Rotates the text slightly
        color: ["#ffffff", "#3498db", "#e74c3c", "#ffffff"], // Changes text color
      }}
      transition={{
        duration: 3, // Full cycle duration
        repeat: Infinity, // Loops infinitely
        repeatType: "reverse", // Reverses back to the original state
        ease: "easeInOut", // Smooth transitions
      }}
      style={{
        fontSize: "3rem",
        fontWeight: "bold",
        textAlign: "center",
        marginTop: "50px",
        fontFamily: "Arial, sans-serif",
      }}
    >
     {children}
    </motion.h1>
  );
};

export default TextModifier;