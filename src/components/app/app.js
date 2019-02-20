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
import logo from "../../resources/tree.png";
import theme from "../../data/theme";
import { ThemeProvider } from "styled-components";
import { connect } from "react-redux";
import { logout, loadLoginFromLocalStorage } from "../../actions/user";

const Container = styled.div`
  font-family: "Roboto", sans-serif;
`;

const TitleBar = styled.header`
  display: flex;
  background-color: ${props => props.theme.shadow};
`;

const Heading = styled.h1`
  display: inline-block;
  margin: 0 10px 0 0px;
  padding: 5px;
  color: ${props => props.theme.ash};
  font-family: "Cardo";
  font-size: 24px;
  font-style: italic;
  font-weight: 600;
`;

const F = styled.span`
  color: ${props => props.theme.dandilion};
`;

const Logo = styled.img`
  margin: 5px;
  height: 32px;
`;

class App extends Component {
  componentDidMount() {
    this.props.loadLoginFromLocalStorage();
  }

  render() {
    let titleBar = null;
    if (this.props.token) {
      titleBar = (
        <TitleBar>
          <Logo src={logo} />
          <Heading>
            <F>Origin</F> Genealogy
          </Heading>
          <Menu logout={this.props.logout} />
        </TitleBar>
      );
    }

    return (
      <Router>
        <Container>
          <ThemeProvider theme={theme}>{titleBar}</ThemeProvider>
          <Route path="/" exact component={Home} />
          <Route path="/sign-up" exact component={SignUp} />
          <Route path="/login" exact component={Login} />
          <Route path="/person/:personId" exact component={Person} />
          <Route path="/tree/:treeId" exact component={Tree} />
          <Route path="/results" exact component={Results} />
          <Route path="/profile" exact component={Profile} />
        </Container>
      </Router>
    );
  }
}

const mapStateToProps = state => {
  return {
    token: state.app.token
  };
};

const mapDispatchToProps = dispatch => {
  return {
    logout: () => dispatch(logout()),
    loadLoginFromLocalStorage: () => dispatch(loadLoginFromLocalStorage())
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
