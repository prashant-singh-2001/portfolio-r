import React from "react";
import CDA from "../Assests/ProjectIcons/CDA.png";
import VSSAS from "../Assests/ProjectIcons/VSSAS.png";
import P5 from "../Assests/ProjectIcons/p5.png";
import MoPar from "../Assests/ProjectIcons/MoPar.png";
import Processing from "../Assests/ProjectIcons/Processing.png";
import SN from "../Assests/ProjectIcons/SN.png";

const Portfolio = () => {
  const works = [
    {
      title: "MoPar Car e-Commerce",
      text: "",
      tech_stack: "MERN Stack",
      date: "August-2023 to September-2023",
      link: "https://github.com/prashant-singh-2001/MoPar",
      id: 6,
      src: MoPar,
    },
    {
      title: "Crime Data Analysis",
      text: "",
      tech_stack: "Python",
      date: "April-2023 to May-2023",
      link: "https://drive.google.com/file/d/1vAY1QJrDutU0SXycQ8eF_a-h7LCZCZ3N/view?usp=sharing",
      id: 1,
      src: CDA,
    },
    {
      title: "Vercetti Services",
      text: "",
      tech_stack: ".Net and SQL Server",
      date: "April-2022 to May-2022",
      link: "https://github.com/prashant-singh-2001/SpaNSalon",
      id: 2,
      src: VSSAS,
    },
    {
      title: "Start Next",
      text: "",
      tech_stack: "J2EE with BootStrap",
      date: "October-2021 to November-2021",
      link: "",
      id: 3,
      src: SN,
    },
    {
      title: "P5 JS Voyage",
      text: "",
      tech_stack: "P5.js",
      date: "May-2023 to current",
      link: "https://prashant-singh-2001.github.io/P5js/",
      id: 4,
      src: P5,
    },
    {
      title: "Processing Creative Coding",
      text: "",
      tech_stack: "Processing Framework of Java",
      date: "June-2023 to current",
      link: "https://github.com/prashant-singh-2001/ProceesingAdventures",
      id: 5,
      src: Processing,
    },
  ];
  return (
    <div
      name="portfolio"
      className="bg-gradient-to-b from-black to-gray-800 via-black w-full h-fit min-h-fit md:h-fit text-white pt-20 overflow-y-hidden"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-fit">
        <div className="pb-4 md:pb-8 text-center md:text-left ">
          <p className="text-4xl font-bold inline border-b-4 border-gray-300">
            Portfolio
          </p>
          <p className="py-6 text-gray-400 text-xl">Check out the works:</p>
        </div>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {works.map(({ id, src, title, text, tech_stack, date, link }) => {
            return (
              <div
                key={id}
                className="shadow-md shadow-gray-400 rounded-lg h-full min-h-fit "
              >
                <div className="overflow-hidden flex items-center justify-center h-40 ">
                  <img
                    src={src}
                    alt={title}
                    className="rounded-md duration-150 hover:scale-105 "
                  />
                </div>
                <div className=" text-justify">
                  <h3 className="text-center text-gray-200 p-4 text-2xl font-semibold">
                    {title}
                  </h3>
                  <p className="p-2 italic font-semibold text-lg">
                    {tech_stack}
                  </p>
                  <p className="p-2 font-thin italic">{date}</p>
                  <p className="p-2">{text}</p>
                  {link !== "" && (
                    <button className="my-2 mx-12  px-2 py-1 rounded-md border-none bg-red-200 text-gray-700 font-semibold">
                      <a target="_blank" rel="noreferrer" href={link}>
                        Wonder What Happens?
                      </a>
                    </button>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
