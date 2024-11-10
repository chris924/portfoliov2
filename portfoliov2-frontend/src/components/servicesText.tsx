import RevealOnScroll from "./animations/revealonscroll";
import { motion } from "framer-motion";
import { useState } from "react";

export default function ServicesText() {
  const [revealCompleted, setRevealCompleted] = useState(false);

  return (
    <>
      <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10 mt-30 w-full">
        <div className="inline-block max-w-7xl w-full mt-20">
          <RevealOnScroll >
            <span className="font-medium font-unisansheavy text-6xl block mb-8 flex flex-col items-center justify-center">
              My Services
            </span>
          </RevealOnScroll>

          <div className="flex flex-col md:flex-row items-start justify-between gap-10 mt-20 w-full">
            {/* Left side - toolbox part */}
            <div className="md:w-1/2 flex">
              <div className="flex flex-col gap-6">
                <RevealOnScroll>
                <span className="text-5xl">My digital tool box.</span>
                </RevealOnScroll>
                <RevealOnScroll>
                <span className="text-2xl">
                  These are my go-to tech stack to make my projects happen. I am always eager to learn more about my current tech stack and new technologies that could expand my horizons.
                </span>
                </RevealOnScroll>
               
              </div>
            </div>

            {/* Right side - Text */}
            <div className="md:w-1/2 flex justify-end text-justify">     
                <div className="flex flex-col text-base space-y-2 text-6xl">
                <RevealOnScroll onRevealComplete={() => setRevealCompleted(true)} revealThreshold={0.7}>
                  <div className="flex flex-row items-center text-base text-6xl">
                  
                  <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={revealCompleted ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.5 }}
                  >
                    <img
                      src="/images/react-icon.png"
                      alt="React Icon"
                      className="object-scale-down h-28 w-28"
                    />             
                  </motion.div>
                  <span className="ml-4 text-5xl">React</span>
                  </div>

                  <div className="flex flex-row items-center text-base text-6xl">
                  
                  <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={revealCompleted ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.5 }}
                  >
                    <img
                      src="/images/spring-boot-icon.png"
                      alt="Spring Boot Icon"
                      className="object-scale-down h-28 w-28"
                    />             
                  </motion.div>
                  <span className="ml-4 text-5xl">Spring Boot</span>
                  </div>

                  <div className="flex flex-row items-center text-base text-6xl">
                  
                  <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={revealCompleted ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.5 }}
                  >
                    <img
                      src="/images/asp-net-icon.png"
                      alt="ASP.Net Icon"
                      className="object-scale-down h-28 w-28"
                    />             
                  </motion.div>
                  <span className="ml-4 text-5xl">ASP. Net</span>
                  </div>
                </RevealOnScroll>
                <RevealOnScroll revealThreshold={0.9}>
                <div className="flex flex-col md:flex-row items-center text-base">      
                  <span className="text-4xl  mr-3">and many others...</span>
                  <a href="https://github.com/chris924" target="_blank" rel="noopener noreferrer">
                  <motion.img
                  src="/images/arrow.png"
                  alt="Arrow"
                  className="object-scale-down h-28 w-28 brightness-200"
                  initial= {{x: -15, rotate: 270}}
                  animate= {{x: 50}}
                  transition={{duration: 2, repeat: Infinity, repeatType: "reverse", ease: "easeInOut"}}
                  >
               
                  </motion.img>
                  </a>
               
                </div>
                </RevealOnScroll>
                </div>
              
            </div>
          </div>
        </div>
      </section>
    </>
  );
}