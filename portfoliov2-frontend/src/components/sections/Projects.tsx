import { forwardRef } from "react";
import { motion } from "framer-motion";

import { projects } from "../../data/projects";

const containerVariants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.15 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const Projects = forwardRef<HTMLElement>((_props, ref) => {
  return (
    <section ref={ref} className="content-section">
      <h2 className="section-heading">Projects</h2>
      <motion.div
        className="project-grid"
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
      >
        {projects.map((project) => (
          <motion.div className="project-card" key={project.title} variants={cardVariants}>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <div className="project-tags">
              {project.tags.map((tag) => (
                <span key={tag}>{tag}</span>
              ))}
            </div>
            <a href={project.link} target="_blank" rel="noreferrer">
              View project →
            </a>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
});

Projects.displayName = "Projects";

export default Projects;
