/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import add_icon from "../assets/img/add-icon.svg";

import Lesson from "./Lesson";

export default function Column({
  dayName,
  lessons,
  setWeek,
  setIsVisible,
  setDay,
}) {
  return (
    <div className="col">
      <h2 className="day-name">{dayName}</h2>
      <ul className="lessons">
        {lessons.map((lesson) => (
          <Lesson
            key={lesson.id}
            lessonId={lesson.id}
            setWeek={setWeek}
            title={lesson.title}
            status={lesson.status}
            timeStamp={lesson.timeStamp}
            room={lesson.room}/>
        ))}
      </ul>
      <div
        className="add box"
        onClick={() => {
          setIsVisible(true);
          setDay(dayName);
        }}
      >
        <img src={add_icon} rel="add-icon" />
      </div>
    </div>
  );
}
