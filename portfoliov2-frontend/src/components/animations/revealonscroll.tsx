import { delay, motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";


interface RevealOnScrollProps {
    children: React.ReactNode;
    onRevealComplete?: () => void;
    revealThreshold?: number;
    revealDelay?: number; 
  }


export default function RevealOnScroll({children, onRevealComplete, revealThreshold, revealDelay = 0}: RevealOnScrollProps) {
  const threshold = revealThreshold ? revealThreshold : 0.4;


  const controls = useAnimation();
  const [ref, inView] = useInView({
    threshold: threshold,  
  });

  useEffect(() => {
    if (inView) {
      controls.start("visible").then(() => {
        if (onRevealComplete) {
          onRevealComplete();
        }
      });
    }
  }, [controls, inView, onRevealComplete]);

  const variants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, delay: revealDelay },
    },
  };

  return (
    <motion.div
      ref={ref}
      animate={controls}
      initial="hidden"
      variants={variants}
    >
      {children}
    </motion.div>
  );
}