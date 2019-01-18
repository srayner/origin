import * as d3 from "d3";

let people = null;
let families = null;

export default function drawTree(tree) {
  people = tree.people;
  families = tree.families;
  addLinksToSVG();
  addNodesToSVG();
}

/*
 * Adds all nodes to the SVG
 */
function addNodesToSVG() {
  const node = d3.select("g.nodes");
  console.log(node);
  Object.keys(people).forEach(key => {
    const person = people[key];
    if (!person.positioned) {
      return;
    }

    node
      .append("rect")
      .attr("x", person.x - 45)
      .attr("y", person.y - 25)
      .attr("width", 90)
      .attr("height", 50)
      .attr("fill", "white");

    // image
    node
      .append("image")
      .attr("x", person.x - 45)
      .attr("y", person.y - 115)
      .attr("width", 90)
      .attr("height", 90)
      .attr("href", person.gender === "male" ? "male.png" : "female.png");

    // forenames
    node
      .append("text")
      .attr("x", person.x)
      .attr("y", person.y - 11)
      .attr("text-anchor", "middle")
      .attr("font-size", "12px")
      .attr("font-weight", "600")
      .text(person.forenames);

    // surname
    node
      .append("text")
      .attr("x", person.x)
      .attr("y", person.y + 3)
      .attr("text-anchor", "middle")
      .attr("font-size", "12px")
      .attr("font-weight", "600")
      .text(person.surname);

    // lifespan
    node
      .append("text")
      .attr("x", person.x)
      .attr("y", person.y + 20)
      .attr("text-anchor", "middle")
      .attr("font-size", "11px")
      .text(getLifeSpan(person));
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
  return "M" + family.x + "," + family.y + "v55H" + child.x + "V" + child.y;
}

function parentPath(family, parent) {
  return "M" + family.x + "," + family.y + "H" + parent.x;
}

function addLink(source, target, type) {
  if (type === "child") {
    d3.select("g.links")
      .append("path")
      .attr("d", childPath(source, target))
      .attr("stroke", "#AEACA2")
      .attr("stroke-width", 2)
      .attr("fill", "none");
  } else {
    const stroke = target.gender === "male" ? "#68c2c2" : "#f58888";
    d3.select("g.links")
      .append("path")
      .attr("d", parentPath(source, target))
      .attr("stroke", stroke)
      .attr("stroke-width", 2)
      .attr("fill", "none");
  }
}

function getLifeSpan(person) {
  const birth = person.birth ? person.birth.year.toString() : "";
  const death = person.death ? " - " + person.death.year.toString() : "";
  return birth + death;
}
