import axios from "axios";
const COURSES_URL = "https://kanbas-node-server-app-mrfv.onrender.com/api/courses";
export const findAssignmentsForCourse = async (courseId) => {
  const response = await axios
    .get(`${COURSES_URL}/${courseId}/assignments`);
  return response.data;
};
