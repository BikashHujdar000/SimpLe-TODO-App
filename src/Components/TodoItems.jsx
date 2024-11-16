import { useContext } from "react";
import TodoItem from "./TodoItem";
import PropTypes from "prop-types";
import { TodoItemsContext } from "../store/todoiItemsStore";
function TodoItems() {
  const { items, deleteItem } = useContext(TodoItemsContext);
  console.log(items);

  return (
    <>
      <div className="item-container">
        {items.map((item, index) => (
          <TodoItem
            key={index}
            todoName={item.todoName}
            todoDate={item.todoDate}
            ondeleteClick={deleteItem}
          ></TodoItem>
        ))}
      </div>
    </>
  );
}

TodoItems.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      todoName: PropTypes.string.isRequired,
      todoDate: PropTypes.string.isRequired,
    })
  ).isRequired,
  ondeleteClick: PropTypes.func.isRequired,
};

export default TodoItems;
