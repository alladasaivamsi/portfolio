import React, { useState } from "react";
import "./Contact.css";
import LocalPhoneRoundedIcon from "@mui/icons-material/LocalPhoneRounded";
import EmailRoundedIcon from "@mui/icons-material/EmailRounded";
import PersonRoundedIcon from "@mui/icons-material/PersonRounded";
import MessageRoundedIcon from "@mui/icons-material/MessageRounded";
import FmdGoodRoundedIcon from "@mui/icons-material/FmdGoodRounded";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import { motion } from "framer-motion";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { useNavigate } from "react-router-dom";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [message, setMessage] = useState("");

  //  const navigate = useNavigate();
  //  const handlePrevious = () => {
  //    navigate("/projects");
  //  };

  return (
    <div className="container">
      <div className="contact">
        <motion.h2
          className="contact-heading"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Contact Me
        </motion.h2>
        <div className="contact-data">
          <div className="information">
            <motion.span
              className="data"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
            >
              <LocalPhoneRoundedIcon /> +91 - 8897638056
            </motion.span>
            <motion.span
              className="data"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.5 }}
            >
              <EmailRoundedIcon /> alladasaivamsi@gmail.com
            </motion.span>
            <motion.span
              className="data"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 1 }}
            >
              <FmdGoodRoundedIcon /> Andhra Pradesh, India
            </motion.span>
            <motion.a
              className="data"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 1.5 }}
              href="https://www.linkedin.com/in/sai-vamsi-allada-b2751b237/"
              target="blank"
            >
              <LinkedInIcon /> Linkedin
            </motion.a>
            <motion.a
              className="data"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 2 }}
              href="https://github.com/alladasaivamsi"
              target="blank"
            >
              <GitHubIcon /> GitHub
            </motion.a>
          </div>
          <form action="https://formspree.io/f/xzblnldw" method="POST">
            <motion.div
              className="fname"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 3 }}
            >
              <label for="fname">
                <PersonRoundedIcon />
                &nbsp;Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={name}
                placeholder="Enter your Name"
                onChange={(e) => setName(e.target.value)}
              />
            </motion.div>
            <motion.div
              className="email"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 3.5 }}
            >
              <label for="email">
                <EmailRoundedIcon />
                &nbsp;Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={email}
                placeholder="Enter your Email"
                onChange={(e) => setEmail(e.target.value)}
              />
            </motion.div>
            <motion.div
              className="mobile"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 4 }}
            >
              <label for="mobile">
                <LocalPhoneRoundedIcon />
                &nbsp;Mobile
              </label>
              <input
                type="number"
                id="mobile"
                name="mobile"
                value={mobile}
                placeholder="Enter your Mobile Number"
                onChange={(e) => setMobile(e.target.value)}
              />
            </motion.div>
            <motion.div
              className="message"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 4.5 }}
            >
              <label for="message">
                <MessageRoundedIcon />
                &nbsp;Message
              </label>
              <textarea
                type="message"
                id="message"
                name="message"
                value={message}
                placeholder="Message"
                onChange={(e) => setMessage(e.target.value)}
              />
            </motion.div>
            <motion.button
              type="button"
              className="sendBtn"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 5 }}
            >
              Send Message
            </motion.button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
