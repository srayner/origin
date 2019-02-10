import api from "../data/api";

export function startEditing(person) {
  return {
    type: "PERSON_EDIT_START",
    payload: { person }
  };
}

export function cancelEditing() {
  return {
    type: "PERSON_EDIT_CANCEL"
  };
}

export function endEditing(updatedPerson) {
  api.patchPerson(updatedPerson);
  return {
    type: "PERSON_EDIT_END",
    payload: { updatedPerson }
  };
}
