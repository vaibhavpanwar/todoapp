import React, { useState, useEffect, useRef } from "react";

const TodoForm = ({ addTask, updateTask, updateInput, updateInputId }) => {
  // component states
  const [description, setDescription] = useState("");
  const [updateMode, setUpdateMode] = useState(false);

  // input reference
  const inputRef = useRef();

  //to handle input change and store value state
  const onChangeHandler = (e) => {
    e.preventDefault();
    setDescription(e.target.value);
  };

  //form submit handler

  const submitHandler = (e) => {
    e.preventDefault();

    //checking if user enters atleast one character
    if (!description || description === "") {
      return;
    } else {
      if (updateMode) {
        updateTask(updateInputId, description);
        setUpdateMode(false);
        setDescription("");
      } else {
        addTask(description);
        setDescription("");
      }
    }
  };

  useEffect(() => {
    if (updateInput !== "") {
      //focus on input when clicked on update
      inputRef.current.focus();
      setUpdateMode(true);
      setDescription(updateInput);
    }
  }, [updateInput]);

  return (
    <form onSubmit={submitHandler}>
      <div className="input-field">
        {" "}
        <i className="fa fa-plus plus-icon"></i>{" "}
        <input
          ref={inputRef}
          type="text"
          placeholder="Add to list.."
          value={description}
          onChange={onChangeHandler}
        ></input>
      </div>
    </form>
  );
};

export default TodoForm;
