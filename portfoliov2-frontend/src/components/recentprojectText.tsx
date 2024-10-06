import { motion } from "framer-motion";
import RevealOnScroll from "./animations/revealonscroll";
import { useState } from "react";
import TypewriterEffect from "./animations/typewriter";
import { title } from "./primitives";



export default function RecentProjectText(){
    const [revealCompleted, setRevealCompleted] = useState(false);


    return (
        <>
          <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10 mt-30 w-full">
          <RevealOnScroll >
            <div className="inline-block max-w-7xl w-full mt-20">
              
                <span className="tracking-widest font-unisansheavy text-5xl block mb-8 flex flex-col items-center justify-center font-unisansheavy">
                  My Recent Projects
                </span>
              
    
              </div>

            <div className="mb-5">
                <img
                src="/images/bookitnow.png"
                alt="Bookitnow project"
                className="object-scale-down w-150 h-150"            
                >
                </img>
            </div>

            <div className="flex flex-row items-center justify-center">
                <span className={title({ color: "violet", class: "tracking-widest font-unisansheavy text-4xl" })}>BookItNow</span>
            </div>
            </RevealOnScroll>
            <div className="flex flex-col items-center justify-center">
            <TypewriterEffect onRevealComplete={() => setRevealCompleted(true)} text="BookItNow is a modern appointment booking system designed to streamline the process of scheduling appointments for various services. Built with React for a dynamic and responsive frontend, and powered by Java Spring on the backend.">
          </TypewriterEffect>          
         </div>
         {revealCompleted &&
         <RevealOnScroll>
         <div className="justify-center items-center flex flex-row">
          <span className="tracking-widest font-unisansheavy text-4xl">Check it out here</span>
          <a href="https://bookitnowproject.vercel.app" target="_blank" rel="noopener noreferrer">
            <motion.img
              src="/images/floating-book.png"
              alt="Book"
              className="object-scale-down h-28 w-28 brightness-200"
              transition={{ duration: 2, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
              whileHover={{
                x: [-5, 5, -5, 5, 0],
                transition: { duration: 0.3 }
              }}
            />
          </a> 
          </div>
          </RevealOnScroll>
          }
          
          </section>
        </>
    );
}