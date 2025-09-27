function Task({ name, date, onDelete }) {
  const task = "buy milk";
  return (
    <>
      <div className="container">
        <div className="row kg-row">
          <div className="col-6 items-container font-bold text-md   pt-1">
            {name}
          </div>
          <div className="col-4 items-container font-bold text-md   pt-1">
            {date}
          </div>
          <div className="col-2">
            <button
              type="button"
              className="btn btn-danger"
              onClick={() => onDelete(name)}
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
export default Task;
