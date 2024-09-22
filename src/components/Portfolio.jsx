import React from 'react';
import { motion } from 'framer-motion';
import { AiOutlineGithub } from "react-icons/ai";
import { FaLink } from "react-icons/fa";

import project1 from "../assets/projects/noshnow.png";
import project2 from "../assets/projects/textify.png";
import project3 from "../assets/projects/portfolio.png";
import project4 from "../assets/projects/1200x640.webp";
import project5 from "../assets/projects/1200x640.webp";
import project6 from "../assets/projects/flappy.png";

const ProjectCard = ({ project }) => (
  <motion.div
    whileHover={{ y: -5 }}
    className="bg-gray-800 rounded-xl overflow-hidden shadow-lg transition-all duration-300 hover:shadow-2xl"
  >
    <img src={project.img} alt={project.title} className="w-full h-48 object-cover" />
    <div className="p-6">
      <h3 className="text-xl font-semibold text-teal-300 mb-2">{project.title}</h3>
      <p className="text-gray-400 text-sm mb-4">{project.techStack}</p>
      <ul className="text-gray-300 text-sm mb-4 list-disc list-inside">
        {project.description.map((item, index) => (
          <li key={index} className="mb-1">{item}</li>
        ))}
      </ul>
      <div className="flex space-x-4 mt-4">
        {project.links.site && (
          <a
            href={project.links.site}
            className="px-4 py-2 bg-teal-500 text-white font-bold text-sm rounded-lg hover:bg-teal-600 transition duration-300 flex items-center"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLink className="mr-2" />
            Live Demo
          </a>
        )}
        {project.links.github && (
          <a
            href={project.links.github}
            className="px-4 py-2 bg-gray-700 text-gray-300 font-bold text-sm rounded-lg hover:bg-gray-600 transition duration-300 flex items-center"
            target="_blank"
            rel="noopener noreferrer"
          >
            <AiOutlineGithub className="mr-2" />
            GitHub
          </a>
        )}
      </div>
    </div>
  </motion.div>
);

const Projects = () => {
  const projects = [
    {
      img: project1,
      title: "NoshNow",
      description: [
        "Full-stack web application for online food ordering",
        "Utilizes MERN stack with Stripe, JWT, and Multer",
        "Admin panel for managing menu and orders",
      ],
      techStack: "MERN, Stripe, JWT, Multer",
      links: {
        site: "https://noshnow-frontend.onrender.com/",
        github: "https://github.com/SxxAq/NoshNow",
      },
    },
    {
      img: project2,
      title: "Textify",
      description: [
        "Web app that quickly transcribes audio into text and translates it",
        "Focuses on accuracy and ease of use for professionals and students",
        "Simplifies converting interviews, lectures, and voice notes",
      ],
      techStack: "React, Tailwind CSS, JavaScript, Xenova/Whisper API, Web Workers",
      links: {
        site: "https://textify-phi.vercel.app/",
        github: "https://github.com/SxxAq/Textify",
      },
    },
    {
      img: project3,
      title: "Portfolio",
      description: [
        "Showcases my projects and skills with a clean, modern design",
        "Utilizes Tailwind CSS for responsive styling",
        "Incorporates Framer Motion for smooth animations",
      ],
      techStack: "Vite, React, Tailwind CSS, Framer Motion",
      links: {
        site: "https://portfolio-mu-pearl-85.vercel.app/",
        github: "https://github.com/SxxAq/react-portfolio",
      },
    },
    {
      img: project4,
      title: "Todo Web App",
      description: [
        "Simple to-do list web application",
        "Built with Node.js, Express.js, and MongoDB",
        "CRUD (Create, Read, Update, Delete) functionality",
      ],
      techStack: "Node.js, Express, Mongoose, Ejs",
      links: {
        github: "https://github.com/SxxAq/TodoWebApp",
      },
    },
    {
      img: project5,
      title: "Task Patrol Bot",
      description: [
        "Discord bot for automating daily progress verification",
        "Tracks participants' contributions for activities/challenges",
        "Identifies eligible users for prizes",
      ],
      techStack: "Node.js, Discord.js",
      links: {
        github: "https://github.com/SxxAq/Discord-bot-automation",
      },
    },
    {
      img: project6,
      title: "Flappy Bird Game",
      description: [
        "Classic Flappy Bird-style game",
        "Built using HTML5 Canvas and JavaScript",
        "Includes gravity, collision detection, and a score counter",
      ],
      techStack: "HTML, CSS, JavaScript",
      links: {
        site: "https://flappy-bird-woad.vercel.app/",
        github: "https://github.com/SxxAq/Flappy-bird",
      },
    },
  ];

  return (
    <section className="py-16 bg-gray-900" id="projects">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2 
          className="text-4xl font-bold text-center text-white mb-12"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          My Projects
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;