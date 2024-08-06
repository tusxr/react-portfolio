import project1 from '../assets/projects/project-1.jpg'
import project2 from '../assets/projects/project-2.jpg'
import project3 from '../assets/projects/project-3.jpg'
import { AiOutlineGithub } from "react-icons/ai";
import { FaLink } from "react-icons/fa";

const Portfolio = () => {
  const projects = [
    {
      img: project1, // Add your actual image path here
      title: "NoshNow",
      description: `NoshNow is a full-stack web application designed for seamless online food ordering. Utilizing the MERN stack (MongoDB, Express.js, React.js, Node.js), it incorporates secure payment processing through Stripe, and includes JWT for authentication and Multer for file handling.
      ● The admin panel features components for adding food items, listing and removing items, and managing orders with delivery status updates. This project demonstrates proficiency in developing user-friendly interfaces and robust backend systems.`,
      techStack: "MERN Stack (MongoDB, Express.js, React.js, Node.js), Stripe, JWT, Multer",
      links: {
        site: "#", // Replace with the actual live link
        github: "#", // Replace with the actual GitHub link
      },
    },
    {
      img: project2, // Add your actual image path here
      title: "HooBank LandingPage",
      description: `Developed a visually appealing and responsive landing page using React and Tailwind CSS.
      ● Utilized Tailwind CSS for modern and flexible design, ensuring a consistent and mobile-friendly user experience.`,
      techStack: "React JS, Tailwind CSS",
      links: {
        site: "#", // Replace with the actual live link
        github: "#", // Replace with the actual GitHub link
      },
    },
    {
      img: project3, // Add your actual image path here
      title: "TodoWebApp",
      description: `TodoWebApp is a simple to-do list web application built using Node.js, Express.js, and MongoDB. It allows users to create, read, update, and delete tasks in a user-friendly interface.
      ● This project serves as a basic example of a web application with CRUD (Create, Read, Update, Delete) functionality.`,
      techStack: "NodeJS, Express, Mongoose, Ejs",
      links: {
        site: "#", // Replace with the actual live link
        github: "#", // Replace with the actual GitHub link
      },
    },
  ];

  return (
    <div className="max-w-[1000px] mx-auto p-6 md:my-20" id="portfolio">
      <h2 className="text-3xl font-bold text-gray-200 mb-8 text-center w-full">
        Portfolio
      </h2>
      {projects.map((project, index) => (
        <div
          key={index}
          className={`flex flex-col md:flex-row ${
            index % 2 !== 0 ? "md:flex-row-reverse" : ""
          } mb-12`}
        >
          <div className="w-full md:w-1/2 p-4">
            <img
              src={project.img}
              alt={project.title}
              className="w-full h-full object-cover rounded-lg shadow-lg"
            />
          </div>
          <div className="w-full md:w-1/2 p-4 flex flex-col justify-center">
            <h3 className="text-2xl font-semibold text-gray-200 mb-4">
              {project.title}
            </h3>
            <p className="text-gray-300 mb-4">{project.description}</p>
            <p className="text-gray-400 mb-4">{project.techStack}</p>
            <div className="flex space-x-4">
              {project.links.site && (
                <a
                  href={project.links.site}
                  className="px-4 py-2 bg-slate-600 text-gray-200 rounded-lg hover:bg-slate-700
                                      transition duration-300 flex items-center"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaLink className="mr-2" />
                  Live
                </a>
              )}
              {project.links.github && (
                <a
                  href={project.links.github}
                  className="px-4 py-2 bg-slate-600 text-gray-200 rounded-lg hover:bg-slate-700
                                      transition duration-300 flex items-center"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <AiOutlineGithub className="mr-2" />
                  GitHub
                </a>
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Portfolio;
