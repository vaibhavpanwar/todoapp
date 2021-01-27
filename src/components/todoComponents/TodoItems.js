import React from "react";

const TodoItems = ({
  task,
  deleteTask,
  setUpdateInput,
  completeTask,
  unCompleteTask,
}) => {
  // handle complete and incomplete  task

  const handleCheckbox = (e) => {
    e.preventDefault();

    // checking if task is already completed
    if (e.target.checked) {
      completeTask(task.id);
      console.log("check");
    } else {
      unCompleteTask(task.id);
      console.log("unechedld");
    }
  };

  return (
    <div className="todo-items">
      <input
        type="checkbox"
        onChange={handleCheckbox}
        checked={task.completed_at}
      />
      <i
        className="fa fa-check check-icon"
        id={`${task.completed_at ? "icon-visible" : null}`}
      ></i>
      <p
        className={`${task.completed_at ? "completed" : ""} `}
        onClick={() => setUpdateInput(task.id, task.description)}
      >
        {/* to get first letter capital */}
        {task.description.charAt(0).toUpperCase() +
          task.description.slice(1).toLowerCase()}
      </p>
      <i
        className="fa fa-trash trash-icon"
        onClick={() => deleteTask(task.id)}
      ></i>
    </div>
  );
};

export default TodoItems;
