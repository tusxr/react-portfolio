import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from "react-icons/fa";

const Contact = () => {
  return (
    <div
      id="contact"
      className=" bg-slate-700 text-white py-12 px-6 md:px-12 flex flex-col items-center rounded-t-lg shadow-lg"
    >
      <h2 className="text-3xl font-bold mb-6 text-center">Contact Me</h2>
      <p className="mb-8 text-lg text-center">
        Feel free to reach out to me through any of the platforms below or send
        me an email.
      </p>
      <div className="flex flex-col md:flex-row items-center gap-6 mb-10">
        <a
          href="mailto:tusarmanna2003@gmail.com"
          className="px-6 py-3 bg-slate-500 hover:bg-slate-600 rounded-lg flex items-center gap-3 transition duration-300"
        >
          <FaEnvelope className="text-2xl" />
          <span className="text-lg">Email Me</span>
        </a>
        <div className="flex gap-6">
          <a
            href="https://github.com/tusxr"
            className="text-3xl hover:text-gray-400 transition duration-300"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/tusar-manna-4a44a3239/"
            className="text-3xl hover:text-gray-400 transition duration-300"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://x.com/tusar178"
            className="text-3xl hover:text-gray-400 transition duration-300"
          >
            <FaTwitter />
          </a>
        </div>
      </div>
      <p className="text-sm text-gray-400">
        © {new Date().getFullYear()} Tusar Manna. All rights reserved.
      </p>
    </div>
  );
};

export default Contact;