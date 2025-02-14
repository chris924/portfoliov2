import "../../styles/globals.css";
import { motion } from "framer-motion";

interface FallingBackgroundProps {
  onComplete: () => void;
}

const FallingBackground = ({ onComplete }: FallingBackgroundProps) => {
  return (
    <motion.div
      className="falling-background w-full h-screen will-change-transform"
      initial={{ y: "-100%" }}
      animate={{ y: "0%" }}
      exit={{ y: "100%" }}
      transition={{ duration: 0.5 }}
      onAnimationComplete={onComplete}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        height: "100%",
        width: "100%",
        zIndex: 0,
      }}
    >
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundImage: "url('/images/darkbg-lowest-res.jpg')",
        }}
      />
    </motion.div>
  );
};

export default FallingBackground;