import { importTree } from "../library/gedcom-input";

export function importFileStart() {
  return {
    type: "IMPORT_FILE_START"
  };
}

export function importFileCancel() {
  return {
    type: "IMPORT_FILE_CANCEL"
  };
}

export function importFileEnd(content) {
  importTree(content);
  return {
    type: "IMPORT_FILE_END"
  };
}
