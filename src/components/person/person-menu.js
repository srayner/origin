import React from "react";
import styled from "styled-components";

const Container = styled.div`
  background-color: #dedede;
  display: flex;
  justify-content: center;
`;

const Button = styled.div`
  border: 0;
  border-bottom: 3px solid transparent;
  padding: 10px;
`;

const PersonMenu = props => {
  return (
    <Container>
      <Button>Life Story</Button>
      <Button>Facts</Button>
      <Button>Gallery</Button>
    </Container>
  );
};

export default PersonMenu;
