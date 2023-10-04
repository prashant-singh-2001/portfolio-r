import React from "react";
import { FaGithub, FaHackerrank, FaLinkedin } from "react-icons/fa";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { SiLeetcode } from "react-icons/si";
import { MdDeveloperMode } from "react-icons/md";
import { HiOutlineMail } from "react-icons/hi";
const Socials = () => {
  const links = [
    {
      id: 1,
      child: (
        <>
          LinkedIn <FaLinkedin size={30} />
        </>
      ),
      href: "https://www.linkedin.com/in/prashant-singh-531b57198/",
    },
    {
      id: 2,
      child: (
        <>
          Github <FaGithub size={30} />
        </>
      ),
      href: "https://github.com/prashant-singh-2001",
    },
    {
      id: 3,
      child: (
        <>
          Mail <HiOutlineMail size={30} />
        </>
      ),
      href: "mailto:ps47600@gmail.com",
    },
    {
      id: 4,
      child: (
        <>
          LeetCode <SiLeetcode size={30} />
        </>
      ),
      href: "https://leetcode.com/PrashantSingh0110/",
    },
    {
      id: 5,
      child: (
        <>
          Hackerank <FaHackerrank size={30} />
        </>
      ),
      href: "https://www.hackerrank.com/ps47600",
    },
    {
      id: 6,
      child: (
        <>
          G-Dev <MdDeveloperMode size={30} />
        </>
      ),
      href: "https://g.dev/PrashantSingh2001",
    },
    {
      id: 7,
      child: (
        <>
          Resume <BsFillPersonLinesFill size={30} />
        </>
      ),
      href: "/PSR_X.pdf",
      download: true,
    },
  ];
  return (
    <div className="hidden lg:flex flex-col top-[35%] left-0 fixed ">
      <ul>
        {links.map(({ id, child, href, download }) => {
          return (
            <li
              key={id}
              className="flex justify-between items-center w-40 h-12 px-4 bg-zinc-500 ml-[-100px] hover:rounded-r-sm hover:ml-[0px] duration-300 shadow-lg shadow-slate-300"
            >
              <a
                target="_blank"
                rel="noreferrer"
                download={download}
                href={href}
                className="flex justify-between items-center w-full text-white"
              >
                {child}
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Socials;
