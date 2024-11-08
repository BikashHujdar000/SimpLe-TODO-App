import PropTypes from "prop-types";
import { MdDelete } from "react-icons/md";
function TodoItem({ todoName, todoDate, ondeleteClick }) {
  return (
    <div className="container">
      <div className="row bi-row">
        <div className="col-5">{todoName}</div>
        <div className="col-5">{todoDate}</div>
        <div className="col-2 d-flex align-items-center justify-content-center">
          <button
            type="button"
            className="btn btn-danger  bi-button"
            onClick={() => ondeleteClick(todoName)}
          >
            <MdDelete />
          </button>
        </div>
      </div>
    </div>
  );
}

TodoItem.propTypes = {
  todoName: PropTypes.string.isRequired,
  todoDate: PropTypes.string.isRequired,
  ondeleteClick: PropTypes.func.isRequired,
};

export default TodoItem;
