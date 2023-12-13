import React, { useEffect, useState } from "react";
import "./Projects.css";
import { data } from "../../assests/data";
import YouTubeIcon from "@mui/icons-material/YouTube";
import GitHubIcon from "@mui/icons-material/GitHub";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

const Projects = () => {
  const [active, setActive] = useState(false);
  const [productData, setProductData] = useState([]);

  // const navigate = useNavigate();
  // const handleNext = () => {
  //   navigate("/contact");
  // };
  // const handlePrevious = () => {
  //   navigate("/about");
  // };

  useEffect(() => {
    setProductData(data);
  }, []);

  const productFilter = (itemData) => {
    let filterData = data.filter((item) => item.field === itemData);
    setProductData(filterData);
  };

  return (
    <>
      <div className="projects">
        <motion.h2
          className="projects-heading"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          My Projects
        </motion.h2>
        <div className="btns">
          <motion.button
            className={productData === data ? "btn active" : "btn"}
            onClick={() => setProductData(data)}
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 1.5 }}
          >
            All
          </motion.button>
          <motion.button
            className="selectBtn"
            onClick={() => productFilter("javascript")}
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 1 }}
          >
            JavaScript
          </motion.button>
          <motion.button
            className="selectBtn"
            onClick={() => productFilter("react")}
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            React
          </motion.button>
        </div>
        <motion.ul
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 2 }}
        >
          {productData.map((item) => (
            <li key={item.id}>
              <img src={item.image} alt={item.title} className="img" />
              <h3 className="title">{item.title}</h3>
              <div className="product-details">
                <p className="description">{item.description}</p>
                <p>
                  <span className="techStackHeading">Tech Stack : </span>
                  <span className="techStackData">{item.techStack}</span>
                </p>
                <div className="btn">
                  <a href={item.liveLink} target="_blank">
                    <button className="youtubeBtn">
                      <YouTubeIcon />
                      Live
                    </button>
                  </a>
                  <a href={item.github} target="_blank">
                    <button className="githubBtn">
                      <GitHubIcon />
                      GitHub
                    </button>
                  </a>
                </div>
              </div>
            </li>
          ))}
        </motion.ul>
        <motion.button
          // onClick={() => handleNext()}
          className="rightArrow"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 2.5 }}
        >
          <ArrowForwardIcon />
        </motion.button>
      </div>
    </>
  );
};

export default Projects;
