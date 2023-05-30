/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import instaIcon from "../assets/img/instagram-circle.svg";
import heartIcon from "../assets/img/github-icon.svg";

export default function Footer({ imgLink }) {
  const exportHandler = (e) => {
    e.preventDefault()
    console.log(imgLink);
    const lnk = document.createElement("a");
    lnk.download = imgLink;
    lnk.click();
  };

  return (
    <footer>
      <div className="container flex-box">
        <div className="card">
          <h1 className="card-header">About</h1>
          <p>
            Simple, intuitive & free to use! Made by{" "}
            <a href="https://github.com/alerrad">@Alerrad</a>
          </p>
        </div>
        <div className="card">
          <h1 className="card-header">Export</h1>
          <div className="flex-box">
            <button>X1</button>
            <button>PNG</button>
          </div>
          <button id="export-btn" onClick={exportHandler}>
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
  );
}
