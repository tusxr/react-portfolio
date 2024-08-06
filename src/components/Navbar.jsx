import { useState } from "react";
import logo from "../assets/logo.png";
import { FaBars, FaTimes } from "react-icons/fa";
const Navbar = () => {
  const [bar, setBar] = useState(false);
  const barHandler = () => setBar(!bar);
  return (
    <nav className="h-[80px] fixed w-full flex items-center justify-between px-4 py-6 text-gray-300 bg-[#0a192f]">
      <div className="flex flex-shrink-0 items-center">
        <img src={logo} alt="Logo" style={{ width: "50px" }} />
      </div>

      <ul className=" hidden md:flex">
        <li>Home</li>
        <li>About</li>
        <li>Work</li>
        <li>Contact</li>
      </ul>

      {/* Mobile Screen  */}
      <div onClick={barHandler} className="md:hidden z-10">
        {!bar ? <FaBars /> : <FaTimes />}
      </div>

      <ul
        className={
          !bar
            ? "hidden"
            : "absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center"
        }
      >
        <li className="py-5 text-2xl">Home</li>
        <li className="py-5 text-2xl">About</li>
        <li className="py-5 text-2xl">Work</li>
        <li className="py-5 text-2xl">Contact</li>
      </ul>
    </nav>
  );
};

export default Navbar;
