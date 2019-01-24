import React from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import Panel from "../ui/panel";
import PanelHeader from "../ui/panel-header";
import TreesPanel from "./trees-panel";
import {
  loadTrees,
  addTreeStart,
  addTreeCancel,
  addTreeEnd
} from "../../actions/trees";
import NewTreeModal from "./new-tree-modal";
import Search from "./search";
import Indexes from "./indexes";
import { Button } from "../ui/button";

const Container = styled.div`
  margin: 0;
  padding: 10px;
  background-color: #eee;
`;

class Home extends React.Component {
  componentDidMount() {
    this.props.loadTrees();
  }

  render() {
    const {
      trees,
      addingTree,
      addTreeStart,
      addTreeCancel,
      addTreeEnd
    } = this.props;
    let modal = null;
    if (addingTree) {
      modal = (
        <NewTreeModal onSubmit={addTreeEnd} handleClose={addTreeCancel} />
      );
    }

    return (
      <Container>
        <h1>Home</h1>
        <Panel>
          <PanelHeader>Getting started</PanelHeader>
          <p>
            Build and manage family trees by entering what you alredy know
            manually, then searching the avaiable indexes to find and add more
            people.
          </p>
          <p>
            Start by creating a new person, and specify you want a new tree.
            Then add another person either as a parent, spouse or child. Add
            more people to grow your tree.
          </p>
        </Panel>
        <TreesPanel trees={trees} onNewTree={addTreeStart} />
        <Search />
        <Indexes />
        <Button>Import</Button>
        <Button>Export</Button>
        {modal}
      </Container>
    );
  }
}

const mapStateToProps = state => {
  return {
    addingTree: state.app.addingTree,
    trees: state.app.trees
  };
};

const mapDispatchToProps = dispatch => {
  return {
    loadTrees: () => {
      dispatch(loadTrees());
    },
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
