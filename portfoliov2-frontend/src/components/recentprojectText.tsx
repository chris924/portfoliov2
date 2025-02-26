import { motion } from "framer-motion";
import RevealOnScroll from "./animations/revealonscroll";
import { useEffect, useState } from "react";
import TypewriterEffect from "./animations/typewriter";
import { title } from "./primitives";

interface RecentProjectTextProps {
  setAnimationFinished: (isFinished: boolean) => void; 
}

export default function RecentProjectText({ setAnimationFinished }: RecentProjectTextProps) {
  const [revealCompleted, setRevealCompleted] = useState(false);

  useEffect(() => {
    const bookimg = new Image();
    bookimg.src = "/images/floating-book.png";
  }, []);

  return (
    <>
      <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-5 w-full mb-10 h-50">
        <div className="inline-block max-w-7xl w-full mt-20">
          <RevealOnScroll revealThreshold={0.3}>
            <span className="font-unisansheavy font-medium text-5xl lg:text-6xl text-center block mb-8 flex flex-col items-center justify-center font-unisansheavy">
             Recent Projects
            </span>
          </RevealOnScroll>
        </div>

        <RevealOnScroll revealThreshold={0.6}>

          <div className="flex flex-row items-center justify-center mb-5">
            <span className={title({ color: "violet", class: "tracking-widest font-unisansheavy text-4xl" })}>
              BookItNow
            </span>
          </div>

          <div className="mb-5">
            <img
              src="/images/bookitnow.png"
              alt="Bookitnow project"
              className="object-scale-down w-150 h-150"
            />
          </div>

         
        </RevealOnScroll>

        <div className="flex flex-col text-start lg:h-60 h-30 text-3xl font-mono">
          <TypewriterEffect 
            onRevealComplete={() => { 
              setRevealCompleted(true); 
              setAnimationFinished(true); 
            }} 
            text="BookItNow is designed to streamline the process of scheduling appointments for various services."
          />
          {revealCompleted && (
             <RevealOnScroll>
             <div className="self-start text-start mt-8">
              Built with React, and powered by Java Spring.
            </div>
            </RevealOnScroll>
          )}
         
        </div>

        {revealCompleted && (
          <>
          <RevealOnScroll>
            <div className="justify-center items-center flex flex-row mt-5">
              <span className="tracking-widest font-unisansheavy text-4xl">Check it out here</span>
              <a href="https://bookitnowproject.vercel.app" target="_blank" rel="noopener noreferrer">
                <motion.img
                  src="/images/floating-book.png"
                  alt="Book"
                  className="object-scale-down h-28 w-28 brightness-200"
                  animate={{
                    x: [-5, 5, -5, 5, 0],
                    transition: {
                      duration: 1,
                      repeat: Infinity,
                      repeatType: "reverse",
                      ease: "easeInOut",
                      repeatDelay: 1.5
                    },
                  }}
                />
              </a>
              <br></br>
              
            </div>
            <span className="tracking-wide font-unisansheavy text-2xl text-red-600">(not running yet)</span>
          </RevealOnScroll>

            <RevealOnScroll>
          <div className="flex flex-row items-center justify-center mt-20 mb-5">
            <span className={title({ color: "blue", class: "tracking-widest font-unisansheavy text-4xl" })}>
              CSV Filter
            </span>        
          </div>
          </RevealOnScroll>
          <RevealOnScroll>
          <div className="mb-5">
            <img
              src="/images/csv-filter-icon.png"
              alt="CSV Filter"
              className="object-scale-down w-150 h-150"
            />
          </div>
          </RevealOnScroll>
          
          <RevealOnScroll>
          <div className="flex flex-col text-start lg:h-60 h-30 text-3xl font-mono">
          Parsing multiple CSV files with various conditions (e.g., contains, does not contain, greater than, less than, etc.).
            <div className="self-start text-start mt-8">
            Built with React, and powered by Python Flask.
            </div>
           </div>
          </RevealOnScroll>

          <RevealOnScroll>
            <div className="justify-center items-center flex flex-row mt-5">
              <span className="tracking-widest font-unisansheavy text-4xl">Check it out here</span>
              <a href="" target="_blank" rel="noopener noreferrer">
                <motion.img
                  src="/images/filtering-icon.png"
                  alt="Book"
                  className="object-scale-down h-28 w-28 brightness-200"
                  animate={{
                    x: [-5, 5, -5, 5, 0],
                    transition: {
                      duration: 1,
                      repeat: Infinity,
                      repeatType: "reverse",
                      ease: "easeInOut",
                      repeatDelay: 1.5
                    },
                  }}
                />
              </a>
              <br></br>
              
            </div>
            <span className="tracking-wide font-unisansheavy text-2xl text-red-600">(not running yet)</span>
          </RevealOnScroll>
          </>
        )}
      </section>
    </>
  );
}
