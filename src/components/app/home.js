import React from "react";
import styled from "styled-components";
import Panel from "../ui/panel";

const Container = styled.div`
  margin: 0;
  padding: 10px;
  background-color: #eee;
`;

const Home = props => {
  return (
    <Container>
      <h1>Home</h1>
      <Panel>
        <h2>Getting started</h2>
        <p>
          Build and manage family trees by entering what you alredy know
          manually, then searching the avaiable indexes to find and add more
          people.
        </p>
        <p>
          Start by creating a new person, and specify you want a new tree. Then
          add another person either as a parent, spouse or child. Add more
          people to grow your tree.
        </p>
      </Panel>
    </Container>
  );
};

export default Home;
