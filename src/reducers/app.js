const initialState = {
  trees: {},
  addingPerson: false,
  addingTree: false,
  addingRelation: false,
  editingTree: false,
  deletingPerson: null,
  importing: false,
  user: null
};

const app = (state = initialState, action) => {
  switch (action.type) {
    case "IMPORT_FILE_START": {
      return { ...state, importing: true };
    }
    case "IMPORT_FILE_CANCEL":
    case "IMPORT_FILE_END": {
      return { ...state, importing: false };
    }
    case "LOGIN_SUCCESS": {
      const { token, user, redirect } = action.payload;
      return { ...state, token, user, redirect };
    }
    case "LOGIN_FROM_LOCAL": {
      const { token, redirect } = action.payload;
      return { ...state, token, redirect };
    }
    case "LOGIN_FAILED":
    case "LOGOUT": {
      return { ...state, token: null, redirect: null };
    }
    case "LOAD_TREE_END": {
      const { tree, people, families } = action.payload;
      return { ...state, tree, people, families };
    }
    case "LOAD_TREES_END": {
      const trees = action.payload.trees.reduce(function(acc, cur, i) {
        acc[cur._id] = cur;
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
      const trees = { ...state.trees, [tree._id]: tree };
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
    case "ADD_PERSON_START": {
      return { ...state, addingPerson: true };
    }
    case "ADD_PERSON_CANCEL":
    case "ADD_PERSON_END": {
      return { ...state, addingPerson: false };
    }
    case "ADD_FATHER_START": {
      return { ...state, addingRelation: "father" };
    }
    case "ADD_MOTHER_START": {
      return { ...state, addingRelation: "mother" };
    }
    case "ADD_SPOUSE_START": {
      return { ...state, addingRelation: "spouse" };
    }
    case "ADD_CHILD_START": {
      return { ...state, addingRelation: "child" };
    }
    case "ADD_FATHER_CANCEL":
    case "ADD_FATHER_END":
    case "ADD_MOTHER_CANCEL":
    case "ADD_MOTHER_END":
    case "ADD_SPOUSE_CANCEL":
    case "ADD_SPOUSE_END":
    case "ADD_CHILD_CANCEL":
    case "ADD_CHILD_END": {
      return { ...state, addingRelation: false };
    }
    case "DELETE_PERSON_START": {
      const { personId } = action.payload;
      return { ...state, deletingPerson: personId };
    }
    case "DELETE_PERSON_CANCEL":
    case "DELETE_PERSON_END": {
      return { ...state, deletingPerson: null };
    }
    default:
      return state;
  }
};

export default app;
