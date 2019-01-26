import React from "react";
import styled from "styled-components";
import Panel from "../ui/panel";
import PanelHeader from "../ui/panel-header";

const Paragraph = styled.p`
  padding: 5px;
`;

const GettingStartedPanel = props => {
  return (
    <Panel>
      <PanelHeader>Getting started</PanelHeader>
      <Paragraph>
        Build and manage family trees by entering what you alredy know manually,
        then searching the avaiable indexes to find and add more people.
      </Paragraph>
      <Paragraph>
        Start by creating a new person, and specify you want a new tree. Then
        add another person either as a parent, spouse or child. Add more people
        to grow your tree.
      </Paragraph>
    </Panel>
  );
};

export default GettingStartedPanel;
