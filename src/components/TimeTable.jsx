/* eslint-disable react/no-unknown-property */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { useState } from "react";

import Status from "./Status";
import Column from "./Column";
import Popup from "./Popup";


export default function TimeTable({ setImgLink }) {
  const [statuses, setStatuses] = useState([]);
  const [isVisible, setIsVisible] = useState(false);
  const [week, setWeek] = useState({
    mon: [],
    tue: [],
    wed: [],
    thu: [],
    fri: [],
    sat: [],
  });

  // Form states
  const [title, setTitle] = useState("");
  const [timeStamp, setTimeStamp] = useState("");
  const [status, setStatus] = useState("");
  const [room, setRoom] = useState("");

  return (
    <section id="timetable">
      <div className="flex-box">
        <div className="subjects flex-box">
          {Object.entries(week).map(([day, lessons]) => (
            <Column
              key={day}
              dayName={day}
              lessons={lessons}
              setWeek={setWeek}
              setIsVisible={setIsVisible}
            />
          ))}
        </div>
        <div className="stats">
          <input type="text" placeholder="Title here..." id="title" required />
          <ul id="statuses">
            {statuses.map((status) => (
              <Status key={status.id} setStatuses={setStatuses} />
            ))}
          </ul>
        </div>
      </div>
      <Popup isVisible={isVisible} setIsVisible={setIsVisible}>
        <form id="pop-form">
          <h2>New entry</h2>
          <input type="text" placeholder="Subject name" />
          <input type="text" placeholder="Time stamp" />
          <input type="text" placeholder="Room (optional)" />
          <select placeholder="status">
            {statuses.map((status) => (
              <select key={status.id}>{status.name}</select>
            ))}
          </select>
          <button id="add-lesson" type="submit">Add</button>
        </form>
      </Popup>
    </section>
  );
}
