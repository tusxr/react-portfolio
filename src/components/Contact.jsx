import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from "react-icons/fa";

const Contact = () => {
  return (
    <div id="contact" className="w-full bg-gray-800 text-white py-12 px-4 flex flex-col items-center">
      <h2 className="text-3xl font-bold mb-8 text-center">Contact Me</h2>
      <p className="mb-6 text-lg text-center">
        Feel free to reach out to me through any of the platforms below or send
        me an email.
      </p>
      <div className="flex flex-col items-center gap-4 mb-8">
        <a
          href="mailto:aqueel192@gmail.com"
          className="text-xl flex items-center gap-2"
        >
          <FaEnvelope />
          <span>Email Me</span>
        </a>
        <div className="flex gap-6">
          <a
            href="https://www.github.com/sxxaq"
            className="text-3xl hover:text-gray-400"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/saalim-aqueel"
            className="text-3xl hover:text-gray-400"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://www.twitter.com/__saalim"
            className="text-3xl hover:text-gray-400"
          >
            <FaTwitter />
          </a>
        </div>
      </div>
      <p className="text-sm text-gray-400">
        © {new Date().getFullYear()} Saalim Aqueel. All rights reserved.
      </p>
    </div>
  );
};

export default Contact;
