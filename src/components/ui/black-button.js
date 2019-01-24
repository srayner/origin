import styled from "styled-components";

const BlackButton = styled.button`
  padding: 5px 10px;
  border: none;
  border-radius: 3px;
  background-color: #333;
  color: white;
  font-size: 14px;
  &:hover {
    background-color: black;
  }
  &:focus {
    outline: none;
  }
`;

export default BlackButton;
