import api from "../data/api";

function getBase64(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = error => reject(error);
  });
}

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

export function upload(personId, files) {
  files.forEach(file => {
    getBase64(file).then(data => {
      const media = { personId, name: file.name, type: file.type, data };
      api.postMedia(media);
    });
  });
  return { type: "UPLOAD_BEGIN" };
}
