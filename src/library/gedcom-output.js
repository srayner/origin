export function buildGedCom(user, people, families) {
  const identityMap = {};
  const lines = getHead();
  let i = 0;
  Object.keys(people).forEach(key => {
    i++;
    const person = people[key];
    const identity = `@I${i}@`;
    const gender = person.gender ? person.gender.toUpperCase()[0] : "U";
    lines.push(`0 ${identity} INDI`);
    lines.push(`1 NAME ${person.forenames} /${person.surname}/`);
    lines.push(`1 SEX ${gender}`);
    identityMap[person._id] = identity;
  });
  let f = 0;
  Object.keys(families).forEach(key => {
    f++;
    const family = families[key];
    const identity = `@F${f}@`;
    lines.push(`0 ${identity} FAM`);
    identityMap[identity] = identity;
  });
  console.log(lines);
  return lines.join("/n");
}

function getHead() {
  return [
    "0 HEAD",
    "1 SOUR PAF",
    "2 NAME Origin Genealogy File",
    "2 VER 1.0",
    "1 DATE 26 FEB 2009",
    "1 GEDC",
    "2 VERS 5.5",
    "2 FORM LINEAGE-LINKED"
  ];
}
