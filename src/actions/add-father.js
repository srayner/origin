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
 * @param {Person} mother The mother if she exists already.
 * @param {Family} family The family representing the relationship.
 */
export function addFatherEnd(child, father, mother, family) {
  let updatedFamily;
  let updatedChild;
  let updatedMother;
  const updatedFather = {
    ...father,
    _id: uuidv4(),
    tree: child.tree,
    spouses: family ? [family._id] : []
  };
  api.postPerson(updatedFather);
  if (mother) {
    updatedMother = { ...mother, spouses: [family._id] };
    api.patchPerson(updatedMother);
  }
  if (family) {
    updatedFamily = { ...family, father: updatedFather._id };
    updatedChild = { ...child };
    api.patchFamily(updatedFamily);
  } else {
    updatedFamily = {
      _id: uuidv4(),
      tree: child.tree,
      father: updatedFather._id,
      mother: null,
      children: [child._id]
    };
    updatedChild = { ...child, parents: updatedFamily._id };
    api.postFamily(updatedFamily);
    api.patchPerson(updatedChild);
  }

  return {
    type: "ADD_FATHER_END",
    payload: { updatedChild, updatedFather, updatedMother, updatedFamily }
  };
}
