const families = (state = {}, action) => {
  switch (action.type) {
    case "LOAD_TREE_END": {
      const { families } = action.payload;
      return { ...families };
    }
    case "ADD_FATHER_END":
    case "ADD_MOTHER_END":
    case "ADD_SPOUSE_END":
    case "ADD_CHILD_END": {
      const { updatedFamily } = action.payload;
      return { ...state, [updatedFamily._id]: updatedFamily };
    }
    case "DELETE_PERSON_END": {
      const { updatedFamilies, deletedFamilies } = action.payload;
      let newState = { ...state };
      updatedFamilies.forEach(family => {
        newState[family._id] = family;
      });
      deletedFamilies.forEach(familyId => {
        delete newState[familyId];
      });
      return newState;
    }
    default:
      return state;
  }
};

export default families;
