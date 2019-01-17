import React from "react";
import styled from "styled-components";
import * as d3 from "d3";
import updateTree from "../../library/tree";

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

  componentDidMount() {
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
      .call(zoom.transform, d3.zoomIdentity.translate(700, 50).scale(0.8))
      .append("g")
      .attr("transform", "translate(700,50)scale(.8,.8)")
      .attr("id", "tree-container");

    d3.select("#tree-container")
      .append("g")
      .attr("class", "links");
    d3.select("#tree-container")
      .append("g")
      .attr("class", "nodes");

    updateTree();
  }

  componentDidUpdate() {
    updateTree();
  }

  render() {
    return (
      <div>
        <Svg ref={el => (this.svgEl = el)} />
      </div>
    );
  }
}

export default Tree;
