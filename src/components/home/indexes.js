import React from "react";
import styled from "styled-components";
import Panel from "../ui/panel";
import PanelHeader from "../ui/panel-header";

const Indexes = props => {
  return (
    <Panel>
      <PanelHeader>Searchable Indexes</PanelHeader>
      <ul>
        <li>TMB St Mark Baptism Register</li>
        <li>Hilgay All Saints Baptism Register</li>
      </ul>
    </Panel>
  );
};

export default Indexes;
