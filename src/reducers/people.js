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
      const { updatedChild, updatedFather, updatedMother } = action.payload;
      const newState = {
        ...state,
        [updatedChild._id]: updatedChild,
        [updatedFather._id]: updatedFather
      };
      if (updatedMother) {
        newState[updatedMother._id] = updatedMother;
      }
      return newState;
    }
    default:
      return state;
  }
};

export default people;
