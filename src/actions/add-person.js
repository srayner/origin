import api from "../data/api";
const uuidv4 = require("uuid/v4");

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

export function addPersonEnd(person, treeId) {
  const updatedPerson = {
    ...person,
    _id: uuidv4(),
    tree: treeId,
    parents: null,
    spouses: []
  };
  api.postPerson(updatedPerson);
  return {
    type: "ADD_PERSON_END",
    payload: { updatedPerson }
  };
}
