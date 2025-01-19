
import { motion } from "framer-motion";

const experiences = [
  {
    company: "Alibhiya Softwares",
    designation : "Junior Frontend Developer",
    period: "Jan 2023 - Mar 2023",
    description:
      "I developed dynamic and responsive websites using React.js and JavaScript, ensuring high-quality user interfaces and seamless performance. Additionally, I created and managed websites on WordPress, focusing on customization and client requirements.",
  },
  {
    company: "Dope Studios",
    designation : "Freelance Web Developer",
    period: "Oct 2022 - Ongoing",
    description:
      "I work as a freelance web developer, delivering tailored web solutions to clients. My responsibilities include designing, developing, and deploying websites with a focus on modern, user-friendly designs and robust functionality.",
  },
];

const Experience = () => {
  return (
    <div id="work" className="p-8 max-w-[1200px] mx-auto">
      <h1 className="text-4xl text-gray-200 font-bold text-center mb-12">
        Work Experience
      </h1>
      <motion.div
        className="flex flex-wrap justify-center gap-8"
        initial="hidden"
        animate="visible"
      >
        {experiences.map((experience, index) => (
          <motion.div
            key={index}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 1 }}
            className="w-full md:w-[500px] border-2 border-teal-300 p-6 rounded-lg shadow-md
                      hover:shadow-xl transition-shadow duration-300 bg-purple-800/10"
          >
            <h2 className="text-gray-100 text-2xl font-semibold">
              {experience.company}
            </h2>
            <p className="text-gray-300">{experience.designation}</p>
            <p className="text-gray-300">{experience.period}</p>
            <p className="text-gray-400 mt-4">{experience.description}</p>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Experience;
