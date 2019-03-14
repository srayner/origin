import buildTree from "./build-tree";
import drawTree from "./draw-tree";

export default function updateTree(people, families, clickHandler) {
  const tree = { people, families, pitchX: 100, pitchY: 200 };
  buildTree(tree);
  drawTree(tree, clickHandler);
}
