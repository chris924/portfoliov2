import "../../styles/globals.css";
import { motion } from 'framer-motion';

const FallingBackground = () => {
  return (
    <motion.div 
  className="falling-background w-full h-screen" 
  initial={{ translateY: '-100%' }}
  animate={{ translateY: '0%' }}
  exit={{ translateY: '100%' }}      
  transition={{ duration: 0.6 }} 
  style={{
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    height: '100%',
    backgroundColor: 'black',
    zIndex: 0,
  }}
>
  <img 
    src="/images/darkbg-lowest-res.jpg" 
    alt="Background" 
    style={{
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      position: 'absolute',
      top: 0,
      left: 0
    }}
  />
</motion.div>
  );
};

export default FallingBackground;