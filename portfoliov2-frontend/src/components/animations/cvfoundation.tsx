import { motion } from "framer-motion";

export default function CvFoundation() {
  return (
    <div className="flex justify-center items-center h-screen">
      <motion.div
        className="bg-white w-full h-full flex justify-center items-center p-10 rounded-none shadow-lg"
        initial={{ opacity: 0 }} 
        animate={{ opacity: 1 }} 
        transition={{ duration: 1.5, delay: 1.5 }} 
      >
        <span>fdfd</span>
      </motion.div>
    </div>
  );
}