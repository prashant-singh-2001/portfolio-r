import React from "react";

const Contact = () => {
  return (
    <div
      className="w-full h-screen bg-gradient-to-b from-black to-gray-800 p-4 text-white pt-20"
      name="contact"
    >
      <div className="flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full">
        <div className="p-8 text-center md:text-left ">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Contact
          </p>
          <p className="py-10">
            Submit the form below to get in touch with me!
          </p>
        </div>
        <div className="flex  justify-center items-center">
          <form
            action="https://getform.io/f/6acba770-6e9a-4ccb-ac88-b9513c3d95ec"
            method="POST"
            className="flex flex-col w-full md:w-1/2"
          >
            <input
              required
              type="text"
              name="name"
              id=""
              placeholder="Enter your name"
              className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
            />
            <input
              required
              type="text"
              name="email"
              id=""
              placeholder="Enter your email"
              className="my-4 p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
            />
            <textarea
              required
              placeholder="Enter your message"
              name="message"
              rows={10}
              className="p-2 border-2 bg-transparent rounded-md focus:outline-none text-white"
            ></textarea>
            <button className="text-white bg-gradient-to-b from-cyan-500 to-blue-500 px-6 py-3 my-8 mx-auto flex items-center rounded-md hover:scale-105 duration-200">
              Yo! Lets Chat!
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
