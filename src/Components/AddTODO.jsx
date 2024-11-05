function AddTODO() {
  return (
    <div className="container text-center">
      <div className="row bi-row">
        <div className="col-5">
          <input
            type="text"
            placeholder="Enter todo here"
            className="form-control"
          />
        </div>
        <div className="col-5">
          <input type="date" className="form-control" />
        </div>
        <div className="col-2 d-flex align-items-center justify-content-center">
          <button type="button" className="btn btn-success  bi-button">
            Add
          </button>
        </div>
      </div>
    </div>
  );
}
export default AddTODO;
