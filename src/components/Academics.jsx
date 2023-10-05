import React from "react";
import { FaUserGraduate, FaGraduationCap } from "react-icons/fa";
import { PiCertificateFill } from "react-icons/pi";
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
      id: 7,
      title: "J2EE Training",
      location: "Wipro Talent Next",
      description:
        "Learnt about J2EE and its component to develop Websites using JSP and JDBC. Developed a personal project LeanBow's Customs using J2EE Stack.Successfully gained Wipro Certificate",
      date: "August-2021",
      icon: "TR",
    },
    {
      id: 4,
      title: "Master Of Computer Application",
      location: "ITM University, Gwalior",
      description: "Currently pursuing MCA with major in DS/ML",
      date: "July-2022 to Current",
      icon: "PG",
    },
    {
      id: 5,
      title: "Young Professional",
      location: "TCS Careers Edge",
      description:
        "Successfully completed Soft Skills training under TCS.Gained skills like Communication Skills, Presentation Skills, and other Soft Skills.TCS Certified",
      date: "May-2023",
      icon: "TR",
    },
    {
      id: 6,
      title: "Cloud Foundation",
      location: "AWS Academy",
      description:
        "Successfully completed AWS Cloud Practitioner training. Gained skills such as Cloud Computing, AWS Cloud Management. Successfully gained AWS Academy Graduate- Cloud Foundation Certification",
      date: "April-2023",
      icon: "TR",
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
                e.icon === "TR" ? (
                  <PiCertificateFill color="black" />
                ) : e.icon === "UG" ? (
                  <FaUserGraduate color="black" />
                ) : (
                  <FaGraduationCap color="black" />
                )
              }
              iconClassName={
                e.icon === "TR"
                  ? "bg-red-500"
                  : e.icon === "UG"
                  ? "bg-green-400 "
                  : "bg-yellow-400"
              }
              contentStyle={
                e.icon === "TR"
                  ? {
                      background: "rgba(100,100,100,0.2)",
                    }
                  : {}
              }
            >
              <h3
                className={
                  "vertical-timeline-element-title font-bold  " +
                  (e.icon === "TR" ? "text-gray-100" : "text-gray-800")
                }
              >
                {e.title}
              </h3>
              <h5
                className={
                  "vertical-timeline-element-subtitle  " +
                  (e.icon === "TR" ? "text-gray-100" : "text-gray-800")
                }
              >
                {e.location}
              </h5>
              <p
                id="description"
                className={e.icon === "TR" ? "text-gray-200" : "text-gray-700"}
              >
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
