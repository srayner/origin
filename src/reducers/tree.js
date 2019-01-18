import { people } from "../data/sample-data";

const tree = (state = people, action) => {
  switch (action.type) {
    case "PERSON_EDIT": {
      const { updatedPerson } = action.payload;
      return { ...state, [updatedPerson.id]: updatedPerson };
    }
    default:
      return state;
  }
};

export default tree;
