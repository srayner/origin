import React from "react";
import styled from "styled-components";
import Panel from "../ui/panel";
import { faPlus, faFileImport } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import BlackButton from "../ui/black-button";
import { NavLink } from "react-router-dom";

const Icon = styled(FontAwesomeIcon)`
  margin-right: 3px;
`;

const HeaderRow = styled.div`
  display: flex;
  justify-content: flex-start;
`;

const Header = styled.h2`
  font-size: 20px;
  margin: 5px;
  margin-right: auto;
`;

const Trees = styled.ul`
  margin: 5px;
  padding: 0;
`;

const Tree = styled.li`
  margin: 0;
  padding: 5px;
  list-style: none;
  display: flex;
  justify-content: space-between;
  &:nth-child(odd) {
    background-color: #f0f0f0;
  }
`;

const StyledLink = styled(NavLink)`
  color: steelblue;
  text-decoration: none;
`;

const ExportLink = styled.span`
  cursor: pointer;
  color: #777;
  &:hover {
    color: #000;
  }
`;

const TreesPanel = props => {
  let trees = null;
  if (props.trees) {
    trees = Object.keys(props.trees).map((key, index) => {
      const id = props.trees[key]._id;
      return (
        <Tree key={index}>
          <StyledLink to={"/tree/" + id}>{props.trees[key].name}</StyledLink>
          <ExportLink onClick={() => props.onExportTree(id)}>export</ExportLink>
        </Tree>
      );
    });
  }
  return (
    <Panel>
      <HeaderRow>
        <Header>Trees</Header>
        <BlackButton
          onClick={() => {
            props.onImportTree();
          }}
        >
          <Icon icon={faFileImport} />
          Import
        </BlackButton>
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
