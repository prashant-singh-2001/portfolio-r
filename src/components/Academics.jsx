import React from "react";
import { FaUserGraduate, FaGraduationCap } from "react-icons/fa";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import "../App.css";
const Academics = () => {
  const timeEle = [
    {
      id: 1,
      title: "High School",
      location: "Army Public School, Gwalior",
      description:
        "Successfully completed my High School with an aggregate score of 10 CGPA or 95%",
      date: "May-2016 to June-2017",
      icon: "UG",
    },
    {
      id: 2,
      title: "Higher Secondary School",
      location: "Army Public School, Gwalior",
      description:
        "Proudly completed my Higher Secondary with an aggregate score of 72.8%",
      date: "May-2018 to June-2019",
      icon: "UG",
    },
    {
      id: 3,
      title: "Bachelors of Computer Application",
      location: "Prestige Institute of Management, Gwalior",
      description:
        "Completed my UG with aggreagte score of 81.3% and 3+ completed projects",
      date: "July-2019 to July-2022",
      icon: "UG",
    },
    {
      id: 4,
      title: "Master Of Computer Application",
      location: "ITM University, Gwalior",
      description: "Currently pursuing MCA with major in DS/ML",
      date: "July-2022 to Current",
      icon: "PG",
    },
  ];
  timeEle.reverse();
  return (
    <div
      name="academics"
      className="pt-28 text-white bg-gradient-to-b from-black to-gray-800 via-black w-full h-fit min-h-screen"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-400">
            Academics
          </p>
        </div>
        <VerticalTimeline>
          {timeEle.map((e) => (
            <VerticalTimelineElement
              animate={true}
              key={e.id}
              date={e.date}
              dateClassName=" text-black lg:text-gray-100 "
              icon={
                e.icon === "UG" ? (
                  <FaUserGraduate color="black" />
                ) : (
                  <FaGraduationCap color="black" />
                )
              }
              iconClassName={
                e.icon === "UG" ? "bg-green-400 " : "bg-yellow-400"
              }
            >
              <h3 className="vertical-timeline-element-title text-black font-bold ">
                {e.title}
              </h3>
              <h5 className="vertical-timeline-element-subtitle text-black">
                {e.location}
              </h5>
              <p id="description" className="text-gray-500">
                {e.description}
              </p>
            </VerticalTimelineElement>
          ))}
        </VerticalTimeline>
      </div>
    </div>
  );
};

export default Academics;
