import JavaScript from "./JavaScript"
import PathParameters from "./PathParameters";
import Classes from "./Classes";
import TodoList from "./todos/TodoList";

function Assignment3() {
    return (
        <div className="container">
            <h2>Assignment 3</h2>
            <TodoList />
            <Classes />
            <PathParameters />
            <JavaScript />
        </div>
    );
  }
export default Assignment3;