const initialState = {
  trees: {},
  addingTree: false,
  addingRelation: false,
  editingTree: false
};

const app = (state = initialState, action) => {
  switch (action.type) {
    case "LOAD_TREE_END": {
      const { tree, people, families } = action.payload;
      return { ...state, tree, people, families };
    }
    case "LOAD_TREES_END": {
      const trees = action.payload.trees.reduce(function(acc, cur, i) {
        acc[cur.id] = cur;
        return acc;
      }, {});
      return { ...state, trees };
    }
    case "ADD_TREE_START": {
      return { ...state, addingTree: true };
    }
    case "ADD_TREE_CANCEL":
      return { ...state, addingTree: false };
    case "ADD_TREE_END":
      const { tree } = action.payload;
      const trees = { ...state.trees, [tree.id]: tree };
      return { ...state, trees, addingTree: false };
    case "EDIT_TREE_START": {
      return { ...state, editingTree: true };
    }
    case "EDIT_TREE_CANCEL": {
      return { ...state, editingTree: false };
    }
    case "EDIT_TREE_END": {
      const { tree } = action.payload;
      const trees = { ...state.trees, [tree.id]: tree };
      return { ...state, trees, editingTree: false };
    }
    case "ADD_FATHER_START": {
      return { ...state, addingRelation: "father" };
    }
    case "ADD_FATHER_CANCEL":
    case "ADD_FATHER_END": {
      return { ...state, addingRelation: false };
    }
    default:
      return state;
  }
};

export default app;
