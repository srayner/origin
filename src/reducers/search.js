const initialState = {
  query: {},
  results: []
};

const search = (state = initialState, action) => {
  switch (action.type) {
    case "QUERY_UPDATE": {
      const { query } = action.payload;
      return { ...state, query };
    }
    case "LOAD_SEARCH_RESULTS": {
      const { results } = action.payload;
      return { ...state, results };
    }
    default:
      return state;
  }
};

export default search;
