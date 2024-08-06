import { useState } from "react";
import logo from "../assets/logo_1.png";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [bar, setBar] = useState(false);
  const barHandler = () => setBar(!bar);
  return (
    <nav className="h-[80px] w-full flex items-center justify-between px-8 md:px-10 py-6 text-gray-300 bg-[#0a192f]">
      <div className="flex flex-shrink-0 items-center md:ml-20">
        <a href="/">
          <img src={logo} alt="Logo" style={{ width: "40px" }} />
        </a>
      </div>

      <ul className=" hidden md:flex md:mr-10">
        <a href="/">
          <li>Home</li>
        </a>
        <a href="#skills">
          <li>Skills</li>
        </a>
        <a href="#portfolio">
          <li>Portfolio</li>
        </a>
        <a href="#work">
          <li>Work</li>
        </a>
        <a href="#contact">
          <li>Contact</li>
        </a>
      </ul>

      {/* Mobile Screen  */}
      <div onClick={barHandler} className="md:hidden z-40">
        {!bar ? <FaBars /> : <FaTimes />}
      </div>
      <ul
        className={
          !bar
            ? "hidden"
            : "z-30 absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center"
        }
      >
        <a onClick={() => setBar(!bar)} href="/">
          <li className="py-5 text-2xl">Home</li>
        </a>
        <a onClick={() => setBar(!bar)} href="#skills">
          <li className="py-5 text-2xl">Skills</li>
        </a>
        <a onClick={() => setBar(!bar)} href="#portfolio">
          <li className="py-5 text-2xl">Portfolio</li>
        </a>
        <a onClick={() => setBar(!bar)} href="#work">
          <li className="py-5 text-2xl">Work</li>
        </a>
        <a onClick={() => setBar(!bar)} href="#contact">
          <li className="py-5 text-2xl">Contact</li>
        </a>
      </ul>
    </nav>
  );
};

export default Navbar;
