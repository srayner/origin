import api from "../data/api";
const uuidv4 = require("uuid/v4");

export function importTree(content) {
  const tree = {
    _id: uuidv4(),
    name: "Imported tree"
  };
  //api.postTree(tree);

  let peopleMap = {};

  let importedPeople = [];

  let currentPerson = null;
  const lines = content.split("\n");

  lines.forEach(line => {
    const [level, key, value] = line.split(" ");
    console.log(level, key, value);
    if (level === "0" && currentPerson) {
      savePerson(currentPerson);
      currentPerson = null;
    }
    if (level === "0" && value === "INDI") {
      currentPerson = createNewPerson(tree._id, key);
      peopleMap[key] = currentPerson;
    }
    if (level === "1" && key === "NAME") {
      setPersonName(currentPerson, value);
    }
    if (level === "1" && key === "SEX") {
      setPersonGender(currentPerson, value);
    }
  });

  function createNewPerson(treeId) {
    return {
      _id: uuidv4(),
      tree: treeId
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

  function savePerson(person) {
    console.log(person);
  }
}
