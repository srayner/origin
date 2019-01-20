import styled from "styled-components";

export const LargeCloseButton = styled.button`
  border: none;
  border-radius: 50%;
  margin: 0 4px;
  padding: 0 8px;
  width: 32px;
  height: 32px;
  font-size: 20px;
  color: #999;
  background-color: transparent;
  font-family: "Roboto", sans-serif;
  line-height: 1.2;
  white-space: nowrap;
  cursor: pointer;
  position: absolute;
  top: 8px;
  right: 6px;
  :hover {
    background-color: #ccc;
    color: #666;
  }
  :focus {
    outline: none;
  }
`;
