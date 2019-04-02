import api from "../data/api";

export function loadMediaForPerson(personId) {
  return dispatch => {
    api.indexMedia(personId).then(data => {
      dispatch({
        type: "LOAD_MEDIA_END",
        payload: data
      });
    });
  };
}

export function upload(files) {
  files.forEach(file => {
    api.postMedia(file);
  });
  return { type: "UPLOAD_BEGIN" };
}
