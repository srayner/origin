const uuidv4 = require("uuid/v4");

export function importTree(content) {
  let currentPerson = null;
  const lines = content.split("\n");
  lines.array.forEach(line => {
    const { level, key, value } = line.split(" ");
    if (level === "0" && currentPerson) {
      savePerson(currentPerson);
      currentPerson = null;
    }
    if (level === "0" && value === "INDI") {
      currentPerson = createNewPerson();
    }
    if (level === "1" && KEY === "NAME") {
      setPersonName(currentPerson, value);
    }
    if (level === "1" && KEY === "SEX") {
      setPersonGender(currentPerson, value);
    }
  });

  function createNewPerson() {
    return {
      _id: uuidv4()
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
