import "./assets/styles/App.scss";
import { useState } from "react";
import logo from "./assets/img/Logo full.png";
import instaIcon from "./assets/img/instagram-circle.svg";
import heartIcon from "./assets/img/github-icon.svg";
import html2canvas from "html2canvas";


const App = () => {
  const [monday, setMonday] = useState([]);
  const [tuesday, setTuesday] = useState([]);
  const [wednesday, setWednesday] = useState([]);
  const [thursday, setThursday] = useState([]);
  const [friday, setFriday] = useState([]);
  const [saturday, setSaturday] = useState([]);

  return (
    <main>
      <nav>
        <img src={logo} alt="logo" id="logo" />
      </nav>
      <section id="timetable"></section>
      <footer>
        <div className="container flex-box">
          <div className="card">
            <h1 className="card-header">About</h1>
            <p>
              Simple, intuitive & free to use! Made by <a href="https://github.com/alerrad">@Alerrad</a>
            </p>
          </div>
          <div className="card">
            <h1 className="card-header">Export</h1>
            <div className="flex-box">
              <button>X1</button>
              <button>PNG</button>
            </div>
            <button
              id="export-btn"
              onClick={() => {
                const timeTable = document.getElementById("timetable");
                html2canvas(timeTable, {logging: false}).then(time_table => {
                  const url = time_table.toDataURL();
                  alert(url);
                })
              }}
            >
              Export
            </button>
          </div>
          <div className="card">
            <h1 className="card-header">Support</h1>
            <p>Simply liking my repository is more than enough)</p>
            <div className="flex-box" id="media-links">
              <a
                href="https://github.com/alerrad/time-tabler"
                target="_blank"
                rel="noreferrer"
              >
                <img src={heartIcon} rel="github-icon" />
              </a>
              <a
                href="https://instagram.com/alerrad"
                target="_blank"
                rel="noreferrer"
              >
                <img src={instaIcon} rel="insta-icon" />
              </a>
            </div>
          </div>
        </div>
      </footer>
      <section className="hidden" id="pop-form-back"></section>
      <div className="hidden" id="pop-form">
        <div id="close"></div>
        <form action=""></form>
      </div>
      <div className="hidden" id="color-form"></div>
    </main>
  );
};

export default App;
