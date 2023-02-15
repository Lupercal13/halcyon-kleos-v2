import React, { useState } from "react";
import { Link } from "react-router-dom";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <nav className="bg-black/50 h-20 w-full fixed z-10 ">
      <div className="text-white flex justify-between items-center">
        <h1 className="text-6xl font-shalimar ml-4">Halcyon Kleos</h1>
        <div className=" hidden sm:flex">
          <ul className="flex gap-4 mr-8 text-lg">
            <Link to='/'>
              <li className="cursor-pointer hover:text-gray-300 hover:border-b">
                Top
              </li>
            </Link>
            <Link to='/about'>
              {" "}
              <li className="cursor-pointer hover:text-gray-300 hover:border-b">
                About
              </li>
            </Link>
            <Link to='/news'>
              {" "}
              <li className="cursor-pointer hover:text-gray-300 hover:border-b">
                News
              </li>
            </Link>
            <Link to='/contact'>
              {" "}
              <li className="cursor-pointer hover:text-gray-300 hover:border-b">
                Contact
              </li>
            </Link>
            <Link to='/music'>
              {" "}
              <li className="cursor-pointer hover:text-gray-300 hover:border-b">
                Music
              </li>
            </Link>
          </ul>
        </div>
        {/* Hamburger Menu */}
        <div
          onClick={handleNav}
          className="block  z-10 cursor-pointer sm:hidden mr-4 "
        >
          {nav ? <AiOutlineClose size={25} /> : <AiOutlineMenu size={25} />}
        </div>
        <div
          className={
            nav
              ? "md:hidden fixed top-0 left-0 w-full h-screen bg-black/60 flex justify-center items-center ease-in duration-300"
              : "md:hidden fixed top-[-100%] left-0 w-full h-screen bg-black/60 flex justify-center items-center ease-in duration-300"
          }
        >
          <ul className="text-center">
            <Link to='/'>
              {" "}
              <li
                onClick={() => setNav(false)}
                className="p-4 text-3xl font-bold hover:text-gray-300 cursor-pointer"
              >
                Top
              </li>
            </Link>
            <Link to='/about'>
              {" "}
              <li
                onClick={() => setNav(false)}
                className="p-4 text-3xl font-bold hover:text-gray-300 cursor-pointer"
              >
                About
              </li>
            </Link>
            <Link to='/news'>
              {" "}
              <li
                onClick={() => setNav(false)}
                className="p-4 text-3xl font-bold hover:text-gray-300 cursor-pointer"
              >
                News
              </li>
            </Link>
            <Link to='/contact'>
              {" "}
              <li
                onClick={() => setNav(false)}
                className="p-4 text-3xl font-bold hover:text-gray-300 cursor-pointer"
              >
                Contact{" "}
              </li>
            </Link>
            <Link to='/music'>
              {" "}
              <li
                onClick={() => setNav(false)}
                className="p-4 text-3xl font-bold hover:text-gray-300 cursor-pointer"
              >
                Music
              </li>
            </Link>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
