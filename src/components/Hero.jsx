import React from "react";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import profile from "../assets/profile.jpeg";

const Hero = () => {
  return (
    <div className="mt-24 max-w-[1200px] mx-auto relative px-4 md:px-0">
      <div className="grid md:grid-cols-2 place-items-center gap-6">
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="text-left"
        >
          <TypeAnimation
            sequence={[
              "FullStack Developer",
              1000,
              "Open Source Contributor",
              1000,
              "AI Enthusiast",
              1000,
              "",
              1000,
            ]}
            speed={50}
            repeat={Infinity}
            className="font-bold text-gray-600 text-xl md:text-5xl italic mb-4 whitespace-nowrap"
          />
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.5 }}
            className="font-bold text-gray-300 text-5xl md:text-7xl tracking-tight mb-4"
          >
            HEY, I AM <br />
            <span>SAALIM AQUEEL</span>
          </motion.p>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 1 }}
            className="text-gray-500 max-w-[300px] md:max-w-[500px] text-lg md:text-2xl mb-6 text-left md:text-left"
          >
            I am a passionate developer dedicated to building high-quality,
            scalable web applications.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 1.5 }}
            className="flex items-center gap-4 my-4 md:mb-0"
          >
            <motion.button
              whileHover={{
                scale: 1.05,
                boxShadow: "0px 0px 8px rgba(0,0,0,0.3)",
              }}
              className="z-10 cursor-pointer font-bold text-gray-200 md:w-auto p-4 border rounded-xl border-blue-400"
            >
              Download CV
            </motion.button>
            <div className="flex gap-4 flex-row text-4xl md:text-6xl text-blue-400 z-20">
              <motion.a
                whileHover={{ scale: 1.05 }}
                href="https://www.github.com/sxxaq"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.05 }}
                href="https://www.linkedin.com/in/saalim-aqueel/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedin />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.05 }}
                href="https://www.twitter.com/__saalim"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaTwitter />
              </motion.a>
            </div>
          </motion.div>
        </motion.div>
        <motion.img
          src={profile}
          className="h-[30vh] w-[30vh] rounded-full my-8 md:ml-12"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        />
      </div>
    </div>
  );
};

export default Hero;
