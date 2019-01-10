export default {
  name: "A1",
  children: [
    {
      name: "B1",
      children: [
        {
          name: "C1",
          value: 100
        },
        {
          name: "C2",
          value: 300,
          children: [
            {
              name: "F1",
              value: 100
            }
          ]
        },
        {
          name: "C3",
          value: 200
        }
      ]
    },
    {
      name: "B2",
      value: 200,
      children: [
        {
          name: "D1",
          value: 100
        },
        {
          name: "D2",
          value: 300
        },
        {
          name: "D3",
          value: 200,
          children: [
            {
              name: "E1",
              value: 100
            },
            {
              name: "E2",
              value: 300
            }
          ]
        }
      ]
    }
  ]
};
