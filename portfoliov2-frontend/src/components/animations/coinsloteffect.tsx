import { motion, useAnimation } from "framer-motion";
import { useEffect, useState } from "react";

interface CoinSlotProps {
  children: React.ReactNode;
}

export default function CoinSlot({ children }: CoinSlotProps) {
  const controls = useAnimation();
  const [dur, setDur] = useState(0.03);
  const [finish, setFinish] = useState(false);

  useEffect(() => {
    const animate = async () => {
      while (!finish) {
        await controls.start({
          y: [-100, 100],
          opacity: [0, 1],
          transition: {
            duration: dur,
            ease: "easeOut",
          },
        });
        
        
        setDur(prev => Math.min(prev * 1.2, 2));
        
       
        if (dur > 0.6) {
          setFinish(true);
        }
      }

      if (finish) {
        await controls.start({
          y: [-100, 0],
          opacity: [0, 1],
          transition: {
            duration: dur,
            ease: "easeOut",
          },
        });
      }
    };

    animate();
  }, [controls, dur, finish]);

  return (
    <div>
      <motion.div animate={controls} initial={{ y: -100, opacity: 0 }}>
        {children}
      </motion.div>
    </div>
  );
}