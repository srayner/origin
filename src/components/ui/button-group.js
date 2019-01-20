import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
`;

const ButtonGroup = props => {
  return <Container>{props.children}</Container>;
};

export default ButtonGroup;
