import React from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import Panel from "../ui/panel";
import TreesPanel from "./trees-panel";
import { addTreeStart, addTreeCancel, addTreeEnd } from "../../actions/app";
import NewTreeModal from "./new-tree-modal";

const Container = styled.div`
  margin: 0;
  padding: 10px;
  background-color: #eee;
`;

const Home = props => {
  let modal = null;
  if (props.addingTree) {
    modal = (
      <NewTreeModal
        onSubmit={props.addTreeEnd}
        handleClose={props.addTreeCancel}
      />
    );
  }
  console.log(props);
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
      <TreesPanel trees={props.trees} onNewTree={props.addTreeStart} />
      {modal}
    </Container>
  );
};

const mapStateToProps = state => {
  return {
    addingTree: state.app.addingTree,
    trees: state.app.trees
  };
};

const mapDispatchToProps = dispatch => {
  return {
    addTreeStart: () => {
      dispatch(addTreeStart());
    },
    addTreeCancel: () => {
      dispatch(addTreeCancel());
    },
    addTreeEnd: treeName => {
      dispatch(addTreeEnd(treeName));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
