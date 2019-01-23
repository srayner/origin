export function addTreeStart() {
  return { type: "ADD_TREE_START" };
}

export function addTreeCancel() {
  return { type: "ADD_TREE_CANCEL" };
}

export function addTreeEnd(treeName) {
  const tree = { name: treeName };
  return {
    type: "ADD_TREE_END",
    payload: { tree }
  };
}

export function editTreeStart() {
  return { type: "EDIT_TREE_START" };
}

export function editTreeCancel() {
  return { type: "EDIT_TREE_CANCEL" };
}

export function editTreeEnd(treeName) {
  const tree = { name: treeName };
  return {
    type: "EDIT_TREE_END",
    payload: { tree }
  };
}
