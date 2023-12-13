import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";
import DehazeIcon from "@mui/icons-material/Dehaze";
import CloseIcon from "@mui/icons-material/Close";
import "./Navbar.css";
import { motion } from "framer-motion";
import image from "../../assests/Images/Image-removebg-preview.png";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [modeColor, setModeColor] = useState(true);

  const navigate = useNavigate();

  useEffect(() => {
    if (localStorage.getItem("theme") === "dark") {
      setDark();
    } else {
      setLight();
    }
  }, []);

  const changeMode = () => {
    setModeColor(!modeColor);
    const mode = localStorage.getItem("theme");
    if (mode === "dark") {
      setLight();
    } else {
      setDark();
    }
  };

  const setDark = () => {
    localStorage.setItem("theme", "dark");
    document.documentElement.setAttribute("data-theme", "dark");
  };

  const setLight = () => {
    localStorage.setItem("theme", "light");
    document.documentElement.setAttribute("data-theme", "light");
  };

  return (
    <div className="navbar">
      <motion.h2
        className="navbar-heading"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <img src={image} alt="Image" className="navbar-image" />
        Sai Vamsi
      </motion.h2>
      <div className="nav_links">
        {/* <Link to="/">
          <motion.a
            // onClick={() => navigate("/")}
            className="link"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            Home
          </motion.a>
        </Link>
        <motion.a
          href="about"
          // onClick={() => navigate("/about")}
          className="link"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          About
        </motion.a>
        <motion.a
          className="link"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          Projects
        </motion.a>
        <motion.a
          className="link"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          Contact
        </motion.a> */}
        <motion.a
          className="link"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          href="https://drive.google.com/file/d/1rz5DnJ8CQVcqWa9beN0liaQJ4SRxVIMU/view?usp=sharing"
          target="blank"
        >
          Resume
        </motion.a>
        <motion.a
          className="link"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1 }}
          href="https://www.linkedin.com/in/sai-vamsi-allada-b2751b237/"
          target="blank"
        >
          <LinkedInIcon />
        </motion.a>
        <motion.a
          className="link"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.5 }}
          href="https://github.com/alladasaivamsi"
          target="blank"
        >
          <GitHubIcon />
        </motion.a>
        {!modeColor ? (
          <motion.span
            className="link"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 2 }}
          >
            <DarkModeIcon onClick={() => changeMode()} />
          </motion.span>
        ) : (
          <motion.span
            className="link"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 2 }}
          >
            <LightModeIcon onClick={() => changeMode()} />
          </motion.span>
        )}
      </div>
      <div className="mobile-drawer">
        <span className="links">
          {!open ? (
            <div className="link">
              <DehazeIcon onClick={() => setOpen(!open)} />
            </div>
          ) : (
            <div className="link">
              <CloseIcon onClick={() => setOpen(!open)} />
              <div className="drawer-div">
                <div className="drawer-links"> </div>
                <div className="drawer-anchor">
                  <a
                    className="link"
                    href="https://drive.google.com/file/d/1rz5DnJ8CQVcqWa9beN0liaQJ4SRxVIMU/view?usp=sharing"
                    target="blank"
                  >
                    Resume
                  </a>
                  <a
                    className="link"
                    href="https://www.linkedin.com/in/sai-vamsi-allada-b2751b237/"
                    target="blank"
                  >
                    <LinkedInIcon />
                  </a>
                  <a
                    className="link"
                    href="https://github.com/alladasaivamsi"
                    target="blank"
                  >
                    <GitHubIcon />
                  </a>
                  {!modeColor ? (
                    <span className="link">
                      <DarkModeIcon onClick={() => changeMode()} />
                    </span>
                  ) : (
                    <span className="link">
                      <LightModeIcon onClick={() => changeMode()} />
                    </span>
                  )}
                </div>
              </div>
            </div>
          )}
        </span>
      </div>
    </div>
  );
};

export default Navbar;
