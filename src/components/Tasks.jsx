import Task from "./Task.jsx";
const Tasks = ({ todoItems, onDeleteClick }) => {
  return (
    <div className="items-container">
      {todoItems.map((item) => (
        <Task
          key={item.name}
          name={item.name}
          date={item.date}
          onDelete={onDeleteClick}
        />
      ))}
    </div>
  );
};

export default Tasks;
