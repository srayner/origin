import React from "react";
import Panel from "../ui/panel";
import PanelHeader from "../ui/panel-header";
import styled from "styled-components";

const List = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
`;

const Item = styled.li`
  padding: 5px;
`;

const Indexes = props => {
  return (
    <Panel>
      <PanelHeader>Searchable Indexes</PanelHeader>
      <List>
        <Item>TMB St Mark Baptism Register</Item>
        <Item>Hilgay All Saints Baptism Register</Item>
      </List>
    </Panel>
  );
};

export default Indexes;
