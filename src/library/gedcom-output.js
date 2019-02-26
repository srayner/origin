export function buildGedCom() {
  const head = getHead();
  console.log(flatten(head));
}

function getHead() {
  return {
    head: [
      "",
      {
        sour: [
          "PAF",
          {
            name: "Origin Genealogy File",
            ver: "1.0"
          }
        ]
      }
    ]
  };
}

function flatten(object, lines = [], level = 0) {
  Object.keys(object).forEach(key => {
    const value = object[key];
    lines.push(level + " " + key.toUpperCase() + " " + value[0]);
    if (value && typeof value === "object") {
      flatten(value[1], lines, level + 1);
    }
  });
  return lines;
}
