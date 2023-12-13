import React, { useEffect, useState } from "react";
import "./About.css";
import { skills } from "../../assests/skills";
import { motion } from "framer-motion";
import { about } from "../../assests/about";
import SchoolIcon from "@mui/icons-material/School";

const About = () => {
  const [skillData, setSkillData] = useState([]);

  // const navigate = useNavigate();
  // const handleNext = () => {
  //   navigate("/projects");
  // };
  // const handlePrevious = () => {
  //   navigate("/");
  // };
  useEffect(() => {
    setSkillData(skills);
  }, []);

  return (
    <div className="about">
      <motion.h2
        className="projects-heading"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 1 }}
      >
        Skills
      </motion.h2>
      <motion.div
        className="skill-data"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, delay: 1.5 }}
      >
        {skillData.map((item) => (
          <p key={item.id} className="link skill">
            <img src={item.image} className="skillImage" />
            <p>{item.description}</p>
          </p>
        ))}
      </motion.div>
      <motion.h2
        className="projects-heading"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 2 }}
      >
        Education
      </motion.h2>
      <div className="education">
        <div className="schoolIcon1">
          <SchoolIcon />
        </div>
        <div className="schoolIcon2">
          <SchoolIcon />
        </div>
        {about.Education.map((item, index) => {
          return (
            <div key={index} className="education_details">
              <p>{item.title}</p>
              <p>
                <span className="education_details_title">Duration :</span>
                {item.duration}
              </p>
              <p>
                <span className="education_details_title">College Name :</span>
                {item.college}
              </p>
            </div>
          );
        })}
      </div>
      <motion.h2
        className="projects-heading"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 2 }}
      >
        Training And Certification
      </motion.h2>
      <div className="education">
        <div className="schoolIcon1">
          <SchoolIcon />
        </div>
        <div className="schoolIcon2">
          <SchoolIcon />
        </div>
        <div className="schoolIcon3">
          <SchoolIcon />
        </div>
        {about.ExperienceAndTraining.map((item, index) => {
          return (
            <div key={index} className="education_details">
              <p>
                {item.title} - {item.college}
              </p>
              <p>
                <span className="education_details_title">Duration :</span>
                {item.duration}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default About;
