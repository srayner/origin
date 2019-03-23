export const loadState = () => {
  try {
    const serialisedState = localStorage.getItem("state");
    if (serialisedState === null) {
      return undefined;
    }
    return JSON.parse(serialisedState);
  } catch (err) {
    return undefined;
  }
};

export const saveState = state => {
  try {
    console.log(state);
    const serialisedState = JSON.stringify(state);
    console.log(serialisedState);
    localStorage.setItem("state", serialisedState);
  } catch (err) {
    console.log(err);
  }
};
