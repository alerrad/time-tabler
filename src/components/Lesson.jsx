/* eslint-disable react/prop-types */
import html2canvas from "html2canvas";

import trashIcon from '../assets/img/trash-delete-bin.svg';

export default function Lesson(props) {
  const deleteLesson = () => {
    alert("Lesson deleted!");
  };

  return (
    <div className="box" style={{ background: props.status }}>
      <div className="cover">
        <img src={trashIcon} alt="delete" onClick={() => {alert(props.id)}}/>
      </div>
      <div className="content">
        <h2>{props.title}</h2>
        <p>{props.timeStamp}</p>
        <p>{props.room}</p>
      </div>
    </div>
  );
}
