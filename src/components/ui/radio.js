import React from "react";
import styled from "styled-components";

const Label = styled.label`
  display: inline-block;
  margin: 0 5px 20px 5px;
`;

const Input = styled.input`
  margin: 1px 5px 0 1px;
  vertical-align: top;
`;

const Radio = props => {
  return (
    <Label>
      <Input
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
