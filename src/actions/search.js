import api from "../data/api";

export function loadSearchResults(query) {
  return dispatch => {
    api.search(query).then(results => {
      dispatch({
        type: "LOAD_SEARCH_RESULTS",
        payload: { results }
      });
    });
  };
}

export function queryUpdate(query) {
  return {
    type: "QUERY_UPDATE",
    payload: { query }
  };
}
