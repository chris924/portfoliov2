import DefaultLayout from "@/layouts/default";
import { motion } from "framer-motion";
import { title, subtitle } from "./primitives";
import AboutText from "./aboutText";
import ServicesText from "./servicesText";
import RecentProjectText from "./recentprojectText";
import CoinSlot from "./animations/coinsloteffect";
import "../styles/globals.css";
import "../styles/leverviewer.css"
import ContactText from "./contactText";

export default function MainText() {
    return (
        <>
            <DefaultLayout>
                <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
                    <div className="inline-block max-w-full text-center justify-center">
                        {[...Array(3)].map((_, index) => (
                            <div key={index} className="tracking-tight m-3 overflow-hidden">
                                {index === 1 ? (
                                  <div className="">
                                  <CoinSlot>
                                     <motion.div
                                     initial={{ opacity: 0, y: 50, scale: 0.9 }}
                                     animate={{ opacity: 1, y: 0, scale: 1 }}
                                     transition={{ duration: 0.8, ease: [0.6, -0.05, 0.01, 0.99] }}
                                     className="overflow-hidden"
                                 >
                                     <motion.span
                                         initial={{ opacity: 0, x: -20 }}
                                         animate={{ opacity: 1, x: 0 }}
                                         transition={{ delay: 0.1, duration: 0.6, ease: "easeOut" }}
                                         className={title({ class: "tracking-widest font-unisansheavy", size: "xl" })}
                                     >
                                         HEY,&nbsp;
                                     </motion.span>

                                     <motion.span
                                         initial={{ opacity: 0, x: 20 }}
                                         animate={{ opacity: 1, x: 0 }}
                                         transition={{ delay: 0.2, duration: 0.6, ease: "easeOut" }}
                                         className={title({ color: "green", size: "xl", class: "tracking-widest font-unisansheavy text-4xl" })}
                                     >
                                         I'M CHRIS
                                     </motion.span>
                                     <br />
                                 </motion.div>
                                 </CoinSlot>
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
                                            transition={{ delay: 0.1, duration: 0.6, ease: "easeOut" }}
                                            className={title({ class: "tracking-widest font-unisansheavy", size: "xl" })}
                                        >
                                            HEY,&nbsp;
                                        </motion.span>

                                        <motion.span
                                            initial={{ opacity: 0, x: 20 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            transition={{ delay: 0.2, duration: 0.6, ease: "easeOut" }}
                                            className={title({ color: "green", size: "xl", class: "tracking-widest font-unisansheavy text-4xl " })}
                                        >
                                            I'M CHRIS
                                        </motion.span>
                                        <br />
                                    </motion.div>
                                )}
                            </div>
                        ))}
                        <motion.div
                            className={subtitle({ class: "mt-8", size: "lg" })}
                            initial={{ opacity: 0, x: -50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.7, duration: 0.6, ease: "easeOut" }}
                        >
                            Welcome To My Portfolio Site
                        </motion.div>
                    </div>

                    <AboutText />
                    <ServicesText />
                    <RecentProjectText />
                    <ContactText />
                </section>
            </DefaultLayout>
        </>
    );
}