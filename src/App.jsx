import "./style/style.css";
import ".//App.css";
import "animate.css";
import Home from "./components/Home";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import { useState, createContext } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Toggle from "./components/toggle/Toggle";


export const ThemeContext = createContext("light");


function App() {
  const [selected, setSelected] = useState("");
  const [theme, setTheme] = useState("dark");
  const [toggled, setToggled] = useState(true);

  const navBarClick = (page) => {
    if (selected !== page) {
      setSelected(page);
    }
  };

  const toggleTheme = () => {
    setTheme(current => (current === "dark" ? "light" : "dark"));
    setToggled(!toggled)
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <div className='App' id={theme}>

        <Router>
          <header>
            <nav className="navbar-container animate__animated animate__bounceInDown">
              <Link className="logo" to="/">K-RAYA</Link>
              <div className="toggle-switch">



                <ul className="nav-list">
                  <li className={selected === "home" ? "selected animate__animated animate__tada" : ""} onClick={() => navBarClick("home")}>
                    <Link to="/" className="home-link" > Home </Link>
                  </li>
                  <li className={selected === "projects" ? "selected animate__animated animate__tada" : ""} onClick={() => navBarClick("projects")}>
                    <Link to="/projects" className="projects-link"> Projects </Link>
                  </li>
                  <li className={selected === "contact" ? "selected animate__animated animate__tada" : ""} onClick={() => navBarClick("contact")}>
                    <Link to="/contact" className="contact-link"> Contact </Link>
                  </li><Toggle toggled={toggled} onClick={toggleTheme} />
                </ul>
              </div>

            </nav>
          </header>

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>

        </Router >

      </div>
    </ThemeContext.Provider>
  );
}

export default App;
