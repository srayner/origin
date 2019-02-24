import React from "react";
import styled from "styled-components";
import theme from "../../data/theme";
import { ThemeProvider } from "styled-components";

const Container = styled.div`
  height: 100px;
  background-color: ${props => props.theme.carbon};
  display: flex;
  justify-content: center;
  padding: 20px;
`;

const Heading = styled.h1`
  font-family: "Open Sans";
  font-size: 36px;
  font-weight: 600;
  color: white;
`;

const ProfileTile = props => {
  return (
    <ThemeProvider theme={theme}>
      <Container>
        <Heading>Origin Profile</Heading>
      </Container>
    </ThemeProvider>
  );
};

export default ProfileTile;
