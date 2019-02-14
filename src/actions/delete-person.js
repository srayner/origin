import api from "../data/api";

/**
 * Starts the process of deleting a person
 */
export function deletePersonStart(personId) {
  return {
    type: "DELETE_PERSON_START",
    payload: { personId }
  };
}

/**
 * Cancels the process of deleting a person
 */
export function deletePersonCancel() {
  return { type: "DELETE_PERSON_CANCEL" };
}

/**
 * Completes the process of deleting a person.
 *
 * @param {Person} person The person we are deleting.
 * @param {Array} families All families in the tree.
 */
export function deletePersonEnd(person, families) {
  const updatedFamilies = [];
  if (person.parents) {
    const parentFamily = families[person.parents];
    const filteredChildren = parentFamily.children.filter(childId => {
      return childId !== person._id;
    });
    const updatedParentFamily = {
      ...parentFamily,
      children: filteredChildren
    };
    api.patchFamily(updatedParentFamily);
    updatedFamilies.push(updatedParentFamily);
  }
  person.spouses.forEach(key => {
    const spouseFamily = families[key];
    const updatedSpouseFamily = {
      ...spouseFamily,
      father: person.gender === "male" ? null : spouseFamily.father,
      mother: person.gender === "male" ? spouseFamily.mother : null
    };
    api.patchFamily(updatedSpouseFamily);
    updatedFamilies.push(updatedSpouseFamily);
  });
  api.deletePerson(person._id);
  return {
    type: "DELETE_PERSON_END",
    person,
    updatedFamilies
  };
}
