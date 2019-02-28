import React from "react";
import Modal from "../ui/modal";

const FileImport = props => {
  let fileReader;

  const handleFileRead = event => {
    const content = fileReader.result;
    props.handleImport(content);
  };

  const handleFileChosen = event => {
    const file = event.target.files[0];
    fileReader = new FileReader();
    fileReader.onloadend = handleFileRead;
    fileReader.readAsText(file);
  };

  return (
    <Modal handleClose={props.handleClose}>
      <input type="file" onChange={handleFileChosen} />
    </Modal>
  );
};

export default FileImport;
