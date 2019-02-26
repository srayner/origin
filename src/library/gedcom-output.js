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
        ],
        date: "23 FEB 2019",
        gedc: [
          "",
          {
            vers: "5.5",
            form: "LINEAGE-LINKED"
          }
        ]
      }
    ]
  };
}

function flatten(object, lines = [], level = 0) {
  Object.keys(object).forEach(key => {
    const value = object[key];
    console.log(value);
    console.log(Array.isArray(value));
    const text = Array.isArray(value) ? value[0] : value;
    lines.push(level + " " + key.toUpperCase() + " " + text);
    if (value && typeof value === "object") {
      flatten(value[1], lines, level + 1);
    }
  });
  return lines;
}
