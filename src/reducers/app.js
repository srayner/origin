const initialState = {
  trees: {},
  addingTree: false,
  editingTree: false
};

const app = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_TREE_START": {
      return { ...state, addingTree: true };
    }
    case "ADD_TREE_CANCEL":
      return { ...state, addingTree: false };
    case "ADD_TREE_END":
      const { tree } = action.payload;
      const trees = { ...state.trees, [tree.name]: tree };
      return { ...state, trees, addingTree: false };
    case "EDIT_TREE_START": {
      return { ...state, editingTree: true };
    }
    default:
      return state;
  }
};

export default app;
