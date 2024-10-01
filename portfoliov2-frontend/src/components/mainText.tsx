import DefaultLayout from "@/layouts/default"
import { motion } from "framer-motion"
import { title, subtitle } from "./primitives"
import AboutText from "./aboutText"


export default function MainText() {
    return (
              <>
               <DefaultLayout>
          <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
            <div className="inline-block max-w-lg text-center justify-center">
    
                  {[...Array(3)].map((_, index) => (
                  <div key={index} className="tracking-tight m-3">
            <motion.div 
            initial={{ opacity: 0, y: 50, scale: 0.9 }} 
            animate={{ opacity: 1, y: 0, scale: 1 }} 
            transition={{ duration: 0.8, ease: [0.6, -0.05, 0.01, 0.99] }}
          >
            <motion.span 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1, duration: 0.6, ease: "easeOut" }}
              className={title({ class: "tracking-widest font-unisansheavy"})}
            >
              HEY,&nbsp;
            </motion.span>
            
            <motion.span 
              initial={{ opacity: 0, x: 20 }} 
              animate={{ opacity: 1, x: 0 }} 
              transition={{ delay: 0.2, duration: 0.6, ease: "easeOut" }}
              className={title({ color: "green", class: "tracking-widest font-unisansheavy" })}
            >
              I'M CHRIS
            </motion.span>
            
            <br />
          </motion.div>
              
            </div>
            ))}    
              <div className={subtitle({ class: "mt-4" })}>
                Beautiful, fast and modern React UI library.
              </div>
            </div>              
    

            <AboutText/>
          </section>
        </DefaultLayout>
              </>

    )

}
             
