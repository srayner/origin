import React from "react";
import styled from "styled-components";

const Container = styled.div`
  background-color: #dedede;
  display: flex;
  justify-content: center;
`;

const Button = styled.div`
  color: grey;
  border: 0;
  border-bottom: 3px solid transparent;
  padding: 10px;
  &:hover {
    color: black;
    cursor: pointer;
  }
  &.active {
    border-bottom-color: ${props => props.theme.dandilion};
  }
`;

const PersonMenu = props => {
  return (
    <Container>
      <Button>Life Story</Button>
      <Button className="active">Facts</Button>
      <Button>Gallery</Button>
    </Container>
  );
};

export default PersonMenu;
