import api from "../data/api";
const uuidv4 = require("uuid/v4");

/**
 * Starts the process of adding a mother
 */
export function addMotherStart() {
  return { type: "ADD_MOTHER_START" };
}

/**
 * Cancels the process of adding a mother
 */
export function addMotherCancel() {
  return { type: "ADD_MOTHER_CANCEL" };
}

/**
 * Completes the process of adding a mother.
 *
 * @param {Person} child The person we are adding a mother to.
 * @param {Person} mother The mother we are adding.
 * @param {Person} father The father if he exists already.
 * @param {Family} family The family representing the relationship.
 */
export function addMotherEnd(child, mother, father, family) {
  let updatedFamily;
  let updatedChild;
  let updatedFather;
  const updatedMother = {
    ...mother,
    _id: uuidv4(),
    tree: child.tree,
    spouses: family ? [family._id] : []
  };
  api.postPerson(updatedMother);
  if (father) {
    updatedFather = { ...father, spouses: [family._id] };
    api.patchPerson(updatedFather);
  }
  if (family) {
    updatedFamily = { ...family, mother: updatedMother._id };
    updatedChild = { ...child };
    api.patchFamily(updatedFamily);
  } else {
    updatedFamily = {
      _id: uuidv4(),
      tree: child.tree,
      mother: updatedMother._id,
      father: null,
      children: [child._id]
    };
    updatedChild = { ...child, parents: updatedFamily._id };
    api.postFamily(updatedFamily);
    api.patchPerson(updatedChild);
  }

  return {
    type: "ADD_MOTHER_END",
    payload: { updatedChild, updatedMother, updatedFather, updatedFamily }
  };
}
