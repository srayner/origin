import { people as initialState } from "../data/sample-data";

const people = (state = initialState, action) => {
  switch (action.type) {
    case "PERSON_EDIT_END": {
      const { updatedPerson } = action.payload;
      return { ...state, [updatedPerson.id]: updatedPerson };
    }
    default:
      return state;
  }
};

export default people;
