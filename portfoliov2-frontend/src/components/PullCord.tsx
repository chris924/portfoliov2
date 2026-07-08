import { useRef } from 'react';
import { motion } from 'framer-motion';

interface PullCordProps {
  /** Fired once when the cord is pulled past the threshold (or tapped). */
  onPull?: () => void;
}

// How far you must pull before it counts as a "pull", and the max travel.
const THRESHOLD = 38;
const PULL_MAX = 30;

export default function PullCord({ onPull }: PullCordProps) {
  const pulled = useRef(false);

  return (
    <motion.div
      className="cord-wrapper"
      initial={{ y: -280 }}
      animate={{ y: 0 }}
      exit={{ y: -280 }}
      transition={{ type: 'spring', stiffness: 130, damping: 15, delay: 0.3 }}
    >
      <motion.div
        className="cord"
        role="button"
        tabIndex={0}
        aria-label="Pull cord"
        drag="y"
        dragConstraints={{ top: 0, bottom: PULL_MAX }}
        dragElastic={{top: 0.2, bottom: 0.1}}
        dragSnapToOrigin
        onDrag={(_e, info) => {
          // Fire once, mid-pull, when it passes the threshold.
          if (!pulled.current && info.offset.y > THRESHOLD) {
            pulled.current = true;
            onPull?.();
          }
        }}
        onDragEnd={() => {
          pulled.current = false;
        }}
        onTap={() => onPull?.()}
        onKeyDown={(e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            onPull?.();
          }
        }}
      >
        <div className="cord-line" />
        <div className="cord-bead" />
      </motion.div>
    </motion.div>
  );
}