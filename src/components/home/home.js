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
import GettingStartedPanel from "./getting-started-panel";
import { Redirect } from "react-router-dom";
import { exportTree } from "../../actions/export";
import { buildGedCom } from "../../library/gedcom-output";
import { importFileStart, importFileCancel } from "../../actions/import";
import FileImport from "./file-import";

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
      token,
      trees,
      addingTree,
      addTreeStart,
      addTreeCancel,
      addTreeEnd,
      importFileStart
    } = this.props;

    if (!token) {
      return <Redirect to="/login" />;
    }

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
    if (this.props.importing) {
      modal = <FileImport handleClose={this.props.importFileCancel} />;
    }

    return (
      <Container>
        <Row>
          <Col>
            <GettingStartedPanel />
            <TreesPanel
              trees={trees}
              onNewTree={addTreeStart}
              onImportTree={importFileStart}
              onExportTree={this.props.exportTree}
            />
          </Col>
          <FixedCol>
            <Search history={this.props.history} />
            <Indexes />
          </FixedCol>
        </Row>
        {modal}
      </Container>
    );
  }
}

const mapStateToProps = state => {
  return {
    token: state.app.token,
    addingTree: state.app.addingTree,
    trees: state.app.trees,
    importing: state.app.importing
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
    },
    exportTree: treeId => {
      dispatch(exportTree(treeId));
    },
    exportGedCom: () => {
      buildGedCom();
    },
    importFileStart: () => {
      dispatch(importFileStart());
    },
    importFileCancel: () => {
      dispatch(importFileCancel());
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
