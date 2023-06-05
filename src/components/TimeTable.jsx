/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import Status from "./Status";
import Column from "./Column";


export default function TimeTable({ week, setWeek, statuses, setStatuses }) {
  return (
    <section id="timetable">
      <div className="flex-box">
        <div className="subjects flex-box">
          {Object.entries(week).map(([day, lessons]) => (
            <Column key={day} dayName={day} lessons={lessons} setWeek={setWeek}/>
          ))}
        </div>
        <div className="stats">
          <input type="text" placeholder="Title here..." id="title" required />
          <ul id="statuses">
            {statuses.map(status => (
              <Status key={status.id} setStatuses={setStatuses}/>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}