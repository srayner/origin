export default {
  unions: {
    u1: {
      mother: p1,
      father: p2,
      marriage: {
        year: 1894,
        month: "Apr"
      }
    }
  },
  people: {
    p1: {
      forenames: "George L",
      surname: "Appleton",
      gender: "Female",
      birth: {
        year: 1874,
        month: "Jun",
        day: 12
      },
      death: {
        year: 1912,
        month: "Apr",
        day: 6
      }
    },
    p2: {
      forenames: "George L",
      surname: "Appleton",
      gender: "Male",
      birth: {
        year: 1874,
        month: "Jun",
        day: 12
      },
      death: {
        year: 1912,
        month: "Apr",
        day: 6
      }
    },
    p3: {
      forenames: "Clara",
      surname: "Appleton",
      gender: "Female",
      birth: {
        year: 1894,
        month: "Jun",
        day: 12
      },
      death: {
        year: 1902,
        month: "Apr",
        day: 6
      },
      union: "u1"
    }
  }
};
