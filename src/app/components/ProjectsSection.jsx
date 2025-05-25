"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "Traveller portfolio",
    description: "A portfolio website with a parallax effect",
    TechStack: "HTML, CSS, JavaScript",
    image: "/images/projects/parallex.png",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 2,
    title: "E-commerce Application ",
    description: "Simple CRUD application with a music player",
    TechStack: "HTML, CSS, JavaScript",
    image: "/images/projects/music.png",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 3,
    title: "Task Update Application",
    description: "Implemented Redux for state management to update tasks, add new tasks, and delete tasks and bootstrap for UI.",
    TechStack: "HTML, CSS, JavaScript, React, Redux, bootstrap",
    image: "/images/projects/redux.png",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 4,
    title: "Food Ordering Application",
    description: "A food ordering application with a responsive design and a simple UI.",
    TechStack: "HTML, CSS, JavaScript, React, Tailwind CSS, JSON ",
    image: "/images/projects/FoodOrder.png",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 5,
    title: "Chat Application",
    description: "A MERN stack real-time chat application using WebSocket (Socket.io), React, Redux, Node.js, MongoDB, and TailwindCSS.",
    TechStack: "MongoDB, Express, React, Node.js, Redux, TailwindCSS, Socket.io",
    image: "/images/projects/chatapp.png",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/",
  }
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

  // const hoverClass = isSelected ? "" : "hover:bg-gray-200 hover:text-gray-800";

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
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              TechStack={project.TechStack}
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
