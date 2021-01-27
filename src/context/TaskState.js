import React, { useReducer } from "react";
import axios from "axios";
import TaskContext from "./taskContext";
import taskReducer from "./taskReducer";
import {
  FETCH_TASKS,
  ADD_TASK,
  UPDATE_TASK,
  DELETE_TASK,
  COMPLETE_TASK,
  UNCOMPLETE_TASK,
  UPDATE_INPUT,
  FAIL,
} from "./types";

const TaskState = (props) => {
  //declaring initial state
  const initialState = {
    loading: true,
    tasks: [],
    error: null,
    updateInput: "",
    updateInputId: null,
  };

  //basic initialisation
  const [state, dispatch] = useReducer(taskReducer, initialState);

  // to fetch tasks from api
  const fetchTasks = async (userId = 2) => {
    try {
      const res = await axios.get(
        `https://tiny-list.herokuapp.com/api/v1/users/${userId}/tasks`
      );

      dispatch({
        type: FETCH_TASKS,
        payload: res.data,
      });
    } catch (err) {
      dispatch({
        type: FAIL,
        payload: "SOMETHING WENT WRONG",
      });
    }
  };

  //to add task ||api call
  const addTask = async (taskDescription) => {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    const formData = {
      task: {
        description: taskDescription,
      },
    };

    try {
      const res = await axios.post(
        "https://tiny-list.herokuapp.com/api/v1/users/2/tasks",
        formData,
        config
      );

      dispatch({
        type: ADD_TASK,
        payload: res.data,
      });
    } catch (err) {
      dispatch({
        type: FAIL,
        payload: "Something went wrong",
      });
    }
  };

  // to delete task from server
  const deleteTask = async (id) => {
    try {
      const res = await axios.delete(
        `https://tiny-list.herokuapp.com/api/v1/users/2/tasks/${id}`
      );

      dispatch({
        type: DELETE_TASK,
      });
    } catch (err) {
      dispatch({
        type: FAIL,
        payload: "something went wrong",
      });
    }
  };

  // to update task from server
  const updateTask = async (taskId, desc) => {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    const formData = {
      task: {
        description: desc,
      },
    };

    try {
      const res = await axios.put(
        `https://tiny-list.herokuapp.com/api/v1/users/2/tasks/${taskId}`,
        formData,
        config
      );

      dispatch({
        type: UPDATE_TASK,
        payload: res.data,
      });
    } catch (err) {
      dispatch({
        type: FAIL,
        payload: "Something went wrong",
      });
    }
  };

  //to set input field from taks to update
  const setUpdateInput = (taskId, taskUpdateData) => {
    dispatch({
      type: UPDATE_INPUT,
      payload: { taskId, taskUpdateData },
    });
  };

  // to mark task as complete

  const completeTask = async (id) => {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    try {
      const res = await axios.put(
        `https://tiny-list.herokuapp.com/api/v1/users/2/tasks/${id}/completed`,
        config
      );

      dispatch({
        type: COMPLETE_TASK,
        payload: res.data,
      });
    } catch (err) {
      dispatch({
        type: FAIL,
        payload: "Something went wrong",
      });
    }
  };

  //to mark as incomplete

  const unCompleteTask = async (id) => {
    console.log("uncomp", id);
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    try {
      const res = await axios.put(
        `https://tiny-list.herokuapp.com/api/v1/users/2/tasks/${id}/uncompleted`,
        config
      );

      dispatch({
        type: UNCOMPLETE_TASK,
        payload: res.data,
      });
    } catch (err) {
      dispatch({
        type: FAIL,
        payload: "Something went wrong",
      });
    }
  };

  return (
    <TaskContext.Provider
      value={{
        loading: state.loading,
        tasks: state.tasks,
        error: state.error,
        updateInput: state.updateInput,
        updateInputId: state.updateInputId,
        fetchTasks,
        addTask,
        deleteTask,
        setUpdateInput,
        updateTask,
        completeTask,
        unCompleteTask,
      }}
    >
      {props.children}
    </TaskContext.Provider>
  );
};

export default TaskState;
