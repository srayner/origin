import React from "react";
import styled from "styled-components";
import { faImages } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const DashedPanel = styled.div`
  border: 1px dashed #a9a9a9;
  height: 220px;
  width: 140px;
  font-size: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 20px 10px;
  flex-direction: column;
  color: #000;
  border-color: #000;
  &:hover {
    color: #0079a3;
    border-color: #0079a3;
    cursor: pointer;
  }
`;

const Caption = styled.div`
  font-size: 12px;
`;

const Input = styled.input`
  display: none;
`;

class UploadPanel extends React.Component {
  fileInputRef = React.createRef();
  state = {
    hightlight: false,
    files: [],
    uploading: false,
    uploadProgress: {},
    successfullUploaded: false
  };

  openFileDialog = () => {
    if (this.props.disabled) return;
    this.fileInputRef.current.click();
  };

  onDragOver = event => {
    event.preventDefault();
    if (this.props.disabled) return;
    this.setState({ hightlight: true });
  };

  onDragLeave = () => {
    this.setState({ hightlight: false });
  };

  onDrop = event => {
    event.preventDefault();
    if (this.props.disabled) return;
    const files = event.dataTransfer.files;
    if (this.props.onFilesAdded) {
      const array = this.fileListToArray(files);
      this.props.onFilesAdded(array);
    }
    this.setState({ hightlight: false });
  };

  onFilesAdded = event => {
    if (this.props.disabled) return;
    const files = event.target.files;
    if (this.props.onFilesAdded) {
      const array = this.fileListToArray(files);
      this.props.onFilesAdded(array);
    }
  };

  fileListToArray = list => {
    const array = [];
    for (var i = 0; i < list.length; i++) {
      array.push(list.item(i));
    }
    return array;
  };

  render() {
    return (
      <DashedPanel
        onDragOver={this.onDragOver}
        onDragLeave={this.onDragLeave}
        onDrop={this.onDrop}
        onClick={this.openFileDialog}
      >
        <FontAwesomeIcon icon={faImages} />
        <Caption>Upload media</Caption>
        <Input
          ref={this.fileInputRef}
          type="file"
          multiple
          onChange={this.onFilesAdded}
        />
      </DashedPanel>
    );
  }
}

export default UploadPanel;
