import React from "react";
import { PiCertificateFill } from "react-icons/pi";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import "../App.css";
const Certificates = () => {
  const timeEle = [
    {
      id: 1,
      title: "Young Professional",
      location: "TCS Careers Edge",
      description:
        "Successfully completed Soft Skills training under TCS.Gained skills like Communication Skills, Presentation Skills, and other Soft Skills.TCS Certified",
      date: "May-2023",
      icon: "UG",
    },
    {
      id: 2,
      title: "Cloud Foundation",
      location: "AWS Academy",
      description:
        "Successfully completed AWS Cloud Practitioner training. Gained skills such as Cloud Computing, AWS Cloud Management. Successfully gained AWS Academy Graduate- Cloud Foundation Certification",
      date: "April-2023",
      icon: "UG",
    },
    {
      id: 3,
      title: "J2EE Training",
      location: "Wipro Talent Next",
      description:
        "Learnt about J2EE and its component to develop Websites using JSP and JDBC. Developed a personal project LeanBow's Customs using J2EE Stack.Successfully gained Wipro Certificate",
      date: "August-2021",
      icon: "UG",
    },
  ];

  return (
    <div
      name="training"
      className="pt-28 text-white bg-gradient-to-b to-black from-gray-800 via-black w-full h-fit min-h-screen"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-400">
            Training
          </p>
        </div>
        <VerticalTimeline>
          {timeEle.map((e) => (
            <VerticalTimelineElement
              animate={true}
              key={e.id}
              date={e.date}
              dateClassName=" text-black lg:text-gray-100 "
              icon={<PiCertificateFill color="black" />}
              iconClassName={"bg-red-500 scale-110"}
              contentStyle={{
                background: "rgba(100,100,100,0.2)",
                color: "white",
              }}
              contentArrowStyle={{ color: "yellow" }}
            >
              <h3 className="vertical-timeline-element-title font-bold ">
                {e.title}
              </h3>
              <h5 className="vertical-timeline-element-subtitle">
                {e.location}
              </h5>
              <p id="description" className="">
                {e.description}
              </p>
            </VerticalTimelineElement>
          ))}
        </VerticalTimeline>
      </div>
    </div>
  );
};

export default Certificates;
