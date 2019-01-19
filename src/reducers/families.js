import { families as initialState } from "../data/sample-data";

const families = (state = initialState, action) => {
  switch (action.type) {
    case "FAMILY_EDIT": {
      const { updatedFamily } = action.payload;
      return { ...state, [updatedFamily.id]: updatedFamily };
    }
    default:
      return state;
  }
};

export default families;
