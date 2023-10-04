import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-scroll";
const Navbar = () => {
  const links = [
    { id: 1, link: "home" },
    { id: 7, link: "about" },
    { id: 3, link: "portfolio" },
    { id: 2, link: "skills" },
    { id: 4, link: "academics" },
    { id: 5, link: "training" },
    { id: 6, link: "certificates" },
    { id: 9, link: "others" },
    { id: 8, link: "contact" },
  ];
  const [nav, setNav] = useState(false);
  return (
    <div className="flex justify-between items-center w-full h-20 text-white fixed bg-black px-4 z-50">
      <div>
        <h1 className="font-Croissant text-2xl">Prashant Singh</h1>
      </div>
      <ul className="hidden md:flex">
        {links.map(({ link, id }) => {
          return (
            <li
              className="px-2 text-sm cursor-pointer capitalize font-medium text-gray-500 hover:scale-110 hover:text-cyan-100 hover:opacity-60  duration-150"
              key={id}
            >
              <Link to={link} smooth duration={500}>
                {link}
              </Link>
            </li>
          );
        })}
      </ul>
      <div
        onClick={() => setNav(!nav)}
        className="cursor-pointer pr-4 z-10 text-gray-500 md:hidden"
      >
        {!nav ? <FaBars size={30} /> : <FaTimes size={30} />}
      </div>
      {nav && (
        <ul className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-black to-gray-800 text-gray-200 md:text-gray-400">
          {links.map(({ link, id }) => {
            return (
              <li
                className="px-4 cursor-pointer capitalize py-6 text-xl"
                key={id}
              >
                <Link
                  onClick={() => setNav(!nav)}
                  to={link}
                  smooth
                  duration={500}
                >
                  {link}
                </Link>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
};

export default Navbar;
