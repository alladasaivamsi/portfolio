import "./App.css";
import Home from "./Components/Home/Home";
import About from "./Components/About/About";
import Projects from "./Components/Projects/Projects";
import Navbar from "./Components/Navbar/Navbar";
import Contact from "./Components/Contact/Contact";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useEffect } from "react";

function App() {
  var cursor;
  var cursorPointer;
  useEffect(() => {
    cursor = document.getElementById("cursor");
    cursorPointer = document.getElementById("cursor-pointer");
    document.body.addEventListener("mousemove", function (e) {
      return (
        (cursor.style.left = e.clientX + "px"),
        (cursor.style.top = e.clientY + "px"),
        (cursorPointer.style.left = e.clientX + "px"),
        (cursorPointer.style.top = e.clientY + "px")
      );
    });
  }, []);

  return (
    <div className="App">
      <div className="cursor" id="cursor" />
      <div className="cursor-pointer" id="cursor-pointer" />
      <Router>
        <Navbar />

        {/* <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Routes> */}
      </Router>
      <Home />
      <About />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
