import React from "react";
import PFPX from "../Assests/PFPX.png";
import { MdKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-scroll";
const Home = () => {
  return (
    <div
      name="home"
      className="h-screen min-h-screen w-full bg-gradient-to-b from-black to-gray-800 via-black"
    >
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
        <div className="flex flex-col justify-center h-full">
          <h2 className="text-6xl sm:text-7xl font-bold text-gray-100">
            Hey there!
          </h2>
          <p className="text-gray-400 pt-4 max-w-md text-2xl mb-0">
            I am an enthusiastic young man who is deeply passionate about the IT
            field.
          </p>
          
          <div>
            <Link
              to="portfolio"
              smooth
              duration={500}
              className="group text-xl text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-l from-teal-500 to-cyan-600 via-cyan-600 hover:shadow-white hover:shadow-sm hover:duration-150"
            >
              Portfolio
              <span className="group-hover:rotate-90 duration-300">
                <MdKeyboardArrowRight size={30} />
              </span>
            </Link>
          </div>
        </div>
        <div>
          <img
            src={PFPX}
            alt="Prashant Singh"
            className="rounded-xl mx-auto w-2/3 mb-5 sm:w-9/12"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
