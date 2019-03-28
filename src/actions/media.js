import api from "../data/api";

export function upload(files) {
  files.forEach(file => {
    api.postMedia(file);
  });
  return { type: "UPLOAD_BEGIN" };
}
