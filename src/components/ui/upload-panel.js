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
  }
`;

const Caption = styled.div`
  font-size: 12px;
`;

const UploadPanel = props => {
  return (
    <DashedPanel>
      <FontAwesomeIcon icon={faImages} />
      <Caption>Upload media</Caption>
    </DashedPanel>
  );
};

export default UploadPanel;
