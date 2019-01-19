import React from "react";

const Radio = props => {
  return (
    <label>
      <input
        type="radio"
        name={props.name}
        value={props.value}
        checked={props.checked}
      />
      {props.children}
    </label>
  );
};

export default Radio;
