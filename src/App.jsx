/* eslint-disable no-unused-vars */
import "./assets/styles/App.scss"

import { useState, useRef, useEffect } from "react"

// Components
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import LessonForm from "./components/LessonForm"
import StatusForm from "./components/StatusForm"
import TimeTable from "./components/TimeTable"


export default function App () {
  const [week, setWeek] = useState({
    mon: [],
    tue: [],
    wed: [],
    thu: [],
    fri: [],
    sat: []
  });
  const [statuses, setStatuses] = useState([]);
  const [imgLink, setImgLink] = useState("");

  
  return (
    <main>
      <Navbar/>
      <TimeTable
        week={week}
        setWeek={setWeek}
        statuses={statuses}
        setImgLink={setImgLink}
        setStatuses={setStatuses}
      />
      <Footer
        imgLink={imgLink}
      />
      <LessonForm/>
      <StatusForm/>
    </main>
  );
}