import TodoItem from "./TodoItem";
import PropTypes from "prop-types";
function TodoItems({ items, ondeleteClick }) {
  return (
    <>
      <div className="item-container">
        {items.map((item, index) => (
          <TodoItem
            key={index}
            todoName={item.todoName}
            todoDate={item.todoDate}
            ondeleteClick={ondeleteClick}
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
