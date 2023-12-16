import { Link } from "react-router-dom";
import Logo from "../images/SA_Logo_2-removebg-preview.png";
import BusinessInfo from "./BisinessInfo";

const Footer: React.FC = () => {
  return (
    <footer className=" bg-neutral-900">
      <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
        <div className="sm:flex sm:items-center sm:justify-between">
          <Link
            to="/"
            className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse"
          >
            <img src={Logo} className=" w-32" alt="SA Plumbing Logo" />
            <span className="self-center text-4xl whitespace-nowrap text-white">
              SA Plumbing
            </span>
          </Link>
          <ul className="flex flex-wrap items-center mb-6 text-sm font-medium sm:mb-0 text-white">
            <li>
              <Link
                to="/About-SAPlumbing"
                className="hover:underline me-4 md:me-6"
              >
                About
              </Link>
            </li>
            <li>
              <Link to="/Services" className="hover:underline me-4 md:me-6">
                Services
              </Link>
            </li>
          </ul>
        </div>
        <BusinessInfo />
        <hr className="my-6 border-gray-200 sm:mx-auto lg:my-8" />
        <span className="block text-sm text-gray-300 sm:text-center">
          © 2023 SA Plumbing . All Rights Reserved.
        </span>
      </div>
    </footer>
  );
};

export default Footer;
