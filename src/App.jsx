import "./style/style.css";
import ".//App.css";
import "animate.css";
import Home from "./components/Home";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function App() {
  const [selected, setSelected] = useState("");

  const handleClick = (page) => {
    if (selected !== page) {
      setSelected(page);
    }
  }

  return (
    <Router>
      <header>
        <nav className="navbar-container animate__animated animate__bounceInDown">
          <div className="">
            <Link className="logo" to="/">K-RAYA</Link>
          </div>
          <ul className="nav-list-container">
            <li className={selected === "home" ? "selected animate__animated animate__tada" : ""} onClick={() => handleClick("home")}>
              <Link to="/" className="home-link" > Home </Link>
            </li>
            <li className={selected === "projects" ? "selected animate__animated animate__tada" : ""} onClick={() => handleClick("projects")}>
              <Link to="/projects" className="projects-link"> Projects </Link>
            </li>
            <li className={selected === "contact" ? "selected animate__animated animate__tada" : ""} onClick={() => handleClick("contact")}>
              <Link to="/contact" className="contact-link"> Contact </Link>
            </li>
          </ul>
        </nav>
      </header>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>

    </Router >
  );
}

export default App;
