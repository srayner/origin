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
    default:
      return state;
  }
};

export default people;
