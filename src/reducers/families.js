const families = (state = {}, action) => {
  switch (action.type) {
    case "LOAD_TREE_END": {
      const { families } = action.payload;
      return { ...families };
    }
    case "FAMILY_EDIT_END": {
      const { updatedFamily } = action.payload;
      return { ...state, [updatedFamily.id]: updatedFamily };
    }
    default:
      return state;
  }
};

export default families;
