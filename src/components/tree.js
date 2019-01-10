import React from "react";
import styled from "styled-components";
import data from "../data/sample-tree";
import * as d3 from "d3";

const Svg = styled.svg`
  position: absolute;
  top: 0;
  left: 0;
  margin-top: 51px;
  width: 100%;
  height: 100%;
  background-color: rgb(94, 103, 112);
`;

function childPath(d) {
  return (
    "M" +
    d.source.x +
    "," +
    d.source.y +
    "v100" +
    "H" +
    d.target.x +
    "V" +
    d.target.y
  );
}

class Tree extends React.Component {
  state = {
    data: data
  };

  componentDidMount() {
    this.updateChart();
  }

  componentDidUpdate() {
    this.updateChart();
  }

  render() {
    return (
      <div>
        <Svg ref={el => (this.svgEl = el)}>
          <g transform="translate(10, 10)">
            <g className="links" />
            <g className="nodes" />
          </g>
        </Svg>
      </div>
    );
  }

  updateChart() {
    const root = d3.hierarchy(this.state.data);
    const tree = d3.tree().size([800, 400]);

    tree(root);

    const node = d3
      .select("svg g.nodes")
      .selectAll("g.node")
      .data(root.descendants())
      .enter()
      .append("g")
      .attr("class", "node");

    node
      .append("circle")
      .attr("cx", function(d) {
        return d.x;
      })
      .attr("cy", function(d) {
        return d.y;
      })
      .attr("r", 4)
      .attr("fill", "purple");

    node
      .append("rect")
      .attr("x", function(d) {
        return d.x - 30;
      })
      .attr("y", function(d) {
        return d.y;
      })
      .attr("width", 60)
      .attr("height", 80)
      .attr("fill", "#b1e2e2");

    node
      .append("image")
      .attr("x", function(d) {
        return d.x - 25;
      })
      .attr("y", function(d) {
        return d.y + 5;
      })
      .attr("width", 50)
      .attr("height", 70)
      .attr("href", "person.png");

    d3.select("svg g.links")
      .selectAll("line.link")
      .data(root.links())
      .enter()
      .append("path")
      .attr("d", childPath)
      .attr("stroke", "#AEACA2")
      .attr("stroke-width", 2)
      .attr("fill", "none");
  }
}

export default Tree;
