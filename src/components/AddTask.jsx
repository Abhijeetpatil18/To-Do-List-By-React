import { useState } from "react";

function AddTask({ onNewItem }) {
  const [TodoName, setTodoName] = useState("");
  const [Tododate, setTododate] = useState("");

  const handleNameChange = (event) => {
    setTodoName(event.target.value);
  };
  const handleDateChange = (event) => {
    setTododate(event.target.value);
  };
  const handleAddButtonClicked = () => {
    onNewItem(TodoName, Tododate);
    setTodoName("");
    setTododate("");
  };
  return (
    <>
      <div className="container text-center">
        <div className="row kg-row">
          <div className="col-6">
            <input
              type="text"
              className="border-1"
              placeholder="Enter to-do here"
              value={TodoName}
              onChange={handleNameChange}
            />
          </div>
          <div className="col-4">
            <input
              type="date"
              className="border-1"
              onChange={handleDateChange}
            />
          </div>
          <div className="col-2 text-left px-6">
            <button
              type="button"
              value={Tododate}
              onClick={handleAddButtonClicked}
              className="btn btn-success"
            >
              Add
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
export default AddTask;
