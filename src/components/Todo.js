import React from "react";

const Todo = () => {
  return (
    <section className="container">
      <form>
        <div className="input-field">
          {" "}
          <i className="fa fa-plus plus-icon"></i>{" "}
          <input type="text" placeholder="Add to list.."></input>
        </div>
      </form>
      <div className="todo-wrapper">
        <div className="todo-items">
          <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" />
          <p className="completed">hhhirhohght4rhoht4g4h</p>
          <i className="fa fa-trash trash-icon"></i>
        </div>
        <div className="todo-items">
          <input
            type="checkbox"
            id="vehicle1"
            name="vehicle1"
            value="Bike"
            checked={true}
          />
          <p>hhhirhohght4rhoht4g4h</p>
          <i className="fa fa-trash trash-icon"></i>
        </div>
        <div className="todo-items">
          <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" />
          <p>hhhirhohght4rhoht4g4h</p>
          <i className="fa fa-trash trash-icon"></i>
        </div>
        <div className="todo-items">
          <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" />
          <p>hhhirhohght4rhoht4g4h</p>
          <i className="fa fa-trash trash-icon"></i>
        </div>
      </div>
    </section>
  );
};

export default Todo;
