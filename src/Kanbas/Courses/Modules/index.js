import ModuleList from "./ModuleList";

function Modules() {
  return (
    <div>
      <button>Collapse All</button>
      <button>View Progress</button>
      <select>
        <option>Publish All</option>
        <option>Publish all modules and items</option>
        <option>Publish modules only</option>
        <option>Unpublish all modules and items</option>
      </select>
      <button>+Module</button>
      <h2>Modules</h2>
      <ModuleList />
    </div>
  );
}
export default Modules;
