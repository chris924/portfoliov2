import "../../styles/globals.css"

import { motion } from 'framer-motion';

const FallingBackground = () => {
  return (
    <motion.div
      className="falling-background"
      initial={{ y: '-100%' }}  
      animate={{ y: '0%' }}     
      exit={{ y: '100%' }}       
      transition={{ duration: 0.9, ease: [0.6, -0.05, 0.01, 0.99] }} 
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        height: '100vh',
        backgroundColor: "black",
        zIndex: 0, 
      }}
    />
  );
};

export default FallingBackground;