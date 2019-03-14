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
 * @param {Person} person   The person we are deleting.
 * @param {Array}  people   All people in the tree.
 * @param {Array}  families All families in the tree.
 */
export function deletePersonEnd(person, people, families) {
  const updatedPeople = [];
  const updatedFamilies = [];
  const deletedFamilies = [];
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
    if (spouseFamily.children.length === 0) {
      const spouse =
        person.gender === "male"
          ? people[spouseFamily.mother]
          : people[spouseFamily.father];
      const updatedSpouses = spouse.spouses.filter(familyId => {
        return familyId !== spouseFamily._id;
      });
      const updatedSpouse = { ...spouse, spouses: updatedSpouses };
      api.patchPerson(updatedSpouse);
      updatedPeople.push(updatedSpouse);
      api.deleteFamily(spouseFamily._id);
      deletedFamilies.push(spouseFamily._id);
    } else {
      const updatedSpouseFamily = {
        ...spouseFamily,
        father: person.gender === "male" ? null : spouseFamily.father,
        mother: person.gender === "male" ? spouseFamily.mother : null
      };
      api.patchFamily(updatedSpouseFamily);
      updatedFamilies.push(updatedSpouseFamily);
    }
  });
  api.deletePerson(person._id);
  return {
    type: "DELETE_PERSON_END",
    payload: { person, updatedPeople, updatedFamilies, deletedFamilies }
  };
}
