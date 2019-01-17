import * as d3 from "d3";

let people = null;
let families = null;

export default function drawTree(tree) {
  people = tree.people;
  families = tree.families;
  addNodesToSVG();
  addLinksToSVG();
}

/*
 * Adds all nodes to the SVG
 */
function addNodesToSVG() {
  Object.keys(people).forEach(key => {
    d3.select("g")
      .append("text")
      .attr("x", people[key].x)
      .attr("y", people[key].y)
      .attr("text-anchor", "middle")
      .attr("font-size", "12px")
      .attr("font-weight", "600")
      .text(people[key].id);
  });
  Object.keys(families).forEach(key => {
    d3.select("g")
      .append("circle")
      .attr("r", 3)
      .attr("cx", families[key].x)
      .attr("cy", families[key].y)
      .attr("stroke", "gray")
      .attr("fill", "gray");
  });
}

function addLinksToSVG() {
  Object.keys(families).forEach(key => {
    const family = families[key];
    const father = people[family.father];
    const mother = people[family.mother];
    addLink(family, father, "father");
    addLink(family, mother, "mother");
    family.children.forEach(key => {
      const child = people[key];
      addLink(family, child, "child");
    });
  });
}

function childPath(family, child) {
  return "M" + family.x + "," + family.y + "v160H" + child.x + "V" + child.y;
}

function parentPath(family, parent) {
  return "M" + family.x + "," + family.y + "H" + parent.x;
}

function addLink(source, target, type) {
  if (type === "child") {
    d3.select("g")
      .append("path")
      .attr("d", childPath(source, target))
      .attr("stroke", "#AEACA2")
      .attr("stroke-width", 2)
      .attr("fill", "none");
  } else {
    const stroke = target.gender === "male" ? "#68c2c2" : "#f58888";
    d3.select("g")
      .append("path")
      .attr("d", parentPath(source, target))
      .attr("stroke", stroke)
      .attr("stroke-width", 2)
      .attr("fill", "none");
  }
}
