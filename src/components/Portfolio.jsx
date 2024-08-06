import project1 from "../assets/projects/noshnow.png";
import project2 from "../assets/projects/portfolio.png";
import project3 from "../assets/projects/landing.png";
import project4 from "../assets/projects/1200x640.webp";
import project5 from "../assets/projects/1200x640.webp";
import project6 from "../assets/projects/flappy.png";
import { AiOutlineGithub } from "react-icons/ai";
import { FaLink } from "react-icons/fa";

const Portfolio = () => {
  const projects = [
    {
      img: project1,
      title: "NoshNow",
      description: `NoshNow is a full-stack web application designed for seamless online food ordering. Utilizing the MERN stack (MongoDB, Express.js, React.js, Node.js), it incorporates secure payment processing through Stripe, and includes JWT for authentication and Multer for file handling.
      ● The admin panel features components for adding food items, listing and removing items, and managing orders with delivery status updates. This project demonstrates proficiency in developing user-friendly interfaces and robust backend systems.`,
      techStack:
        "MERN Stack (MongoDB, Express.js, React.js, Node.js), Stripe, JWT, Multer",
      links: {
        site: "https://noshnow-frontend.onrender.com/",
        github: "https://github.com/SxxAq/NoshNow",
      },
    },
    {
      img: project2,
      title: "My Portfolio",
      description: `A portfolio website created using Vite, React, Tailwind CSS, and Framer Motion.
        ● Showcases my projects and skills with a clean and modern design.
        ● Utilizes Tailwind CSS for styling and Framer Motion for animations to provide a smooth user experience.`,
      techStack: "Vite, React, Tailwind CSS, Framer Motion",
      links: {
        site: "https://portfolio-mu-pearl-85.vercel.app/",
        github: "https://github.com/SxxAq/react-portfolio",
      },
    },
    {
      img: project3,
      title: "LandingPage",
      description: `Developed a visually appealing and responsive landing page using React and Tailwind CSS.
          ● Utilized Tailwind CSS for modern and flexible design, ensuring a consistent and mobile-friendly user experience.`,
      techStack: "React JS, Tailwind CSS",
      links: {
        site: "https://react-landing-page-smoky.vercel.app/",
        github: "https://github.com/SxxAq/React-LandingPage",
      },
    },
    {
      img: project4,
      title: "TodoWebApp",
      description: `TodoWebApp is a simple to-do list web application built using Node.js, Express.js, and MongoDB. It allows users to create, read, update, and delete tasks in a user-friendly interface.
        ● This project serves as a basic example of a web application with CRUD (Create, Read, Update, Delete) functionality.`,
      techStack: "NodeJS, Express, Mongoose, Ejs",
      links: {
        site: "#",
        github: "https://github.com/SxxAq/TodoWebApp",
      },
    },
    {
      img: project5,
      title: "Task Patrol Bot",
      description: `Task Patrol Bot is a Discord bot designed to automate the verification process for activities or challenges that require participants to post their daily progress, such as "30 Days of Code." It helps keep track of participants' daily contributions and identifies users who are eligible for prizes based on their consistent activity.
          ● Automates daily progress verification for activities or challenges.
          ● Keeps track of participants' contributions and identifies eligible users for prizes.`,
      techStack: "Node.js, Discord.js",
      links: {
        site: "#",
        github: "https://github.com/SxxAq/Discord-bot-automation",
      },
    },
    {
      img: project6,
      title: "Flappy Bird Game",
      description: `A simple Flappy Bird-style game built using HTML5 Canvas and JavaScript.
            ● This project is a recreation of the classic Flappy Bird game. The player controls a bird, trying to fly between columns of green pipes without hitting them. The game features gravity, collision detection, and a score counter.`,
      techStack: "HTML, CSS, JavaScript",
      links: {
        site: "https://flappy-bird-woad.vercel.app/",
        github: "https://github.com/SxxAq/Flappy-bird",
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
              className="w-full h-64 object-cover rounded-lg shadow-lg"
              style={{ width: "400px", height: "300px" }}
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
                  className="px-4 py-2 bg-slate-600 text-gray-200 rounded-lg hover:bg-slate-700 transition duration-300 flex items-center"
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
                  className="px-4 py-2 bg-slate-600 text-gray-200 rounded-lg hover:bg-slate-700 transition duration-300 flex items-center"
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
