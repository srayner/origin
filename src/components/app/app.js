import React, { Component } from "react";
import styled from "styled-components";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./home";
import SignUp from "../user/sign-up";
import Login from "../user/login";
import Person from "../person/person";
import Tree from "../tree/tree";
import Results from "../search/results";
import Profile from "../user/profile";

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
      <Router>
        <Container>
          <header>
            <Heading>Nucleus Genealogy</Heading>
          </header>
          <Route path="/" exact component={Home} />
          <Route path="/sign-up" exact component={SignUp} />
          <Route path="/login" exact component={Login} />
          <Route path="/person" exact component={Person} />
          <Route path="/tree" exact component={Tree} />
          <Route path="/results" exact component={Results} />
          <Route path="/profile" exact component={Profile} />
        </Container>
      </Router>
    );
  }
}

export default App;
