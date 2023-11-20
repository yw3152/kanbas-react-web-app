import React from "react";
import { Link, useParams } from "react-router-dom";
import db from "../../Database";


function Assignments() {
  const { courseId } = useParams();
  const assignments = db.assignments;
  const courseAssignments = assignments.filter(
    (assignment) => assignment.course === courseId);
  return (
    <div>
      <input type="text" class="form-control w-25" id="search" placeholder="Search for Assignment"></input>
      <div class="float-end d-inline">
        <button class="btn btn-light">+ Group</button>
        <button class="btn btn-danger">+ Assignment</button>
        <button class="btn btn-light">︙</button>
      </div>
      <hr />
      <h2>Assignments for course {courseId}</h2>
      <div className="list-group">
        {courseAssignments.map((assignment) => (
          <Link
            key={assignment._id}
            to={`/Kanbas/Courses/${courseId}/Assignments/${assignment._id}`}
            className="list-group-item">
            {assignment.title}
          </Link>
        ))}
      </div>
    </div>
  );
}
export default Assignments;