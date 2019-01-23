import React from "react";
import styled from "styled-components";
import Panel from "../ui/panel";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Icon = styled(FontAwesomeIcon)`
  margin-right: 3px;
`;

const Link = styled.span`
  &:hover {
    color: orange;
    cursor: pointer;
  }
`;

const TreesPanel = props => {
  return (
    <Panel>
      <h2>Trees</h2>
      <Link>
        <Icon icon={faPlus} />
        Add new tree
      </Link>
    </Panel>
  );
};

export default TreesPanel;
