export default {
  families: {
    f1: {
      year: 1820
    },
    f2: {
      year: 1830
    }
  },
  people: {
    p1: {
      name: "Fred",
      birthYear: 1800,
      spouseFamiliies: ["f1", "f2"]
    },
    p2: {
      name: "Wilma",
      birthYear: 1801,
      spouceFamilies: ["f1"]
    },
    p3: {
      name: "Sandra",
      birthYear: 1802,
      spouceFamiles: ["f2"]
    },
    p4: {
      name: "Peter",
      birthYear: 1821,
      parents: "f1"
    },
    p5: {
      name: "Joline",
      birthYear: 1825,
      parents: "f1"
    },
    p6: {
      name: "Alexander",
      birthYear: 1822,
      parents: "f2"
    }
  }
};
