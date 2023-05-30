/* eslint-disable no-unused-vars */
import "./assets/styles/App.scss"

import { useState, useRef, useEffect } from "react"
import html2canvas from "html2canvas"

// Components
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import SubjectForm from "./components/SubjectForm"
import StatusForm from "./components/StatusForm"
import TimeTable from "./components/TimeTale"


export default function App () {
  const [title, setTitle] = useState("");
  const [imgLink, setImgLink] = useState("");

  
  return (
    <main>
      <Navbar/>
      <TimeTable/>
      <Footer imgLink={imgLink}/>
      <SubjectForm/>
      <StatusForm/>
    </main>
  );
}