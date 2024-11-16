import AppName from "./Components/AppName";
import AddTODO from "./Components/AddTODO";
import TodoItems from "./Components/TodoItems";
import "./App.css";
import { useState } from "react";
import Welcome from "./Components/Welcome";
import { TodoItemsContext } from "./store/todoiItemsStore";
function App() {
  const [toDoItems, setToDoItems] = useState([]);

  const addNewItem = (itemName, itemDate) => {
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

  const deleteItem = (todoItemName) => {
    console.log(`item deleated ${todoItemName}`);

    const newList = toDoItems.filter((item) => item.todoName !== todoItemName);
    setToDoItems(newList);
  };

  return (
    <TodoItemsContext.Provider
      value={{
        items: toDoItems,
        addNewItem: addNewItem,
        deleteItem: deleteItem,
      }}
    >
      <center className="todo-caontainer">
        <AppName></AppName>
        <AddTODO></AddTODO>
        {<Welcome></Welcome>}
        <TodoItems items={toDoItems}></TodoItems>
      </center>
    </TodoItemsContext.Provider>
  );
}

export default App;
