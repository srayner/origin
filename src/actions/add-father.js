import api from "../data/api";
const uuidv4 = require("uuid/v4");

/**
 * Starts the process of adding a father
 */
export function addFatherStart() {
  return { type: "ADD_FATHER_START" };
}

/**
 * Cancels the process of adding a father
 */
export function addFatherCancel() {
  return { type: "ADD_FATHER_CANCEL" };
}

/**
 * Completes the process of adding a father.
 *
 * @param {Person} child The person we are adding a father to.
 * @param {Person} father The father we are adding.
 * @param {Family} family The family representing the relationship.
 */
export function addFatherEnd(child, father, family) {
  let updatedFamily;
  let updatedChild;
  const updatedFather = { ...father, id: uuidv4(), treeId: child.treeId };
  if (family !== null) {
    updatedFamily = { ...family, father: updatedFather.id };
    updatedChild = { ...child };
    api.patchFamily(updatedFamily);
  } else {
    updatedFamily = {
      id: uuidv4(),
      treeId: child.treeId,
      father: updatedFather.id,
      mother: null,
      children: [child.id]
    };
    updatedChild = { ...child, parents: updatedFamily.id };
    api.postFamily(updatedFamily);
    api.patchPerson(updatedChild);
  }

  return {
    type: "ADD_FATHER_END",
    payload: { updatedChild, updatedFather, updatedFamily }
  };
}
