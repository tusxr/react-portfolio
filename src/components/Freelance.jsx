import React from 'react';
import { motion } from 'framer-motion';
import { FaLink } from 'react-icons/fa';

// Freelance project images
import zlothingImg from "../assets/freelance/zlothingImg.png";
import wondervedImg from "../assets/freelance/wondervedImg.png";
import gdifrc from "../assets/freelance/gdifrcImg.png";
import londonCarpet from "../assets/freelance/londonCarpet.png"
const FreelanceCard = ({ project }) => (
  <motion.div
    whileHover={{ y: -5 }}
    className="bg-gray-800 rounded-xl overflow-hidden shadow-lg transition-all duration-300 hover:shadow-2xl"
  >
    <img src={project.img} alt={project.title} className="w-full h-48 object-cover" />
    <div className="p-6">
      <h3 className="text-xl font-semibold text-teal-300 mb-2">{project.title}</h3>
      <p className="text-gray-400 text-sm mb-4">{project.description}</p>
      <div className="flex space-x-4 mt-4">
        {project.link && (
          <a
            href={project.link}
            className="px-4 py-2 bg-teal-500 text-white font-bold text-sm rounded-lg hover:bg-teal-600 transition duration-300 flex items-center"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLink className="mr-2" />
            Live Demo
          </a>
        )}
      </div>
    </div>
  </motion.div>
);

const FreelanceWorks = () => {
  const freelanceProjects = [
    {
      img: zlothingImg,
      title: "Zlothing",
      description: "An e-commerce website for a Kolkata based Clothing Store.",
      link: "https://zlothingstore.in", // Replace with the actual live link
    },
    {
      img: wondervedImg,
      title: "Wonderved",
      description: "A website built for a brand based in Hyderabad which deals in Kids Furniture.",
      link: "https://wonderved.com", // Replace with the actual live link
    },
    {
      img: gdifrc,
      title: "Gdifrc",
      description: "A website built for Ghosh Dastidar IVF Center in Kolkata.",
      link: "https://gdifrc.in/home", // Replace with the actual live link
    },
    {
      img: londonCarpet,
      title: "London Carpet",
      description: "A website built for london based Interior Design Company.",
      link: "https://london-carpet.com", // Replace with the actual live link
    },
  ];

  return (
    <section className="py-16" id="freelance">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          className="text-4xl font-bold text-center text-white mb-12"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Freelance Works
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {freelanceProjects.map((project, index) => (
            <FreelanceCard key={index} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FreelanceWorks;
