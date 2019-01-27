import React from "react";
import styled from "styled-components";
import * as d3 from "d3";
import updateTree from "../../library/tree";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import FloatingButton from "../ui/floating-button";
import { loadTree, editTreeStart } from "../../actions/trees";

const Svg = styled.svg`
  position: absolute;
  top: 0;
  left: 0;
  margin-top: 46px;
  width: 100%;
  height: 100%;
  background-color: rgb(94, 103, 112);
`;

class Tree extends React.Component {
  delta() {
    return (-d3.event.deltaY * (d3.event.deltaMode ? 120 : 1)) / 100;
  }

  treeClick = person => {
    this.props.history.push("/person/" + person.id);
  };

  renderTree() {
    console.log("render tree");
    const { people, families } = this.props;
    updateTree(people, families, this.treeClick);
  }

  componentDidMount() {
    const { treeId } = this.props.match.params;
    this.props.loadTree(treeId);
    console.log(treeId);

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

    this.renderTree();
  }

  componentDidUpdate() {
    this.renderTree();
  }

  render() {
    const treeName = this.props.tree ? this.props.tree.name : "";
    return (
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
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    tree: state.app.tree,
    people: state.people,
    families: state.families
  };
};

const mapDispatchToProps = dispatch => {
  return {
    loadTree: treeId => dispatch(loadTree(treeId)),
    editTreeStart: () => dispatch(editTreeStart())
  };
};

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(Tree)
);
