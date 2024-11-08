import PropTypes from "prop-types";
import { useState } from "react";
import { IoAddCircleSharp } from "react-icons/io5";

function AddTODO({ onNewItem }) {
  const [todoName, setTodoName] = useState("");

  const [todoDate, setTodoDate] = useState("");

  const handleNameChange = (event) => {
    setTodoName(event.target.value);
  };

  const handleDateChange = (event) => {
    setTodoDate(event.target.value);
  };

  const handleAddClick = () => {
    onNewItem(todoName, todoDate);
    setTodoDate("");
    setTodoName("");
  };

  return (
    <div className="container text-center">
      <div className="row bi-row">
        <div className="col-5">
          <input
            type="text"
            placeholder="Enter todo here"
            value={todoName}
            className="form-control"
            onChange={handleNameChange}
          />
        </div>
        <div className="col-5">
          <input
            type="date"
            value={todoDate}
            className="form-control"
            onChange={handleDateChange}
          />
        </div>
        <div className="col-2 d-flex align-items-center justify-content-center">
          <button
            type="button"
            className="btn btn-success  bi-button"
            onClick={handleAddClick}
          >
            <IoAddCircleSharp />
          </button>
        </div>
      </div>
    </div>
  );
}

AddTODO.propTypes = {
  onNewItem: PropTypes.func.isRequired,
};
export default AddTODO;
