/* eslint-disable react/prop-types */
import html2canvas from "html2canvas";

import trashIcon from "../assets/img/trash-delete-bin.svg";

export default function Lesson(props) {
  const parseHours = (timeStamp) => {
    // get hours
    let hh1 = parseInt(timeStamp[0] + timeStamp[1]);
    let hh2 = parseInt(timeStamp[6] + timeStamp[7]);

    // get minutes
    let mm1 = parseInt(timeStamp[3] + timeStamp[4]);
    let mm2 = parseInt(timeStamp[9] + timeStamp[10]);

    let hours = Math.ceil((hh2 * 60 + mm2 - (hh1 * 60 + mm1)) / 60);

    return hours;
  };

  const hours = parseHours(props.timeStamp);

  return (
    <div
      className="box"
      style={{
        background: props.status,
        height: `${120 * hours + (hours * 10 - 10)}px`,
      }}
    >
      <div className="cover" style={{ background: props.status }}>
        <img
          src={trashIcon}
          alt="delete"
          onClick={() => {
            console.log(`${props.dayName} ${props.id}`);//DEBUG
            let week = props.week;
            week[props.dayName].filter((lesson) => lesson.id !== props.id);
            props.setWeek(week);
          }}
        />
      </div>
      <div className="content">
        <h2>{props.title}</h2>
        <p>{props.timeStamp}</p>
        <p>{props.room}</p>
      </div>
    </div>
  );
}
