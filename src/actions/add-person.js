import api from "../data/api";

export function addPersonStart() {
  return {
    type: "ADD_PERSON_START"
  };
}

export function addPersonCancel() {
  return {
    type: "ADD_PERSON_CANCEL"
  };
}

export function addPersonEnd(person) {
  updatedPerson = { ...person };
  api.postFamily(person);
  return {
    type: "ADD_PERSON_END",
    payload: { updatedPerson }
  };
}
