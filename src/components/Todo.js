import React, { useEffect, useContext, useState } from "react";
import TodoForm from "./todoComponents/TodoForm";
import TodoItems from "./todoComponents/TodoItems";
import TaskContext from "../context/taskContext";
import Spinner from "./spinner/Spinner";

const Todo = () => {
  //initial component state to store completed and uncomplete tasks
  const [complete, setComplete] = useState([]);
  const [unComplete, setUnComplete] = useState([]);
  // context init
  const taskContext = useContext(TaskContext);
  const {
    fetchTasks,
    loading,
    updateInput,
    updateInputId,
    tasks,
    addTask,
    deleteTask,
    updateTask,
    completeTask,
    unCompleteTask,
    setUpdateInput,
  } = taskContext;

  useEffect(() => {
    //calling fetch products on every render
    fetchTasks();
    if (tasks) {
      // assigining completed task to a new array and sorting them based on completion timestamps
      setComplete(
        tasks
          .filter((item) => item.completed_at)
          .sort((a, b) => a.completed_at - b.completed_at)
      );

      // assigining uncompleted task to a new array and sorting them based on creation timestamps
      setUnComplete(
        tasks
          .filter((item) => !item.completed_at)
          .sort((a, b) => a.created_at - b.created_at)
          .reverse()
      );
    }

    // eslint-disable-next-line
  }, [loading, complete, unComplete]);

  return (
    <section className="container">
      <TodoForm
        addTask={addTask}
        updateInput={updateInput}
        updateInputId={updateInputId}
        updateTask={updateTask}
      />

      {tasks.length === 0 ? (
        <div className="todo-wrapper"></div>
      ) : tasks.length > 0 && !loading ? (
        <div className="todo-wrapper">
          {unComplete.map((task) => (
            <TodoItems
              task={task}
              deleteTask={deleteTask}
              key={task.id}
              setUpdateInput={setUpdateInput}
              completeTask={completeTask}
              unCompleteTask={unCompleteTask}
            />
          ))}
          {complete.map((task) => (
            <TodoItems
              task={task}
              deleteTask={deleteTask}
              key={task.id}
              setUpdateInput={setUpdateInput}
              completeTask={completeTask}
              unCompleteTask={unCompleteTask}
            />
          ))}
        </div>
      ) : (
        <div className="todo-wrapper">
          <Spinner />
        </div>
      )}
    </section>
  );
};

export default Todo;
