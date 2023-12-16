import { useState } from "react";
import { Link as ScrollLink } from "react-scroll";
import { Link as RouterLink } from "react-router-dom";
import { RxHamburgerMenu } from "react-icons/rx";
import { VscClose } from "react-icons/vsc";
import Logo from "../images/SA_Logo_2-removebg-preview.png";
// import { MdOutlineMailOutline } from "react-icons/md";
// import { IoCallOutline } from "react-icons/io5";

const Navbar = () => {
  // const phoneNumber = "+8318403058";

  const [open, setOpen] = useState(false);

  return (
    <div className="shadow-md w-full top-0 left-0 z-50">
      <div className="md:flex items-center justify-between bg-neutral-900 py-6 md:px-10 px-7">
        <div className="font-bold cursor-pointer">
          <div className="flex flex-row items-center">
            <img src={Logo} alt="" className="h-20" />
            <div className="text-white font-normal text-3xl pl-2">
              SA Plumbing Inc.
            </div>
          </div>
        </div>
        <div
          onClick={() => setOpen(!open)}
          className="flex flex-row text-3xl absolute right-8 top-6 cursor-pointer md:hidden"
        >
          {open ? (
            <VscClose className="text-white" />
          ) : (
            <RxHamburgerMenu className="text-white" />
          )}
        </div>
        <ul
          className={` bg-neutral-900 bg-opacity-95 md:flex md:items-center md:pb-0 pb-12 absolute md:static md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${
            open ? " top-16 " : "top-[-490px]"
          }`}
        >
          <li className="md:ml-8  md:my-0 my-7">
            <RouterLink
              to="/"
              className="block py-2 pl-3 pr-4 rounded text-white hover:bg-blue-500 hover:text-white  md:hover:bg-transparent md:hover:border-b-2 md:hover:border-blue-500 md:p-0 md:hover:rounded-none duration-100"
            >
              Home
            </RouterLink>
          </li>
          <li className="md:ml-8  md:my-0 my-7">
            <RouterLink
              to="/About-SAPlumbing"
              className="block py-2 pl-3 pr-4 rounded text-white hover:bg-blue-500 hover:text-white  md:hover:bg-transparent md:hover:border-b-2 md:hover:border-blue-500 md:p-0 md:hover:rounded-none duration-100"
            >
              About
            </RouterLink>
          </li>
          <li className="md:ml-8  md:my-0 my-7">
            <RouterLink
              to="/Services"
              className="block py-2 pl-3 pr-4 rounded text-white hover:bg-blue-500 hover:text-white  md:hover:bg-transparent md:hover:border-b-2 md:hover:border-blue-500 md:p-0 md:hover:rounded-none duration-100"
            >
              Services
            </RouterLink>
          </li>
          <li className="md:ml-8  md:my-0 my-7">
            <ScrollLink
              to="contact"
              spy={true}
              smooth={true}
              offset={50}
              duration={500}
              className="block py-2 pl-3 pr-4 rounded text-white hover:bg-blue-500 hover:text-white  md:hover:bg-transparent md:hover:border-b-2 md:hover:border-blue-500 md:p-0 md:hover:rounded-none duration-100"
            >
              Contact
            </ScrollLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
