import { motion, useAnimation } from "framer-motion";
import { useEffect, useState } from "react";

interface CoinSlotProps {
  children: React.ReactNode;
}

export default function CoinSlot({ children }: CoinSlotProps) {
  const controls = useAnimation();
  const [dur, setDur] = useState(0.03);

  useEffect(() => {
    const animate = async () => {
      while (true) {
        await controls.start({
          y: [-100, 100],
          opacity: [0, 1],
          transition: {
            duration: dur,
            ease: "easeOut",
          },
        });
        setDur(prev => Math.min(prev + 0.01, 2));
      }
    };

    animate(); 
  }, [controls, dur]);

  return (
    <div>
      <motion.div animate={controls} initial={{ y: -100, opacity: 0 }}>
        {children}
      </motion.div>
    </div>
  );
}