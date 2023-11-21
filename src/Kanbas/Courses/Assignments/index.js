import AssignmentList from "./AssignmentList";
import AssignmentEditor from "./AssignmentEditor";
import { Link } from "react-router-dom";
function Assignments() {
  return (
    <div>
      <button class="btn btn-light float-end">︙</button>
      <Link to="/Assignments/AssignmentEditor/index.js">
      <button class="btn btn-danger float-end">+ Assignment</button>
      </Link>
      <button class="btn btn-light float-end">+ Group</button>
      <input
        class="form-control w-25"
        type="text"
        id="search"
        placeholder="Search for Assignment"
      ></input>
      <hr />
      <AssignmentList />
    </div>
  );
}
export default Assignments;
