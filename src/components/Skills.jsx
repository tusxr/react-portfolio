import React from 'react';
import { motion } from 'framer-motion';
import {
  DiHtml5, DiCss3, DiJavascript1, DiReact, DiNodejsSmall, DiMongodb, DiGithubBadge
} from "react-icons/di";
import { FaDatabase, FaCode, FaGit, FaCloud } from "react-icons/fa";
import { SiExpress, SiNextdotjs, SiTailwindcss, SiFirebase } from "react-icons/si";

const SkillCard = ({ icon, name }) => (
  <motion.div
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
    className="flex flex-col items-center p-4 bg-gray-800 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
  >
    <div className="text-4xl mb-2">{icon}</div>
    <span className="text-sm font-medium text-gray-300">{name}</span>
  </motion.div>
);

const SkillCategory = ({ category, technologies }) => (
  <div className="mb-8">
    <h3 className="text-2xl font-bold mb-4 text-teal-300">{category}</h3>
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
      {technologies.map((tech, index) => (
        <SkillCard key={index} icon={tech.icon} name={tech.name} />
      ))}
    </div>
  </div>
);

const Skills = () => {
  const skills = [
    {
      category: "Languages",
      technologies: [
        { name: "C/C++", icon: <FaCode className="text-blue-500" /> },
        { name: "JavaScript", icon: <DiJavascript1 className="text-yellow-500" /> },
        { name: "HTML", icon: <DiHtml5 className="text-orange-600" /> },
        { name: "CSS", icon: <DiCss3 className="text-blue-600" /> },
        { name: "SQL", icon: <FaDatabase className="text-green-500" /> },
      ],
    },
    {
      category: "Frameworks",
      technologies: [
        { name: "React", icon: <DiReact className="text-blue-500" /> },
        { name: "Node.js", icon: <DiNodejsSmall className="text-green-500" /> },
        { name: "Express", icon: <SiExpress className="text-white" /> },
        { name: "Next.js", icon: <SiNextdotjs className="text-white" /> },
        { name: "Mongoose", icon: <FaDatabase className="text-green-600" /> },
        { name: "Tailwind CSS", icon: <SiTailwindcss className="text-sky-400" /> },
      ],
    },
    {
      category: "Dev Tools",
      technologies: [
        { name: "Git", icon: <FaGit className="text-orange-500" /> },
        { name: "GitHub", icon: <DiGithubBadge className="text-gray-400" /> },
        { name: "VS Code", icon: <FaCode className="text-blue-300" /> },
        { name: "Firebase", icon: <SiFirebase className="text-yellow-500" /> },
        { name: "Vercel", icon: <FaCloud className="text-blue-500" /> },
        { name: "MongoDB", icon: <DiMongodb className="text-green-500" /> },
      ],
    },
  ];

  return (
    <section className="py-16 bg-gray-900" id="skills">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2 
          className="text-4xl font-bold text-center text-white mb-12"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          My Skills
        </motion.h2>
        {skills.map((skill, index) => (
          <SkillCategory key={index} category={skill.category} technologies={skill.technologies} />
        ))}
      </div>
    </section>
  );
};

export default Skills;