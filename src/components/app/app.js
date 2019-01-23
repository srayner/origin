import React, { Component } from "react";
import styled from "styled-components";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "../home/home";
import SignUp from "../user/sign-up";
import Login from "../user/login";
import Person from "../person/person";
import Tree from "../tree/tree";
import Results from "../search/results";
import Profile from "../user/profile";
import Menu from "./menu";

const Container = styled.div`
  font-family: "Roboto", sans-serif;
`;

const TitleBar = styled.header`
  display: flex;
  background-color: #111;
`;

const Heading = styled.h1`
  display: inline-block;
  margin: 0 20px 0 10px;
  padding: 5px;
  color: white;
  font-family: "Lora";
  font-size: 24px;
  font-style: italic;
  font-weight: 300;
`;

class App extends Component {
  render() {
    return (
      <Router>
        <Container>
          <TitleBar>
            <Heading>Nucleus Genealogy</Heading>
            <Menu />
          </TitleBar>
          <Route path="/" exact component={Home} />
          <Route path="/sign-up" exact component={SignUp} />
          <Route path="/login" exact component={Login} />
          <Route path="/person/:personId" exact component={Person} />
          <Route path="/tree" exact component={Tree} />
          <Route path="/results" exact component={Results} />
          <Route path="/profile" exact component={Profile} />
        </Container>
      </Router>
    );
  }
}

export default App;
