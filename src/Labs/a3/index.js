import JavaScript from "./JavaScript"
import PathParameters from "./PathParameters";
import Classes from "./Classes";
import TodoList from "./todos/TodoList";
import { useSelector } from "react-redux";

function Assignment3() {
    const { todos } = useSelector((state) => state.todosReducer);
    return (
        <div className="container">
            <h2>Assignment 3</h2>
            <ul className="list-group">
                {todos.map((todo) => (
                 <li className="list-group-item" key={todo.id}>
                    {todo.title}
                </li>
        ))}
      </ul>
            <TodoList />
            <Classes />
            <PathParameters />
            <JavaScript />
        </div>
    );
  }
export default Assignment3;