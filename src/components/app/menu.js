import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

const Container = styled.ul`
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;
`;

const Item = styled.li`
  margin: 0;
  padding: 0;
  color: white;
`;

const StyledLink = styled(NavLink)`
  display: inline-block;
  margin: 4px 0 0 0;
  padding: 10px;
  border: none;
  border-bottom: 4px solid;
  border-color: transparent;
  color: #ddd;
  text-decoration: none;
  &.active {
    border-color: orange;
    color: white;
  }
  :hover {
    color: white;
  }
`;

const Menu = props => {
  console.log(props);
  return (
    <Container>
      <Item>
        <StyledLink exact to="/">
          Home
        </StyledLink>
      </Item>
      <StyledLink exact to="/tree">
        Tree
      </StyledLink>
      <Item>
        <StyledLink to="/profile">Profile</StyledLink>
      </Item>
    </Container>
  );
};

export default Menu;
