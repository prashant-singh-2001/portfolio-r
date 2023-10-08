import React from "react";
import {
  TbFileTypeSql,
  TbBulb,
  TbBrandGoogleAnalytics,
  TbBrandCSharp,
  TbRobot,
} from "react-icons/tb";
import { GiProcessor } from "react-icons/gi";
import { FaHackerrank, FaJava, FaPython, FaAws } from "react-icons/fa";
import { SiCsharp, SiInfosys, SiTcs, SiWipro } from "react-icons/si";
import { LiaNetworkWiredSolid } from "react-icons/lia";
import { GrAnalytics } from "react-icons/gr";

const Certificates = () => {
  const certs = [
    {
      id: 1,
      title: "Google",
      icon: (
        <span className="flex">
          <TbBrandGoogleAnalytics className="mx-auto w-10 h-10 text-gray-900" />
        </span>
      ),
      text: "Google Analytics 4",
      link: "https://drive.google.com/file/d/1upq1-NIvDeA6hrqnfyDkZXYaU4m8i6IN/view?usp=sharing",
    },
    {
      id: 2,
      title: "Celonis",
      icon: (
        <span className="flex">
          <GiProcessor className=" mx-auto w-10 h-10 text-gray-900" />
        </span>
      ),
      text: "Rising Star Process Mining",
      link: "https://www.credly.com/badges/695f9621-8bdf-4861-84ad-87f859ef297a/public_url",
    },
    {
      id: 3,
      title: "Infosys Springboard",
      icon: (
        <span className="flex">
          <SiInfosys className=" ms-auto w-10 h-10 scale-125 text-gray-900" />
          <FaJava className=" me-auto w-10 h-10 text-gray-900" />
        </span>
      ),
      text: "Java Developer",
      link: "https://drive.google.com/file/d/1cufkPRsR5qlIQuCgAceiiKC4UEOd_1fM/view?usp=sharing",
    },
    {
      id: 4,
      title: "AWS Academy",
      icon: (
        <span className="flex">
          <FaAws className=" mx-auto w-10 h-10 text-gray-900" />
        </span>
      ),
      text: "AWS Cloud Foudations",
      link: "https://www.credly.com/badges/86f4f10e-6d3f-46e4-aad9-baa358136d68/public_url",
    },
    {
      id: 5,
      title: "Wipro TalentNext",
      icon: (
        <span className="flex">
          <SiWipro className=" mx-auto w-10 h-10 text-gray-900" />
        </span>
      ),
      text: "J2EE Developer",
      link: "https://drive.google.com/file/d/1gyw5x0M_Vfi6ukSEwka3wJYeUQVzvhtb/view?usp=sharing",
    },
    {
      id: 6,
      title: "TCS iOn",
      icon: (
        <span className="flex">
          <SiTcs className=" mx-auto w-10 h-10 text-gray-900" />
        </span>
      ),
      text: "Young Professional",
      link: "https://drive.google.com/file/d/1njSXBQry9YqL0L8h-DFhkjZNY6oBkkwo/view?usp=sharing",
    },
    {
      id: 7,
      title: "HackerRank",
      icon: (
        <span className="flex">
          <FaHackerrank className=" ms-auto w-10 h-10 text-gray-900" />
          <TbFileTypeSql className="me-auto w-10 h-10 text-gray-900" />
        </span>
      ),
      text: "SQL Advanced",
      link: "https://www.hackerrank.com/certificates/14efd2776e3a",
    },
    {
      id: 8,
      title: "HackerRank",
      icon: (
        <span className="flex">
          <FaHackerrank className=" ms-auto w-10 h-10 text-gray-900" />
          <TbBulb className="me-auto w-10 h-10 text-gray-900" />
        </span>
      ),
      text: "Problem Solving Intermediate",
      link: "https://www.hackerrank.com/certificates/a6d78ddad1b7",
    },
    {
      id: 9,
      title: "HackerRank",
      icon: (
        <span className="flex">
          <FaHackerrank className=" ms-auto w-10 h-10 text-gray-900" />
          <FaJava className="me-auto w-10 h-10 text-gray-900" />
        </span>
      ),
      text: "Java Basic",
      link: "https://www.hackerrank.com/certificates/6a696c76cb23",
    },
    {
      id: 10,
      title: "HackerRank",
      icon: (
        <span className="flex">
          <FaHackerrank className=" ms-auto w-10 h-10 text-gray-900" />
          <SiCsharp className="me-auto w-10 h-10 text-gray-900" />
        </span>
      ),
      text: "C# Basic",
      link: "https://www.hackerrank.com/certificates/636ef4dd45c1",
    },
    {
      id: 11,
      title: "HackerRank",
      icon: (
        <span className="flex">
          <FaHackerrank className=" ms-auto w-10 h-10 text-gray-900" />
          <FaPython className="me-auto w-10 h-10 text-gray-900" />
        </span>
      ),
      text: "Python Basic",
      link: "https://www.hackerrank.com/certificates/403be5a0ce95",
    },
  ];
  const courses = [
    {
      id: 1,
      title: "University of Helsinki",
      icon: (
        <span className="flex">
          <TbRobot className="mx-auto w-10 h-10 text-gray-900" />
        </span>
      ),
      text: "Elements of AI",
      link: "https://drive.google.com/file/d/1NuVO2qrbc84azboKLzfIiZ1M_gz8tkfe/view?usp=sharing",
    },
    {
      id: 2,
      title: "freeCodeCamp",
      icon: (
        <span className="flex">
          <LiaNetworkWiredSolid className=" mx-auto w-10 h-10 text-gray-900" />
        </span>
      ),
      text: "Machine Learning With Python",
      link: "https://www.credly.com/badges/695f9621-8bdf-4861-84ad-87f859ef297a/public_url",
    },
    {
      id: 3,
      title: "Udemy",
      icon: (
        <span className="flex">
          <GrAnalytics className=" mx-auto w-10 h-10 scale-125 text-gray-900" />
        </span>
      ),
      text: "Data Analytics With Python",
      link: "https://drive.google.com/file/d/1y_6ohLPBoD1gwXFhiX9myXGcKlD24-48/view?usp=sharing",
    },
    {
      id: 4,
      title: "Udemy",
      icon: (
        <span className="flex">
          <TbBrandCSharp className=" mx-auto w-10 h-10 text-gray-900" />
        </span>
      ),
      text: "Learn C# Coding Intermediate: C# Classes, Methods and OOPs",
      link: "https://www.credly.com/badges/86f4f10e-6d3f-46e4-aad9-baa358136d68/public_url",
    },
  ];
  return (
    <div
      name="certificates"
      className="bg-gradient-to-b from-black to-gray-800 via-black w-full h-fit min-h-fit md:h-fit text-white pt-20 overflow-y-hidden"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-fit">
        <div className="pb-4 md:pb-8 text-center md:text-left ">
          <p className="text-3xl p-2 font-bold inline border-b-4 border-gray-500">
            Certificates
          </p>
        </div>
        <div className="scrollable-container border border-gray-500 rounded-2xl">
          <div className=" min-h-full h-96 flex  text-gray-900 gap-4">
            {certs.map(({ id, title, icon, text, link }) => (
              <div
                key={id}
                class="w-fit min-h-fit flex flex-col items-center px-8 py-2  my-auto bg-gray-50 bg-opacity-95 rounded-md shadow-sm duration-300 shadow-fuchsia-50 hover:shadow-pink-600 hover:shadow-lg"
              >
                <h3 className="text-center p-2 py-3 text-2xl font-semibold h-24 ">
                  {icon}
                  {title}
                </h3>
                <p className="p-4 font-semibold text-xl italic text-yellow-500 h-10">
                  2021
                </p>
                <p className="py-6 font-semibold text-xl h-32  text-center">
                  {text}
                </p>
                <p className="mx-8 p-2 font-medium border-spacing-1 border border-red-400 rounded-md duration-300 hover:bg-red-700 hover:border-gray-50 hover:text-gray-50  text-center">
                  <a target="_blank" rel="noreferrer" href={link}>
                    View Certificate
                  </a>
                </p>
              </div>
            ))}
          </div>
        </div>
        <div className=" mt-4 pb-4 md:pb-8 text-center md:text-left ">
          <p className="text-3xl p-2 font-bold inline border-b-4 border-gray-500">
            Courses
          </p>
        </div>
        <div className="scrollable-container ">
          <div className=" min-h-full h-96 flex  text-gray-900 gap-4">
            {courses.map(({ id, title, icon, text, link }) => (
              <div
                key={id}
                class="w-fit min-h-fit flex flex-col items-center px-8 py-2  my-auto bg-gray-50 bg-opacity-95 rounded-md shadow-sm duration-300 shadow-fuchsia-50 hover:shadow-amber-600 hover:shadow-lg"
              >
                <h3 className="text-center p-2 py-3 text-2xl font-semibold h-24 ">
                  {icon}
                  {title}
                </h3>
                <p className="p-4 font-semibold text-xl italic text-yellow-500 h-10">
                  2021
                </p>
                <p className="py-6 font-semibold text-xl h-32  text-center">
                  {text}
                </p>
                <p className="mx-8 p-2 font-medium border-spacing-1 border border-red-400 rounded-md duration-300 hover:bg-red-700 hover:border-gray-50 hover:text-gray-50  text-center">
                  <a target="_blank" rel="noreferrer" href={link}>
                    View Certificate
                  </a>
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Certificates;
