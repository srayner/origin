import React from "react";
import styled from "styled-components";
import Panel from "../ui/panel";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import BlackButton from "../ui/black-button";
import Link from "../ui/link";
import { NavLink } from "react-router-dom";

const Icon = styled(FontAwesomeIcon)`
  margin-right: 3px;
`;

const HeaderRow = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Header = styled.h2`
  font-size: 20px;
  margin: 5px;
`;

const Trees = styled.ul`
  margin: 5px;
  padding: 0;
`;

const Tree = styled.li`
  margin: 0;
  padding: 5px;
  list-style: none;
  &:nth-child(odd) {
    background-color: #f0f0f0;
  }
`;

const StyledLink = styled(NavLink)`
  color: steelblue;
  text-decoration: none;
`;

const TreesPanel = props => {
  const trees = Object.keys(props.trees).map((key, index) => {
    return (
      <Tree key={index}>
        <StyledLink to={"/tree/" + props.trees[key].id}>
          {props.trees[key].name}
        </StyledLink>
      </Tree>
    );
  });
  return (
    <Panel>
      <HeaderRow>
        <Header>Trees</Header>
        <BlackButton
          onClick={() => {
            props.onNewTree();
          }}
        >
          <Icon icon={faPlus} />
          New tree
        </BlackButton>
      </HeaderRow>
      <Trees>{trees}</Trees>
    </Panel>
  );
};

export default TreesPanel;
