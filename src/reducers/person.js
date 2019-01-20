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
    default:
      return state;
  }
};

export default person;
