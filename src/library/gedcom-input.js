import api from "../data/api";
import { start } from "pretty-error";
const uuidv4 = require("uuid/v4");

export function importTree(content) {
  const tree = {
    _id: uuidv4(),
    name: "Imported tree"
  };

  let peopleMap = {};
  let familyMap = {};

  const importedPeople = [];
  const importedFamilies = [];

  let currentPerson = null;
  let currentFamily = null;
  const lines = content.split("\n");

  lines.forEach(line => {
    const [level, key, value] = line.split(" ");
    if (level === "0" && value === "INDI") {
      currentPerson = createNewPerson(tree._id, key);
      peopleMap[key] = currentPerson;
    }
    if (level === "0" && value === "FAM") {
      currentFamily = createNewFamily(tree._id, key);
      familyMap[key] = currentFamily;
    }
    if (level === "1" && key === "NAME") {
      setPersonName(currentPerson, value);
    }
    if (level === "1" && key === "SEX") {
      setPersonGender(currentPerson, value);
    }
    if (level === "1" && key === "HUSB") {
      setFamilyFather(currentFamily, peopleMap[value]);
    }
    if (level === "1" && key === "WIFE") {
      setFamilyMother(currentFamily, peopleMap[value]);
    }
    if (level === "1" && key === "CHIL") {
      setFamilyChild(currentFamily, peopleMap[value]);
    }
  });

  // Persist the imported data.
  api.postTree(tree);
  importedPeople.forEach(person => {
    api.postPerson(person);
  });
  importFamilies.forEach(family => {
    api.postFamily(family);
  });

  function createNewPerson(treeId) {
    return {
      _id: uuidv4(),
      tree: treeId
    };
  }

  function createNewFamily(treeId) {
    return {
      _id: uuidv4(),
      tree: treeId,
      father: null,
      mother: null,
      children: []
    };
  }

  function setPersonName(person, name) {
    const filtered = name.replace(/\//g, "");
    const parts = filtered.split(" ");
    person.surname = parts.pop();
    person.fornames = parts.join(" ");
  }

  function setPersonGender(person, gender) {
    if (gender === "M") {
      person.gender = "male";
    }
    if (gender === "F") {
      person.gender = "female";
    }
  }

  function setFamilyFather(family, father) {
    family.father = father._id;
    father.spouses.push(family._id);
  }

  function setFamilyMother(family, mother) {
    family.mother = mother._id;
    mother.spouces.push(family._id);
  }

  function setFamilyChild(family, child) {
    family.children.push(child._id);
    child.parents = family._id;
  }
}
