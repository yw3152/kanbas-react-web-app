import db from "../Database";
import { Link } from "react-router-dom";
import p from "./react.png";
import "./index.css";

function Dashboard() {
  const courses = db.courses;
  return (
    <div class="wd-dashboard">
      <h1>Dashboard</h1>
      <hr />
      <div class="container">
      <h2>Published Courses ({courses.length})</h2>
      <hr />
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
                        </Link>
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