const people = (state = {}, action) => {
  switch (action.type) {
    case "LOAD_TREE_END": {
      const { people } = action.payload;
      return { ...people };
    }
    case "PERSON_EDIT_END": {
      const { updatedPerson } = action.payload;
      return { ...state, [updatedPerson.id]: updatedPerson };
    }
    case "ADD_FATHER_END": {
      const { updatedChild, updatedFather } = action.payload;
      return {
        ...state,
        [updatedChild.id]: updatedChild,
        [updatedFather.id]: updatedFather
      };
    }
    default:
      return state;
  }
};

export default people;
