import buildTree from "./build-tree";
import tidyTree from "./tidy-tree";
import drawTree from "./draw-tree";
import { people, families } from "../data/sample-data";

function test(person) {
  alert("You clicked: " + person.forenames + " " + person.surname);
}

export default function updateTree() {
  const tree = { people, families, pitchX: 100, pitchY: 200 };
  buildTree(tree);
  console.log(tree);
  tidyTree(tree);
  drawTree(tree, test);
}
