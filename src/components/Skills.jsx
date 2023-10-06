import React, { useState } from "react";
import ReactCardFlip from "react-card-flip";

import CS from "../Assests/SkillIcons/CS.png";
import C from "../Assests/SkillIcons/C.png";
import Cpp from "../Assests/SkillIcons/Cpp.png";
import JS from "../Assests/SkillIcons/JavaScript.png";
import MD from "../Assests/SkillIcons/MongoDB.png";
import OR from "../Assests/SkillIcons/Oracle.png";
import AWS from "../Assests/SkillIcons/aws.png";
import BS from "../Assests/SkillIcons/bs5.png";
import CSS from "../Assests/SkillIcons/css.png";
import DN from "../Assests/SkillIcons/dotnet.png";
import EC from "../Assests/SkillIcons/eclipse.png";
import GC from "../Assests/SkillIcons/gcp.png";
import HN from "../Assests/SkillIcons/hibernate.png";
import HT from "../Assests/SkillIcons/html.png";
import JE from "../Assests/SkillIcons/j2ee.png";
import JV from "../Assests/SkillIcons/java.png";
import MS from "../Assests/SkillIcons/mysql.png";
import NJ from "../Assests/SkillIcons/nodejs.png";
import PS from "../Assests/SkillIcons/pl-sql.png";
import PY from "../Assests/SkillIcons/py.png";
import RC from "../Assests/SkillIcons/react.png";
import SS from "../Assests/SkillIcons/sql-server.png";
import TW from "../Assests/SkillIcons/tailwind.png";
import TF from "../Assests/SkillIcons/tensorflow.png";
import VS from "../Assests/SkillIcons/vside.png";

