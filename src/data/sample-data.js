export const families = {
  f1: {
    id: "f1",
    father: "p1",
    mother: "p2",
    children: ["p7", "p18", "p19"]
  },
  f2: { id: "f2", father: "p3", mother: "p4", children: ["p8"] },
  f3: {
    id: "f3",
    father: "p5",
    mother: "p6",
    children: ["p10", "p11", "p12"]
  },
  f4: { id: "f4", father: "p7", mother: "p8", children: ["p13"] },
  f5: { id: "f5", father: "p9", mother: "p10", children: ["p15"] },
  f6: { id: "f6", father: "p12", mother: "p13", children: ["p16"] },
  f7: { id: "f7", father: "p14", mother: "p13", children: ["p17"] }
};

export const people = {
  p1: {
    id: "p1",
    forenames: "John",
    surname: "Appleton",
    gender: "male",
    parents: null,
    spouces: ["f1"],
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
    id: "p2",
    forenames: "Sarah",
    surname: "Keys",
    gender: "female",
    parents: null,
    spouces: ["f1"],
    birth: {
      year: 1876,
      month: "May",
      day: 23
    },
    death: {
      year: 1922,
      month: "Feb",
      day: 16
    }
  },
  p3: {
    id: "p3",
    forenames: "William",
    surname: "Fletcher",
    gender: "male",
    parents: null,
    spouces: ["f2"],
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
  p4: {
    id: "p4",
    forenames: "Joanne",
    surname: "Baynes",
    gender: "female",
    parents: null,
    spouces: ["f2"],
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
  p5: {
    id: "p5",
    forenames: "Henry",
    surname: "Coats",
    gender: "male",
    parents: null,
    spouces: ["f3"],
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
  p6: {
    id: "p6",
    forenames: "Amberlyn",
    surname: "James",
    gender: "female",
    parents: null,
    spouces: ["f3"],
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
  p7: {
    id: "p7",
    forenames: "Lucus",
    surname: "Appleton",
    gender: "male",
    parents: "f1",
    spouces: ["f4"],
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
  p8: {
    id: "p8",
    forenames: "Caroline",
    surname: "Fletcher",
    gender: "female",
    parents: "f2",
    spouces: ["f4"],
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
  p9: {
    id: "p9",
    forenames: "Wilfred",
    surname: "Akred",
    gender: "male",
    parents: null,
    spouces: ["f5"],
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
  p10: {
    id: "p10",
    forenames: "Anne",
    surname: "Coats",
    gender: "female",
    parents: "f3",
    spouces: ["f5"],
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
  p11: {
    id: "p11",
    forenames: "Sharlene",
    surname: "Coats",
    gender: "female",
    parents: "f3",
    spouces: [],
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
  p12: {
    id: "p12",
    forenames: "Charles",
    surname: "Coats",
    gender: "male",
    parents: "f3",
    spouces: ["f6"],
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
  p13: {
    id: "p13",
    forenames: "Jayne",
    surname: "Appleton",
    gender: "female",
    parents: "f4",
    spouces: ["f6", "f7"],
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
  p14: {
    id: "p14",
    forenames: "Frederick",
    surname: "Swanson",
    gender: "male",
    parents: null,
    spouces: ["f7"],
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
  p15: {
    id: "p15",
    forenames: "Jonathon",
    surname: "Akred",
    gender: "male",
    parents: "f5",
    spouces: [],
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
  p16: {
    id: "p16",
    forenames: "Alexandra",
    surname: "Coats",
    gender: "female",
    parents: "f6",
    spouces: [],
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
  p17: {
    id: "p17",
    forenames: "Stephen",
    surname: "Swanson",
    gender: "male",
    parents: "f7",
    spouces: [],
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

  p18: {
    id: "p18",
    forenames: "John Alan",
    surname: "Appleton",
    gender: "male",
    parents: "f1",
    spouces: [],
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

  p19: {
    id: "p19",
    forenames: "George W",
    surname: "Appleton",
    gender: "male",
    parents: "f1",
    spouces: [],
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
  }
};
