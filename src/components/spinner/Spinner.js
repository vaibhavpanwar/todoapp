import React from "react";
import spinner from "./redspinner.gif";

const Spinner = () => {
  return (
    <div>
      <img
        src={spinner}
        width="130px"
        height="130px"
        style={{ margin: "auto" }}
      />
    </div>
  );
};

export default Spinner;
