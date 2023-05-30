/* eslint-disable no-unused-vars */
import html2canvas from "html2canvas";

import Subject from "./Subject";
import Status from "./Status";

import add_icon from "../assets/img/add-icon.svg";


export default function TimeTable() {
  const subjectHandler = () => {};

  return (
    <section id="timetable">
      <div className="flex-box">
        <div className="subjects flex-box">
          <div className="col">
            <h2 className="day-name">Mon</h2>
            <ul className="lessons"></ul>
            <div className="add box">
              <img src={add_icon} rel="add-icon" />
            </div>
          </div>
          <div className="col">
            <h2 className="day-name">Tue</h2>
            <ul className="lessons"></ul>
            <div className="add box">
              <img src={add_icon} rel="add-icon" />
            </div>
          </div>
          <div className="col">
            <h2 className="day-name">Wed</h2>
            <ul className="lessons"></ul>
            <div className="add box">
              <img src={add_icon} rel="add-icon" />
            </div>
          </div>
          <div className="col">
            <h2 className="day-name">Thu</h2>
            <ul className="lessons"></ul>
            <div className="add box">
              <img src={add_icon} rel="add-icon" />
            </div>
          </div>
          <div className="col">
            <h2 className="day-name">Fri</h2>
            <ul className="lessons"></ul>
            <div className="add box">
              <img src={add_icon} rel="add-icon" />
            </div>
          </div>
          <div className="col">
            <h2 className="day-name">Sat</h2>
            <ul className="lessons"></ul>
            <div className="add box">
              <img src={add_icon} rel="add-icon" />
            </div>
          </div>
        </div>
        <div className="stats">
          <input type="text" placeholder="Title here..." id="title" required />
          <ul id="statuses"></ul>
        </div>
      </div>
    </section>
  );
}
