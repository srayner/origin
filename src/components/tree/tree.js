import React from "react";
import styled from "styled-components";
import * as d3 from "d3";
import updateTree from "../../library/tree";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import FloatingButton from "../ui/floating-button";
import {
  loadTree,
  editTreeStart,
  editTreeCancel,
  editTreeEnd
} from "../../actions/trees";
import Modal from "../ui/modal";
import TreeModal from "./tree-modal";
import { ThemeProvider } from "styled-components";
import theme from "../../data/theme";
import {
  addPersonStart,
  addPersonCancel,
  addPersonEnd
} from "../../actions/add-person";
import PersonDetail from "../person/person-detail";

const Svg = styled.svg`
  position: absolute;
  top: 0;
  left: 0;
  margin-top: 46px;
  width: 100%;
  height: 100%;
  background-color: ${props => props.theme.carbon};
`;

class Tree extends React.Component {
  delta() {
    return (-d3.event.deltaY * (d3.event.deltaMode ? 120 : 1)) / 100;
  }

  treeClick = person => {
    this.props.history.push("/person/" + person._id);
  };

  renderTree() {
    const { people, families } = this.props;
    updateTree(people, families, this.treeClick);
  }

  componentDidMount() {
    const { treeId } = this.props.match.params;
    this.props.loadTree(treeId);

    var zoom = d3
      .zoom()
      .wheelDelta(this.delta)
      .on("zoom", handleZoom);

    function handleZoom() {
      if (svg) {
        svg.attr("transform", d3.event.transform);
      }
    }

    const svg = d3
      .select("svg")
      .call(zoom)
      .call(zoom.transform, d3.zoomIdentity.translate(450, 120).scale(0.9))
      .append("g")
      .attr("transform", "translate(450,120)scale(.9,.9)")
      .attr("id", "tree-container");

    d3.select("#tree-container")
      .append("g")
      .attr("class", "links");
    d3.select("#tree-container")
      .append("g")
      .attr("class", "nodes");
  }

  componentDidUpdate() {
    const { token, addingPerson, people } = this.props;
    if (!token) {
      this.props.history.push("/login");
    }
    if (!addingPerson && Object.keys(people).length === 0) {
      this.props.addPersonStart();
    }
    this.renderTree();
  }

  render() {
    const treeName = this.props.tree ? this.props.tree.name : "";
    let modal = null;
    if (this.props.editingTree) {
      modal = (
        <TreeModal
          heading="Edit tree"
          onSubmit={this.props.editTreeEnd}
          handleClose={this.props.editTreeCancel}
          tree={this.props.tree}
        />
      );
    }
    if (this.props.addingPerson) {
      modal = (
        <Modal width="50%" handleClose={this.props.addPersonCancel}>
          <PersonDetail
            person={{ gender: "male" }}
            cancelEditing={this.props.addPersonCancel}
            endEditing={person =>
              this.props.addPersonEnd(person, this.props.tree._id)
            }
          />
        </Modal>
      );
    }
    return (
      <ThemeProvider theme={theme}>
        <div>
          <FloatingButton
            top="56px"
            left="10px"
            onClick={() => {
              this.props.editTreeStart();
            }}
          >
            {treeName}
          </FloatingButton>
          <FloatingButton
            top="56px"
            right="10px"
            onClick={() => {
              this.props.editTreeStart();
            }}
          >
            Edit Tree
          </FloatingButton>
          <Svg ref={el => (this.svgEl = el)} />
          {modal}
        </div>
      </ThemeProvider>
    );
  }
}

const mapStateToProps = state => {
  return {
    token: state.app.token,
    addingPerson: state.app.addingPerson,
    editingTree: state.app.editingTree,
    tree: state.app.tree,
    people: state.people,
    families: state.families
  };
};

const mapDispatchToProps = dispatch => {
  return {
    loadTree: treeId => dispatch(loadTree(treeId)),
    editTreeStart: () => dispatch(editTreeStart()),
    editTreeCancel: () => dispatch(editTreeCancel()),
    editTreeEnd: tree => dispatch(editTreeEnd(tree)),
    addPersonStart: () => dispatch(addPersonStart()),
    addPersonCancel: () => dispatch(addPersonCancel()),
    addPersonEnd: (person, treeId) => dispatch(addPersonEnd(person, treeId))
  };
};

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(Tree)
);
