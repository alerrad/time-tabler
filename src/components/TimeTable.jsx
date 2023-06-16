/* eslint-disable react/no-unknown-property */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { useState } from "react";

import Status from "./Status";
import Column from "./Column";
import Popup from "./Popup";

export default function TimeTable({ setImgLink }) {
  const [statuses, setStatuses] = useState([
    {
      id: Date.now(),
      name: "Offline lecture",
      color: "#1F9362",
    },
    {
      id: Date.now() + 1,
      name: "Offline practice",
      color: "#2F98B9",
    },
    {
      id: Date.now() + 2,
      name: "Online lecture",
      color: "#46DDB9",
    },
  ]);
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
  const [day, setDay] = useState("");
  const [title, setTitle] = useState("");
  const [timeStamp, setTimeStamp] = useState("");
  const [statusColor, setStatusColor] = useState("");
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
              setDay={setDay}
              week={week}
            />
          ))}
        </div>
        <div className="stats">
          <input type="text" placeholder="Title here..." id="title" required />
          <ul id="statuses">
            {statuses.map((status) => (
              <Status
                key={status.id}
                id={status.id}
                name={status.name}
                color={status.color}
                setStatuses={setStatuses}
              />
            ))}
          </ul>
        </div>
      </div>
      <Popup isVisible={isVisible} setIsVisible={setIsVisible}>
        <form
          id="pop-form"
          onSubmit={(e) => {
            e.preventDefault();
            let weekCopy = week;
            weekCopy[day].push({
              id: Date.now(),
              title: title,
              timeStamp: timeStamp,
              status: statusColor,
              room: room,
            });
            setIsVisible(false);
            setWeek(weekCopy);
            setRoom("");
            setTitle("");
            setTimeStamp("");
            setStatusColor("");
          }}
        >
          <h2>New entry</h2>
          <input
            value={title}
            onChange={(e) => {
              setTitle(e.target.value);
            }}
            type="text"
            placeholder="Subject name"
            required
          />
          <input
            value={timeStamp}
            onChange={(e) => {
              setTimeStamp(e.target.value);
            }}
            type="text"
            placeholder="hh:mm-hh:mm"
            required
          />
          <input
            value={room}
            onChange={(e) => {
              setRoom(e.target.value);
            }}
            type="text"
            placeholder="Room (optional)"
          />
          <select
            onChange={(e) => {
              setStatusColor(e.target.value);
            }}
            placeholder="status"
            required
          >
            {statuses.map((status) => (
              <option key={status.id} value={status.color}>
                {status.name}
              </option>
            ))}
          </select>
          <button id="add-lesson" type="submit">
            Add
          </button>
        </form>
      </Popup>
    </section>
  );
}
