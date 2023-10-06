import React, { useState } from "react";
import ReactCardFlip from "react-card-flip";
import {
  FaChevronUp,
  FaSun,
  FaBasketballBall,
  FaVolleyballBall,
  FaReadme,
} from "react-icons/fa";
import { FaPersonMilitaryRifle } from "react-icons/fa6";
import { SiYoutubegaming } from "react-icons/si";
import { PiCodesandboxLogoDuotone } from "react-icons/pi";
import { TbTrekking } from "react-icons/tb";
import { MdDisplaySettings } from "react-icons/md";
import {
  BsFillLightningChargeFill,
  BsFillChatQuoteFill,
  BsCommand,
} from "react-icons/bs";
import { RxMixerHorizontal } from "react-icons/rx";
import Dance from "../Assests/HobbyIcon/Dance";
import RacingTyre from "../Assests/HobbyIcon/RacingTyre";

const Certificates = () => {
  const [interestCards, setInteresCards] = useState([
    {
      isFlipped: false,
      id: 1,
      src: <FaBasketballBall size={40} />,
      title: "Basketball",
      style: "shadow-violet-500 bg-slate-300 text-black",
    },

    {
      isFlipped: false,
      id: 3,
      src: <FaVolleyballBall size={40} />,
      title: "Volleyball",
      style: "shadow-sky-500",
    },
    {
      isFlipped: false,
      id: 4,
      src: <Dance />,
      title: "Dance",
      style: "shadow-emerald-500 bg-slate-300 text-black",
    },
    {
      isFlipped: false,
      id: 5,
      src: <FaReadme size={40} />,
      title: "Reading",
      style: "shadow-yellow-500",
    },
    {
      isFlipped: false,
      id: 6,
      src: <TbTrekking size={40} />,
      title: "Trekking",
      style: "shadow-red-500 bg-slate-300 text-black",
    },
    {
      isFlipped: false,
      id: 7,
      src: <SiYoutubegaming size={40} />,
      title: "Gaming",
      style: "shadow-fuchsia-500 ",
    },
  ]);

  function flipIn(id) {
    setInteresCards((prevFlipCards) =>
      prevFlipCards.map((card) =>
        card.id === id ? { ...card, isFlipped: !card.isFlipped } : card
      )
    );
  }
  const [flipCards, setFlipCards] = useState([
    {
      isFlipped: false,
      id: 1,
      src: <FaChevronUp size={40} />,
      title: "Leadership",
      style: "shadow-rose-500",
    },
    {
      isFlipped: false,
      id: 2,
      src: <RxMixerHorizontal size={40} />,
      title: "Decision Making",
      style: "shadow-purple-500",
    },
    {
      isFlipped: false,
      id: 3,
      src: <FaSun size={40} />,
      title: "Problem Solver",
      style: "shadow-blue-500",
    },
    {
      isFlipped: false,
      id: 4,
      src: <BsFillLightningChargeFill size={40} />,
      title: "Critical Thinker",
      style: "shadow-teal-500",
    },
    {
      isFlipped: false,
      id: 5,
      src: <BsFillChatQuoteFill size={40} />,
      title: "Communication",
      style: "shadow-lime-500 ",
    },
    {
      isFlipped: false,
      id: 6,
      src: <BsCommand size={40} />,
      title: "Team Spirit",
      style: "shadow-orange-500",
    },
    {
      isFlipped: false,
      id: 7,
      src: <PiCodesandboxLogoDuotone size={40} />,
      title: "Adaptibility",
      style: "shadow-pink-500 ",
    },
  ]);

  function flipIt(id) {
    setFlipCards((prevFlipCards) =>
      prevFlipCards.map((card) =>
        card.id === id ? { ...card, isFlipped: !card.isFlipped } : card
      )
    );
  }

  const [interest, setInterest] = useState([
    {
      isFlipped: false,
      id: 1,
      src: <RacingTyre />,
      title: "Automobiles",
      style: "shadow-cyan-500 bg-slate-300 text-black",
    },
    {
      isFlipped: false,
      id: 2,
      src: <FaPersonMilitaryRifle size={40} />,
      title: "Military",
      style: "shadow-amber-500 bg-slate-300 text-black",
    },
    {
      isFlipped: false,
      id: 3,
      src: <MdDisplaySettings size={40} />,
      title: "Computers",
      style: "shadow-stone-500 bg-slate-300 text-black",
    },
  ]);

  function flipInterest(id) {
    setInterest((prevFlipCards) =>
      prevFlipCards.map((card) =>
        card.id === id ? { ...card, isFlipped: !card.isFlipped } : card
      )
    );
  }
  return (
    <div
      name="hobbies"
      className="w-full h-fit min-h-fit bg-gradient-to-b from-gray-800 to-black via-gray-900 text-white pt-20 md:pt-44"
    >
      <div className="max-w-screen-lg  md:pt-0 p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-4 md:pd-8 text-center md:text-left ">
          <p className="text-5xl py-1 font-bold inline border-b-4 border-gray-400">
            Soft Skills
          </p>
        </div>
        <div className="p-4  w-full   grid grid-cols-2 md:grid-cols-4 gap-6 text-center py-8  px-12 sm:px-0">
          {flipCards.map((e) => (
            <ReactCardFlip
              flipDirection="horizontal"
              isFlipped={e.isFlipped}
              key={e.id}
            >
              <div
                onMouseEnter={() => {
                  flipIt(e.id);
                }}
              >
                <div
                  key={e.id}
                  className={"shadow-md py-2 rounded-lg  " + e.style}
                >
                  <div className="h-20 flex items-center justify-center overflow-hidden">
                    {e.src}
                  </div>
                  <p className="pt-5  text-xl font-medium">{e.title}</p>
                </div>
              </div>
              <div
                onMouseLeave={() => {
                  flipIt(e.id);
                }}
              >
                <div
                  key={e.id}
                  className={"shadow-md py-2 rounded-lg " + e.style}
                >
                  <div className="h-20 flex items-center justify-center overflow-hidden">
                    {e.src}
                  </div>
                  <p className="pt-5 text-xl font-medium ">{e.title}</p>
                </div>
              </div>
            </ReactCardFlip>
          ))}
        </div>
        <div className="pb-4 md:pd-8 text-center md:text-left ">
          <p className="text-3xl py-1 font-bold inline border-b-4 border-gray-400">
            Hobbies
          </p>
        </div>
        <div className="p-4  w-full grid grid-cols-2 md:grid-cols-6 gap-6 text-center py-8  px-12 sm:px-0">
          {interestCards.map((e) => (
            <ReactCardFlip
              flipDirection="horizontal"
              isFlipped={e.isFlipped}
              key={e.id}
            >
              <div
                onMouseEnter={() => {
                  flipIn(e.id);
                }}
              >
                <div
                  key={e.id}
                  className={"shadow-md py-2 rounded-lg " + e.style}
                >
                  <div className="h-20 flex items-center justify-center overflow-hidden">
                    {e.src}
                  </div>
                  <p className="pt-5 text-xl">{e.title}</p>
                </div>
              </div>
              <div
                onMouseLeave={() => {
                  flipIn(e.id);
                }}
              >
                <div
                  key={e.id}
                  className={"shadow-md py-2 rounded-lg " + e.style}
                >
                  <div className="h-20 flex items-center justify-center overflow-hidden">
                    {e.src}
                  </div>
                  <p className="pt-5 text-xl">{e.title}</p>
                </div>
              </div>
            </ReactCardFlip>
          ))}
        </div>
        <div className="pb-4 md:pd-8 text-center md:text-left ">
          <p className="text-3xl py-1 font-bold inline border-b-4 border-gray-400">
            Interests
          </p>
        </div>
        <div className="p-4  w-full grid grid-cols-2 md:grid-cols-6 gap-6 text-center py-8  px-12 sm:px-0">
          {interest.map((e) => (
            <ReactCardFlip
              flipDirection="horizontal"
              isFlipped={e.isFlipped}
              key={e.id}
            >
              <div
                onMouseEnter={() => {
                  flipInterest(e.id);
                }}
              >
                <div
                  key={e.id}
                  className={"shadow-md py-2 rounded-lg " + e.style}
                >
                  <div className="h-20 flex items-center justify-center overflow-hidden">
                    {e.src}
                  </div>
                  <p className="pt-5 text-xl">{e.title}</p>
                </div>
              </div>
              <div
                onMouseLeave={() => {
                  flipInterest(e.id);
                }}
              >
                <div
                  key={e.id}
                  className={"shadow-md py-2 rounded-lg " + e.style}
                >
                  <div className="h-20 flex items-center justify-center overflow-hidden">
                    {e.src}
                  </div>
                  <p className="pt-5 text-xl">{e.title}</p>
                </div>
              </div>
            </ReactCardFlip>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Certificates;
