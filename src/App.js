import React, { Component } from "react";
import styled from "styled-components";
import Tree from "./components/tree";

const Container = styled.div`
  font-family: "Roboto", sans-serif;
`;

const Heading = styled.h1`
  margin: 0;
  padding: 10px;
  background-color: #111;
  color: white;
  font-family: "Lora";
  font-size: 24px;
  font-style: italic;
  font-weight: 300;
`;

class App extends Component {
  render() {
    return (
      <Container>
        <header>
          <Heading>Nucleus Genealogy</Heading>
          <Tree />
        </header>
      </Container>
    );
  }
}

export default App;