const Skills = () => {
  const [flipCards, setFlipCards] = useState([
    {
      isFlipped: false,
      text: "Built a webApp",
      id: 1,
      src: CS,
      title: "C Sharp",
      style: "shadow-purple-500",
    },
    {
      isFlipped: false,
      text: "4+ Year along with DSA",
      id: 2,
      src: C,
      title: "C",
      style: "shadow-blue-500",
    },
    {
      isFlipped: false,
      text: "3+ Year with OOPs",
      id: 3,
      src: Cpp,
      title: "C++",
      style: "shadow-blue-500",
    },
    {
      isFlipped: false,
      text: "Built WebApp and used it in Other sites",
      id: 4,
      src: JS,
      title: "JavaScript",
      style: "shadow-yellow-500",
    },
    {
      isFlipped: false,
      text: "1+ Year Experience",
      id: 5,
      src: MD,
      title: "MongoDB",
      style: "shadow-green-500 bg-slate-300 text-black",
    },
    {
      isFlipped: false,
      text: "3+ year with usage in multiple applications",
      id: 6,
      src: OR,
      title: "Oracle",
      style: "shadow-red-500",
    },
    {
      isFlipped: false,
      text: "AWS Cloud Foundations Certificate",
      id: 7,
      src: AWS,
      title: "AWS",
      style: "shadow-orange-500 bg-slate-300 text-black",
    },
    {
      isFlipped: false,
      text: "Built multiple websites with BS5",
      id: 8,
      src: BS,
      title: "Bootstrap",
      style: "shadow-purple-500",
    },
    {
      isFlipped: false,
      text: "3+ year Experience with multiple projects",
      id: 9,
      src: CSS,
      title: "CSS",
      style: "shadow-blue-500",
    },
    {
      isFlipped: false,
      text: "Completed 1 WebApp in dotnet environment",
      id: 10,
      src: DN,
      title: "DotNet",
      style: "shadow-purple-500",
    },
    {
      isFlipped: false,
      text: "3+ year Experience with practical usage",
      id: 11,
      src: EC,
      title: "Eclipse",
      style: "shadow-orange-500",
    },
    {
      isFlipped: false,
      text: "Completed training in GCP",
      id: 12,
      src: GC,
      title: "Google Cloud Platform",
      style: "shadow-yellow-500",
    },
    {
      isFlipped: false,
      text: "Learner of Hibernate",
      id: 13,
      src: HN,
      title: "Hibernate",
      style: "shadow-stone-500",
    },
    {
      isFlipped: false,
      text: "6+ year Experience",
      id: 14,
      src: HT,
      title: "HTML",
      style: "shadow-orange-500",
    },
    {
      isFlipped: false,
      text: "Wipro Training + 2 projects",
      id: 15,
      src: JE,
      title: "Java Enterprise Edition",
      style: "shadow-orange-500 bg-slate-300 text-black",
    },
    {
      isFlipped: false,
      text: "3+ year with DSA and CP",
      id: 16,
      src: JV,
      title: "Java Standard Edition",
      style: "shadow-blue-500",
    },
    {
      isFlipped: false,
      text: "3+ year with usage inprojects",
      id: 17,
      src: MS,
      title: "MySQL",
      style: "shadow-cyan-500",
    },
    {
      isFlipped: false,
      text: "Trained and built multiple projects",
      id: 18,
      src: NJ,
      title: "NodeJS",
      style: "shadow-green-500 bg-slate-300 text-black ",
    },
    {
      isFlipped: false,
      text: "3+ year",
      id: 19,
      src: PS,
      title: "PL/SQL",
      style: "shadow-red-500",
    },
    {
      isFlipped: false,
      text: "Data Analytics and Machine Learning",
      id: 20,
      src: PY,
      title: "Python",
      style: "shadow-yellow-500",
    },
    {
      isFlipped: false,
      text: "THIS PORTFOLIO",
      id: 21,
      src: RC,
      title: "React",
      style: "shadow-cyan-500",
    },
    {
      isFlipped: false,
      text: "2+ Year",
      id: 22,
      src: SS,
      title: "MS SQL Server",
      style: "shadow-rose-400",
    },
    {
      isFlipped: false,
      text: "Beginner",
      id: 23,
      src: TW,
      title: "Tailwind CSS",
      style: "shadow-cyan-500",
    },
    {
      isFlipped: false,
      text: "Beginner",
      id: 24,
      src: TF,
      title: "TensorFlow",
      style: "shadow-orange-500",
    },
    {
      isFlipped: false,
      text: "2+ Year",
      id: 25,
      src: VS,
      title: "Visual Studio IDE",
      style: "shadow-purple-500",
    },
  ]);

  function flipIt(id) {
    setFlipCards((prevFlipCards) =>
      prevFlipCards.map((card) =>
        card.id === id ? { ...card, isFlipped: !card.isFlipped } : card
      )
    );
  }

  return (
    <div
      name="skills"
      className="bg-gradient-to-b from-gray-800 to-black via-slate-900 w-full h-fit pt-28"
    >
      <div className="max-w-screen-lg mx-auto  p-4 flex flex-col justify-center w-full h-full text-white">
        <div className="text-center md:text-left ">
          <p className="text-4xl font-bold border-b-4 border-gray-500 p-2 inline">
            Skills
          </p>
          <p className="py-6 text-xl text-gray-400">
            These are the technologies I have worked with
          </p>
        </div>
        <div className="p-4  w-full grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6 text-center py-8  px-12 sm:px-0">
          {flipCards.map((e) => (
            <ReactCardFlip
              flipDirection="horizontal"
              isFlipped={e.isFlipped}
              key={e.id}
            >
              <div
                onClick={() => {
                  flipIt(e.id);
                }}
              >
                <div
                  className={
                    "shadow-md py-2 rounded-lg cursor-pointer " + e.style
                  }
                >
                  <div className="h-20 flex items-center justify-center overflow-hidden">
                    <img
                      src={e.src}
                      className="w-14 mx-auto my-auto "
                      alt={e.title}
                    />
                  </div>
                  <p className="pt-5 text-lg">{e.title}</p>
                </div>
              </div>
              <div
                onClick={() => {
                  flipIt(e.id);
                }}
              >
                <div
                  className={
                    "shadow-md py-2 rounded-lg cursor-pointer " + e.style
                  }
                >
                  <div className="p-1 h-20 flex items-center justify-center overflow-hidden">
                    <p className=" text-center text-xl text-gray-400 rounded">
                      {e.text}
                    </p>
                  </div>
                  <p className="pt-5 text-lg">{e.title}</p>
                </div>
              </div>
            </ReactCardFlip>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
