import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen bg-gradient-to-b from-gray-800 to-black via-gray-900 text-white pt-20 md:pt-0"
    >
      <div className="max-w-screen-lg  md:pt-0 p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-4 md:pd-8 text-center md:text-left ">
          <p className="text-4xl font-bold inline border-b-4 border-gray-400">
            About
          </p>
        </div>
        <p className="text-lg text-justify text-gray-300 my-2 pt-10 md:pt-0">
          I'm Prashant Singh, a budding software developer with a burning
          passion for the world of IT. I thrive on learning and am always on the
          lookout for opportunities to expand my horizons. Whether I'm working
          solo or as part of a team, I bring an upbeat and proactive attitude to
          everything I do. My journey in the IT field has seen me tackle a
          variety of projects, from web development to data analytics.
        </p>
        <p className="text-lg text-justify text-gray-300 my-2 hidden md:block">
          In terms of technical skills, I'm proficient in languages like Java,
          C#, C++, Python, and more. I've worked with databases such as MySQL,
          MS SQL Server, Oracle, and MongoDB, and I'm well-versed in tools like
          Stripe, ASP.Net Core, Tensorflow, Git, and Hibernate. My experience
          extends to platforms like Cloudinary, Google Cloud, AWS, and
          development environments like Eclipse and VS IDE.
        </p>
        <p className="text-lg text-justify text-gray-300 my-2 hidden md:block">
          Beyond my technical abilities, I pride myself on a robust set of soft
          skills, including leadership, problem-solving, and effective
          communication. I'm a quick learner and can adapt to new challenges
          with ease.
        </p>
        <p className="text-lg text-justify text-gray-300 my-2 hidden md:block">
          In my free time, you'll find me engaged in a variety of interests,
          from playing basketball and volleyball to dancing and reading books. I
          also have a fascination with military and automobiles, which keeps my
          curiosity alive.
        </p>
        <p className="text-lg text-justify text-gray-300 my-2 hidden md:block">
          My academic journey has been marked by achievements such as Wipro
          Talent Next J2EE training, AWS Academy Cloud Foundations
          certification, and TCS Career Edge's Young Professional program. I
          hold a Master of Computer Applications degree from SOET, ITM
          University, with an impressive SGPA of 9.15, and a Bachelor of
          Computer Applications degree from Prestige Institute of Management,
          Gwalior, with a strong academic record of 81.3%.
        </p>
        <p className="text-lg text-justify text-gray-300 my-2 hidden md:block">
          I've also earned numerous certifications, including Google Analytics,
          Celonis Process Mining, HackerRank certifications, Oracle Java
          Explorer Badge, and more. I'm driven not only by my passion for
          technology but also by a desire to make a meaningful impact in the
          software development world. With my dedication to lifelong learning
          and a positive, proactive approach, I'm excited about the future and
          the opportunities it holds for me in the IT field.
        </p>
      </div>
    </div>
  );
};

export default About;
