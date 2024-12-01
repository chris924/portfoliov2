import DefaultLayout from "@/layouts/default";
import { motion } from "framer-motion";
import { title, subtitle } from "./primitives";
import AboutText from "./aboutText";
import ServicesText from "./servicesText";
import RecentProjectText from "./recentprojectText";
import "../styles/globals.css";
import "../styles/leverviewer.css"
import ContactText from "./contactText";
import { useState } from "react";


export default function MainText() {

    const [animationFinished, setAnimationFinished] = useState(false);

    return (
        <>
            <DefaultLayout>
                <section className="flex flex-col items-center justify-center gap-2">
                    <div className="inline-block max-w-full text-center justify-center">
                        {[...Array(3)].map((_, index) => (
                            <div key={index} className="tracking-tight m-3 overflow-hidden">
                                {index === 1 ? (                          
                                  <div className="">
                                 
                                     <motion.div
                                     initial={{ opacity: 0, y: 50, scale: 0.9 }}
                                     animate={{ opacity: 1, y: 0, scale: 1 }}
                                     transition={{ duration: 0.8, ease: [0.6, -0.05, 0.01, 0.99] }}
                                     className="overflow-hidden"
                                 >
                                     <motion.span
                                         initial={{ opacity: 0, x: -20 }}
                                         animate={{ opacity: 1, x: 0 }}
                                         transition={{ delay: 0.5, duration: 0.6, ease: "easeOut" }}
                                         className={title({ class: "tracking-widest font-unisansheavy whitespace-nowrap", size: "xl" })}
                                     >
                                         HEY,&nbsp;
                                     </motion.span>

                                     <motion.span
                                         initial={{ opacity: 0, x: 20 }}
                                         animate={{ opacity: 1, x: 0 }}
                                         transition={{ delay: 0.5, duration: 0.6, ease: "easeOut" }}
                                         className={title({ color: "green", size: "xl", class: "tracking-widest font-unisansheavy whitespace-nowrap" })}
                                     >
                                         I'M CHRIS
                                     </motion.span>
                                     <br />
                                 </motion.div>
                                
                                 </div>
                                ) : (
                                    <motion.div
                                        initial={{ opacity: 0, y: 50, scale: 0.9 }}
                                        animate={{ opacity: 1, y: 0, scale: 1 }}
                                        transition={{ duration: 0.8, ease: [0.6, -0.05, 0.01, 0.99] }}
                                    >
                                        <motion.span
                                            initial={{ opacity: 0, x: -20 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            transition={{ delay: 0.5, duration: 0.6, ease: "easeOut" }}
                                            className={title({ class: "tracking-widest font-unisansheavy whitespace-nowrap", size: "xl" })}
                                        >
                                            HEY,&nbsp;
                                        </motion.span>

                                        <motion.span
                                            initial={{ opacity: 0, x: 20 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            transition={{ delay: 0.5, duration: 0.6, ease: "easeOut" }}
                                            className={title({ color: "green", size: "xl", class: "tracking-widest font-unisansheavy whitespace-nowrap" })}
                                        >
                                            I'M CHRIS
                                        </motion.span>
                                        <br />
                                    </motion.div>
                                )}
                            </div>
                        ))}
                        <motion.div
                            className={subtitle({ class: "mt-10 tracking-wide font-unisansheavy", size: "xl", color: "foreground" })}
                            initial={{ opacity: 0, x: -50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 1, duration: 0.6, ease: "easeInOut" }}
                        >
                            Explore
                        </motion.div>
                      

                        <motion.div
                            className={subtitle({ class: "mt-10 font-unisansheavy text-3xl lg:text-5xl", color: "foreground", size:"xl" })}
                            initial={{ opacity: 0, x: 50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 2, duration: 0.6, ease: "easeInOut" }}
                        >
                         My Work and Passion
                        </motion.div>
                       
                    </div>

                    <AboutText />
                    <ServicesText />
                    <RecentProjectText setAnimationFinished={setAnimationFinished}/>
                    <ContactText animationFinished={animationFinished}/>
                </section>
            </DefaultLayout>
        </>
    );
}