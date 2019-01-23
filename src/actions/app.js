export function addTreeStart() {
  return {
    type: "ADD_TREE_START"
  };
}

export function addTreeCancel() {
  return {
    type: "ADD_TREE_CANCEL"
  };
}

export function addTreeEnd(treeName) {
  const tree = {
    name: treeName
  };
  return {
    type: "ADD_TREE_END",
    payload: { tree }
  };
}
