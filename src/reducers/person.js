const initialState = {
  editing: false
};

const person = (state = initialState, action) => {
  switch (action.type) {
    case "PERSON_EDIT_START": {
      return { ...state, editing: true };
    }
    default:
      return state;
  }
};

export default person;
