const initialState = {
  editing: false,
  person: null
};

const person = (state = initialState, action) => {
  switch (action.type) {
    case "PERSON_EDIT_START": {
      const { person } = action.payload;
      return { editing: true, person };
    }
    case "PERSON_EDIT_CANCEL":
    case "PERSON_EDIT_END": {
      return { editing: false, person: null };
    }
    case "PERSON_DELETE_END": {
      const { person } = action.payload;
      let newState = { ...state };
      delete newState[person._id];
      return newState;
    }
    default:
      return state;
  }
};

export default person;
