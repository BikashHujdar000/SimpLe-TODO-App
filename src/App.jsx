import AppName from "./Components/AppName";
import AddTODO from "./Components/AddTODO";
import TodoItems from "./Components/TodoItems";
import "./App.css";
import { useState } from "react";
import Welcome from "./Components/Welcome";
function App() {
  const [toDoItems, setToDoItems] = useState([]);

  const handleNewItem = (itemName, itemDate) => {
    console.log(`Item Added ${itemName} and ${itemDate}`);
    const newList = [
      ...toDoItems,
      {
        todoName: itemName,
        todoDate: itemDate,
      },
    ];
    setToDoItems(newList);
  };

  const handleDeleteItem = (todoItemName) => {
    console.log(`item deleated ${todoItemName}`);

    const newList = toDoItems.filter((item) => item.todoName !== todoItemName);
    setToDoItems(newList);
  };

  return (
    <center className="todo-caontainer">
      <AppName></AppName>
      <AddTODO onNewItem={handleNewItem}></AddTODO>
      {toDoItems.length === 0 && <Welcome></Welcome>}
      <TodoItems items={toDoItems} ondeleteClick={handleDeleteItem}></TodoItems>
    </center>
  );
}

export default App;
