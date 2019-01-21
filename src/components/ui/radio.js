import React from "react";
import styled from "styled-components";

const Label = styled.label`
  display: inline-block;
  margin: 0 5px 20px 5px;
`;

const Radio = props => {
  return (
    <Label>
      <input
        type="radio"
        name={props.name}
        value={props.value}
        checked={props.checked}
        onChange={props.onChange}
      />
      {props.children}
    </Label>
  );
};

export default Radio;
