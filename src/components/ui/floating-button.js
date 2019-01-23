import React from "react";
import styled from "styled-components";

const Container = styled.div`
  position: absolute;
  top: ${props => {
    return props.top;
  }};
  right: ${props => {
    return props.right;
  }};
  z-index: 1;
`;

const Button = styled.button`
  padding: 5px 10px;
  border: none;
  border-radius: 3px;
  background-color: #333;
  color: white;
  font-size: 14px;
  &:hover {
    background-color: black;
  }
  &:focus {
    outline: none;
  }
`;

const FloatingButton = props => {
  return (
    <Container top={props.top} right={props.right}>
      <Button onClick={props.onClick}>{props.children}</Button>
    </Container>
  );
};

export default FloatingButton;
