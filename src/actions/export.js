import api from "../data/api";
import { buildGedCom } from "../library/gedcom-output";

export function exportTree(treeId) {
  return dispatch => {
    const data = api.getTree(treeId).then(data => {
      console.log(data);
      const { people, families } = data;
      const gedCom = buildGedCom({}, people, families);
      const blob = new Blob(gedCom, { type: "text/plain" });
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
