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

export function endEditing() {
  return {
    type: "PERSON_EDIT_END"
  };
}
