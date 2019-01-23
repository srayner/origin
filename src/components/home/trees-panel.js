import React from "react";
import styled from "styled-components";
import Panel from "../ui/panel";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Icon = styled(FontAwesomeIcon)`
  margin-right: 3px;
`;

const Link = styled.span`
  margin-bottom: 10px;
  &:hover {
    color: orange;
    cursor: pointer;
  }
`;

const Trees = styled.ul`
  margin: 0;
  padding: 0;
`;

const Tree = styled.li`
  margin: 0;
  padding: 5px 0;
  list-style: none;
`;

const TreesPanel = props => {
  const trees = Object.keys(props.trees).map((key, index) => {
    return <Tree key={index}>{props.trees[key].name}</Tree>;
  });
  return (
    <Panel>
      <h2>Trees</h2>
      <Link
        onClick={() => {
          props.onNewTree();
        }}
      >
        <Icon icon={faPlus} />
        Add new tree
      </Link>
      <Trees>{trees}</Trees>
    </Panel>
  );
};

export default TreesPanel;
