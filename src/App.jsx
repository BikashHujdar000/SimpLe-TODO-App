import AppName from "./Components/AppName";
import TodoItem from "./Components/TodoItem";
import AddTODO from "./Components/AddTODO";
import "./App.css";
function App() {
  return (
    <center className="todo-caontainer">
      <AppName></AppName>

      <AddTODO></AddTODO>

      <div className="item-container">
        <TodoItem></TodoItem>
        <TodoItem></TodoItem>
        <TodoItem></TodoItem>
      </div>
    </center>
  );
}

export default App;
