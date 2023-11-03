import React, { useState } from "react";
import { useParams } from "react-router-dom";
import db from "../../Database";
import { useSelector, useDispatch } from "react-redux";
import {
  addModule,
  deleteModule,
  updateModule,
  setModule,
} from "./modulesReducer";

function ModuleList() {
  const { courseId } = useParams();
  const modules = useSelector((state) => state.modulesReducer.modules);
  const module = useSelector((state) => state.modulesReducer.module);
  const dispatch = useDispatch();
  return (
    <ul className="list-group">
        <li className="list-group-item">
        <button class="btn btn-success float-end" 
          onClick={() => dispatch(addModule({ ...module, course: courseId }))}>
          Add
        </button>
        <button class="btn btn-primary float-end"
          onClick={() => dispatch(updateModule(module))}>
          Update
        </button> 
        <div class="form-group" style={{ marginBottom: '10px' }}>
          <input class="w-25 form-control" value={module.name}
          onChange={(e) => dispatch(setModule({ ...module, name: e.target.value }))
          }/>
        </div>
        <div class="form-group">
        <textarea class="w-25 form-control" rows = "2" value={module.description}
          onChange={(e) => 
            dispatch(setModule({ ...module, description: e.target.value }))
        }/>
        </div>
        </li>
      {
       modules
         .filter((module) => module.course === courseId)
         .map((module, index) => (
           <li key={index} className="list-group-item">
            <button class="btn btn-success float-end"
              onClick={() => dispatch(setModule(module))}>
              Edit
            </button>
            <button class="btn btn-danger float-end"
              onClick={() => dispatch(deleteModule(module._id))}>
              Delete
            </button>
             <h3>{module.name}</h3>
             <p>{module.description}</p>
           </li>
      ))
      }
    </ul>
  );
}
export default ModuleList;