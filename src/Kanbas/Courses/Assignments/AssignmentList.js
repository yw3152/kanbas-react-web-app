import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import React, { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import {
  addAssignment, deleteAssignment, updateAssignment, selectAssignment,
  setAssignments,
} from "./assignmentsReducer";
import { findAssignmentsForCourse } from "./client";
function AssignmentList() {
  const { courseId } = useParams();
  useEffect(() => {
    findAssignmentsForCourse(courseId)
      .then((assignments) =>
        dispatch(setAssignments(assignments))
    );
  }, [courseId]);
  const assignments = useSelector((state) => state.assignmentsReducer.assignments);
  const assignment = useSelector((state) => state.assignmentsReducer.assignment);
  const dispatch = useDispatch();
  return (
    <div>
    <h2>Assignments for course {courseId}</h2>
    <div className="list-group">
      {assignments.map((assignment) => (
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
export default AssignmentList;