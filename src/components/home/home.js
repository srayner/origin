import React from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import TreesPanel from "./trees-panel";
import {
  loadTrees,
  addTreeStart,
  addTreeCancel,
  addTreeEnd
} from "../../actions/trees";
import TreeModal from "../tree/tree-modal";
import Search from "./search";
import Indexes from "./indexes";
import { Button } from "../ui/button";
import GettingStartedPanel from "./getting-started-panel";

const Container = styled.div`
  margin: 0 auto;
  padding: 10px;
  background-color: #eee;
  max-width: 1024px;
`;

const Row = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 5px;
`;

const Col = styled.div`
  display: flex;
  flex-direction: column;
  margin: 5px;
`;

const FixedCol = styled(Col)`
  flex: 0 0 340px;
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
        <TreeModal
          heading="Add new tree"
          onSubmit={addTreeEnd}
          handleClose={addTreeCancel}
        />
      );
    }

    return (
      <Container>
        <Row>
          <Col>
            <GettingStartedPanel />
            <TreesPanel trees={trees} onNewTree={addTreeStart} />
          </Col>
          <FixedCol>
            <Search history={this.props.history} />
            <Indexes />
          </FixedCol>
        </Row>

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
