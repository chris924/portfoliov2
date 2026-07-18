import { forwardRef } from "react";
import { motion } from "framer-motion";

const About = forwardRef<HTMLElement>((_props, ref) => {
  return (
    <section ref={ref} className="content-section">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.6 }}
        style={{ maxWidth: 640, textAlign: "center" }}
      >
        <h2 className="section-heading">Who I Am</h2>
        <p style={{ opacity: 0.85, lineHeight: 1.6 }}>
         I'm Krisztofer Burka, a software developer specializing in embedded systems,
         with full-stack experience as well. I like turning ideas into things I can
         build, and outside of it: baking, sports, and
         gardening keep me busy when I'm not at the keyboard.
         Take a look at some of my projects below.
        </p>
      </motion.div>
    </section>
  );
});

About.displayName = "About";

export default About;
