/* eslint-disable no-unused-vars */
import "./assets/styles/App.scss";

import { useState, useEffect } from "react";

// Components
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import TimeTable from "./components/TimeTable";


export default function App() {
  const [imgLink, setImgLink] = useState("");

  return (
    <main>
      <Navbar />
      <TimeTable setImgLink={setImgLink} />
      <Footer imgLink={imgLink} />
    </main>
  );
}
