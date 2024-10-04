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
            <div className="inline-block max-w-7xl w-full mt-20">
              <RevealOnScroll >
                <span className="tracking-widest font-unisansheavy text-5xl block mb-8 flex flex-col items-center justify-center">
                  My Recent Projects
                </span>
              </RevealOnScroll>
    
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

            <div className="flex flex-col items-center justify-center">
            <TypewriterEffect onRevealComplete={() => setRevealCompleted(true)} text="BookItNow is a modern appointment booking system designed to streamline the process of scheduling appointments for various services. Built with React for a dynamic and responsive frontend, and powered by Java Spring on the backend.">
          </TypewriterEffect>          
         </div>


          </section>
        </>
    );
}