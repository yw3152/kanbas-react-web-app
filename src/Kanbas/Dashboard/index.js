import db from "../Database";
import { Link } from "react-router-dom";
import p from "./react.png";
import "./index.css";
import { React, useState } from "react";

function Dashboard({ courses, course, setCourse, addNewCourse,
  deleteCourse, updateCourse }) {
  return (
    <div class="wd-dashboard">
      <h1>Dashboard</h1>
      <hr />    
      <div>
      <h2>Published Courses ({courses.length})</h2>
      <hr />
      <div>
      <input value={course.name} className="form-control"
             onChange={(e) => setCourse({ ...course, name: e.target.value }) } />
      <input value={course.number} className="form-control"
             onChange={(e) => setCourse({ ...course, number: e.target.value }) } />
      <input value={course.startDate} className="form-control" type="date"
             onChange={(e) => setCourse({ ...course, startDate: e.target.value }) }/>
      <input value={course.endDate} className="form-control" type="date"
             onChange={(e) => setCourse({ ...course, endDate: e.target.value }) } />
      <br />
      <button class="btn btn-success" onClick={addNewCourse} >
        Add
      </button>
      <button class="btn btn-primary" onClick={updateCourse} >
        Update
      </button>
      </div><br />
      <br />
      </div>
      <div class="row row-cols-1 row-cols-md-3 g-4 wd-dashboard-grid">
        <div className="col">
          {courses.map((course, index) => (
            <div class="col">
                <div class ="card">
                    <img src={p} class="card-img-top" alt="..." />
                    <div class="card-body">
                        <h5 class="card-title">{course.name}</h5>
                        <Link
                            key={course._id}
                            to={`/Kanbas/Courses/${course._id}`}
                            className="btn btn-primary"
                        >
                        {course.name}
                        </Link><br />
                        <br />
                        <button class="btn btn-warning"
                              onClick={(event) => {
                              event.preventDefault();
                              setCourse(course);
                           }}>
                            Edit
                          </button>
                          <button class="btn btn-danger"
                              onClick={(event) => {
                              event.preventDefault();
                              deleteCourse(course._id);
                          }}>
                            Delete
                          </button>
                        <p class="card-text">
                            This is a course.
                        </p>
                    </div>
                </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
export default Dashboard;