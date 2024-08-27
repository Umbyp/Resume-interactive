"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import { motion, useInView } from 'framer-motion'

const projectsData = [
  {
    id: 1,
    title: "Gacha Random Project",
    description: "Developed a Vue.js Gacha game app with dynamic animations and real-time updates, offering users an engaging and interactive experience of random item.",
    image: "/images/projects/1.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/SleepyLe0/PROJECT1-SEC-1-VueView",
    previewUrl: "https://vueviewgacha.netlify.app/",
  },
  {
    id: 2,
    title: "Turn Base Project",
    description: "Created a turn-based game using Vue.js, featuring strategic gameplay where players take turns making moves. The app manages game state efficiently and smooth transitions between turns, providing an interactive and immersive experience.",
    image: "/images/projects/2.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/SleepyLe0/PROJECT2-SEC-1-VueView",
    previewUrl: "/",
  },
  {
    id: 3,
    title: "Kanban Borad Project",
    description: "Developed a Kanban Board project using Spring Boot for the backend and Vue.js for the frontend. The application allows users to manage tasks through a visual board, supporting features like task creation, updates, drag-and-drop functionality, and real-time status tracking.",
    image: "/images/projects/3.png",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "http://intproj23.sit.kmutt.ac.th/kp1/",
  },
];

const ProjectsSection = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects">
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        My Projects
      </h2>
      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.5 }}
          >
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;