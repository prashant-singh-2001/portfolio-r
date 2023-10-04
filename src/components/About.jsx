import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen bg-gradient-to-b from-gray-800 to-black via-gray-900 text-white pt-40 md:pd-0"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-4 md:pd-8 text-center md:text-left ">
          <p className="text-4xl font-bold inline border-b-4 border-gray-400">
            About
          </p>
        </div>
        <p className="text-xl mt-20">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Blanditiis
          laborum necessitatibus culpa iste dolor placeat, nostrum a quaerat
          repellat cumque harum quisquam sapiente animi omnis ea consectetur
          esse laudantium libero labore dicta. Porro harum reprehenderit,
          voluptatibus laudantium provident beatae quas placeat perspiciatis
          vero dignissimos animi dicta voluptate nihil atque aperiam.
        </p>
        <br />
        <p className="text-xl">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Blanditiis
          laborum necessitatibus culpa iste dolor placeat, nostrum a quaerat
          repellat cumque harum quisquam sapiente animi omnis ea consectetur
          esse laudantium libero labore dicta. Porro harum reprehenderit,
          voluptatibus laudantium provident beatae quas placeat perspiciatis
          vero dignissimos animi dicta voluptate nihil atque aperiam.
        </p>
      </div>
    </div>
  );
};

export default About;
