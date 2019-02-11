import api from "../data/api";
const uuidv4 = require("uuid/v4");

/**
 * Starts the process of adding a spouse
 */
export function addSpouseStart() {
  return { type: "ADD_SPOUSE_START" };
}

/**
 * Cancels the process of adding a spouse
 */
export function addSpouseCancel() {
  return { type: "ADD_SPOUSE_CANCEL" };
}

/**
 * Completes the process of adding a spouse.
 *
 * @param {Person} person The person we are adding a spouse to.
 * @param {Person} spouse The spouse we are adding.
 */
export function addSpouseEnd(person, spouse) {
  console.log(person);
  const newFamilyId = uuidv4();
  const updatedSpouse = {
    ...spouse,
    _id: uuidv4(),
    tree: person.tree,
    spouses: [newFamilyId]
  };
  api.postPerson(updatedSpouse);
  const updatedFamily = {
    _id: newFamilyId,
    father: person.gender === "male" ? person._id : spouse._id,
    mother: person.gender === "male" ? spouse._id : person._id,
    children: []
  };
  api.postFamily(updatedFamily);
  const updatedPerson = {
    ...person,
    spouses: [...person.spouses, updatedSpouse._id]
  };
  api.postPerson(updatedPerson);
  return {
    type: "ADD_SPOUSE_END",
    payload: { updatedPerson, updatedSpouse, updatedFamily }
  };
}
