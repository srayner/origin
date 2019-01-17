let people = null;
let families = null;
let pitchX = null;

export default function tidy(tree) {
  people = tree.people;
  families = tree.families;
  pitchX = tree.pitchX;
  spreadNodes();
  pullSpoucesClose();
}
/*
 * Spreads out people so that they are not coliding
 */
export function spreadNodes() {
  Object.keys(people).forEach(key => {
    const person = people[key];
    while (peopleColiding(person)) {
      shiftOtherNodes(person);
    }
  });
}

export function pullSpoucesClose() {
  Object.keys(families).forEach(key => {
    const family = families[key];
    const father = people[family.father];
    if (father.x < family.x) {
      father.x = family.x - pitchX;
    } else {
      father.x = family.x + pitchX;
    }
    const mother = people[family.mother];
    if (mother.x < family.x) {
      mother.x = family.x - pitchX;
    } else {
      mother.x = family.x + pitchX;
    }
  });
}

/*
 * Tests if a specific person is coliding with any others.
 */
function peopleColiding(person) {
  var result = false;
  Object.keys(people).forEach(key => {
    const other = people[key];
    if (person.x === other.x && person.y === other.y && person.id < other.id) {
      console.log("Collision: " + person.id + " " + other.id);
      result = true;
    }
  });

  return result;
}

function shiftOtherNodes(person) {
  console.log("shifting");

  // Shift other people
  Object.keys(people).forEach(key => {
    const other = people[key];
    if (other.y === person.y && other.x >= person.x && other.id !== person.id) {
      other.x += pitchX;
    }
  });

  // Shift other families
  Object.keys(families).forEach(key => {
    const other = families[key];
    if (other.y === person.y && other.x >= person.x) {
      other.x += pitchX;
    }
  });
}
