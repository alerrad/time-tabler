/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import add_icon from "../assets/img/add-icon.svg";

import Lesson from "./Lesson";

export default function Column({dayName, lessons, setWeek, setIsVisible}) {
  const lessonHandler = () => {
    alert(dayName)
  }

  return (
    <div className="col">
      <h2 className="day-name">{dayName}</h2>
      <ul className="lessons">
        {lessons.map(lesson => (
          <Lesson key={lesson.id} lessonId={lesson.id} setWeek={setWeek}/>
        ))}</ul>
      <div className="add box" onClick={() => setIsVisible(true)}>
        <img src={add_icon} rel="add-icon" />
      </div>
    </div>
  );
}
