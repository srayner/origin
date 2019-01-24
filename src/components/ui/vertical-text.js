import React from "react";
import styled from "styled-components";
import Text from "./text";
import Label from "./label";

const Container = styled.div`
  margin: 0;
  padding: 0 5px;
  flex-grow: ${props => {
    return props.grow ? props.grow : "1";
  }};
`;

const VerticalText = props => {
  return (
    <Container grow={props.grow}>
      <Label>{props.caption}</Label>
      <Text value={props.value} onChange={props.onChange} />
    </Container>
  );
};

export default VerticalText;
