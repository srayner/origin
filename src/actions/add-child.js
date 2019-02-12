import api from "../data/api";
const uuidv4 = require("uuid/v4");

/**
 * Starts the process of adding a child
 */
export function addChildStart() {
  return { type: "ADD_CHILD_START" };
}

/**
 * Cancels the process of adding a father
 */
export function addChildCancel() {
  return { type: "ADD_CHILD_CANCEL" };
}

/**
 * Completes the process of adding a child.
 *
 * @param {Family} family The family we are adding this child to.
 * @param {Child} child The child we are adding.
 */
export function addChildEnd(family, child) {
  const newPersonId = uuidv4();
  const updatedPerson = {
    ...child,
    _id: newPersonId,
    tree: family.tree,
    spouses: []
  };
  api.postPerson(updatedPerson);
  const updatedFamily = {
    ...family,
    children: [...family.children, newPersonId]
  };
  api.patchFamily(updatedFamily);
  return {
    type: "ADD_CHILD_END",
    payload: { updatedPerson, updatedFamily }
  };
}
