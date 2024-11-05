function TodoItem() {
  let todoName = "Milk";
  let todoDate = "01/12/2024";

  return (
    <div className="container">
      <div className="row bi-row">
        <div className="col-5">{todoName}</div>
        <div className="col-5">{todoDate}</div>
        <div className="col-2 d-flex align-items-center justify-content-center">
          <button type="button" className="btn btn-danger  bi-button">
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}
export default TodoItem;
