let people = null;
let families = null;
let pitchX = null;
let pitchY = null;

export default function buildTree(tree) {
  people = tree.people;
  families = tree.families;
  pitchX = tree.pitchX;
  pitchY = tree.pitchY;
  if (people && Object.keys(people).length !== 0) {
    const rootPerson = people[Object.keys(people)[0]];
    positionPerson(rootPerson, 0, 0);
  }
}

/**
 * Position spouses
 */
function positionSpouses(person, x, y) {
  person.spouces.forEach((key, index) => {
    if (index % 2 === 0) {
      const inversion = person.gender === "male" ? 1 : -1;
      positionFamily(families[key], x + pitchX, y, inversion); // to the right of person
    } else {
      const inversion = person.gender === "male" ? -1 : 1;
      positionFamily(families[key], x - pitchX, y, inversion); // to the left of person
    }
  });
}

/*
 * Positions a family node
 */
function positionFamily(family, x, y, inverted = 1) {
  console.log("position family " + family._id + " @" + x + ", " + y);

  // already positioned?
  if (family.positioned) {
    console.log("already positioned");
    return;
  }

  // Add family node to specified position
  family.x = x;
  family.y = y;
  family.positioned = true;

  // ensure mother and father exist
  positionPerson(people[family.father], x - pitchX * inverted, y);
  positionPerson(people[family.mother], x + pitchX * inverted, y);

  // add any potential children
  family.children.forEach((key, index) => {
    positionPerson(people[key], x, y + pitchY);
  });
}

/*
 * Position a person
 */
function positionPerson(person, x, y) {
  console.log("positioning person " + person.id + "@" + x + "," + y);

  // already positioned?
  if (person.positioned) {
    console.log("already positioned");
    return;
  }

  // position person
  person.x = x;
  person.y = y;
  person.positioned = true;

  // position parents if we know about them
  if (person.parents) {
    positionFamily(families[person.parents], x, y - pitchY); // above this person
  }

  // position any potential spouses.
  positionSpouses(person, x, y);
}
