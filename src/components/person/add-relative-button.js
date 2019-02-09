import React from "react";
import styled from "styled-components";

const Container = styled.button`
  border-radius: 0;
  border: 1px dashed #a9a9a9;
  background: none;
  color: black;
  font-size: 16px;
  font-weight: 600;
  padding: 5px;
  width: 240px;
  margin: 5px;
  display: flex;
  align-items: center;
  cursor: pointer;
  &:focus {
    outline: none;
  }
`;

const Span = styled.span`
  margin-left: 5px;
`;

const AddRelativeButton = props => {
  const gender = props.gender === "male" ? "male" : "female";
  const imgSrc = "/" + gender + ".png";
  return (
    <Container onClick={props.onClick}>
      <img src={imgSrc} height="32" />
      <Span>{props.caption}</Span>
    </Container>
  );
};

export default AddRelativeButton;
