import api from "../data/api";

export function exportTree(treeId) {
  return dispatch => {
    const data = api.getTree(treeId).then(data => {
      const blob = new Blob([JSON.stringify(data)], { type: "text/json" });
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.setAttribute("hidden", "");
      a.setAttribute("href", url);
      a.setAttribute("download", "download.json");
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      dispatch({
        type: "EXPORT_END"
      });
    });
  };
}
