export const families = {
  f1: { id: "f1", father: "p1", mother: "p2", children: ["p7"] },
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
    name: "John",
    gender: "male",
    parents: null,
    spouces: ["f1"]
  },
  p2: {
    id: "p2",
    name: "Sarah",
    gender: "female",
    parents: null,
    spouces: ["f1"]
  },
  p3: {
    id: "p3",
    name: "William",
    gender: "male",
    parents: null,
    spouces: ["f2"]
  },
  p4: {
    id: "p4",
    name: "Joanne",
    gender: "female",
    parents: null,
    spouces: ["f2"]
  },
  p5: {
    id: "p5",
    name: "Henry",
    gender: "male",
    parents: null,
    spouces: ["f3"]
  },
  p6: {
    id: "p6",
    name: "Amberlyn",
    gender: "female",
    parents: null,
    spouces: ["f3"]
  },
  p7: {
    id: "p7",
    name: "Lucus",
    gender: "male",
    parents: "f1",
    spouces: ["f4"]
  },
  p8: {
    id: "p8",
    name: "Caroline",
    gender: "female",
    parents: "f2",
    spouces: ["f4"]
  },
  p9: {
    id: "p9",
    name: "Wilfred",
    gender: "male",
    parents: null,
    spouces: ["f5"]
  },
  p10: {
    id: "p10",
    name: "Anne",
    gender: "female",
    parents: "f3",
    spouces: ["f5"]
  },
  p11: {
    id: "p11",
    name: "Sharlene",
    gender: "female",
    parents: "f3",
    spouces: []
  },
  p12: {
    id: "p12",
    name: "Charles",
    gender: "male",
    parents: "f3",
    spouces: ["f6"]
  },
  p13: {
    id: "p13",
    name: "Jayne",
    gender: "female",
    parents: "f4",
    spouces: ["f6", "f7"]
  },
  p14: {
    id: "p14",
    name: "Frederick",
    gender: "male",
    parents: null,
    spouces: ["f7"]
  },
  p15: {
    id: "p15",
    name: "Jonathon",
    gender: "male",
    parents: "f5",
    spouces: []
  },
  p16: {
    id: "p16",
    name: "Alexandra",
    gender: "female",
    parents: "f6",
    spouces: []
  },
  p17: {
    id: "p17",
    name: "Stephen",
    gender: "male",
    parents: "f7",
    spouces: []
  }
};
