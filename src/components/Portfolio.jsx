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
      id: 1,
      src: CDA,
    },
    {
      id: 2,
      src: VSSAS,
    },
    {
      id: 3,
      src: SN,
    },
    {
      id: 4,
      src: P5,
    },
    {
      id: 5,
      src: Processing,
    },
    {
      id: 6,
      src: MoPar,
    },
  ];
  return (
    <div
      name="portfolio"
      className="bg-gradient-to-b from-black to-gray-800 via-black w-full md:h-screen text-white pt-20 overflow-y-hidden"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-fit">
        <div className="pb-4 md:pb-8 text-center md:text-left ">
          <p className="text-4xl font-bold inline border-b-4 border-gray-300">
            Portfolio
          </p>
          <p className="py-6 text-gray-400 text-xl">Check out the works:</p>
        </div>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {/* <div className="shadow-md shadow-gray-400 rounded-lg ">
            <div className="overflow-hidden">
              <img
                src={CDA}
                alt=""
                className="rounded-md duration-150 hover:scale-105"
              />
            </div>
            <div className="flex items-center justify-center">
              <button className="w-1/2 px-6 py-3 m-4 duration-150 hover:scale-100 scale-110">
                Demo
              </button>
              <button className="w-1/2 px-6 py-3 m-4 duration-150 hover:scale-100 scale-110">
                Code
              </button>
            </div>
          </div> */}
          {works.map(({ id, src }) => {
            return (
              <div key={id} className="shadow-md shadow-gray-400 rounded-lg ">
                <div className="overflow-hidden flex items-center justify-center h-40 ">
                  <img
                    src={src}
                    alt=""
                    className="rounded-md duration-150 hover:scale-105 "
                  />
                </div>
                <div className="flex items-center justify-center">
                  <button className="w-1/2 px-6 py-3 m-4 duration-150 hover:scale-100 scale-110 bg-slate-800 rounded-md">
                    Demo
                  </button>
                  <button className="w-1/2 px-6 py-3 m-4 duration-150 hover:scale-100 scale-110">
                    Code
                  </button>
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
