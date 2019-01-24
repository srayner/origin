import React from "react";
import styled from "styled-components";
import Panel from "../ui/panel";
import PanelHeader from "../ui/panel-header";
import VerticalText from "../ui/vertical-text";
import FormRow from "../ui/form-row";
import { PrimaryButton } from "../ui/button";

const Search = props => {
  return (
    <Panel>
      <FormRow>
        <PanelHeader>Search</PanelHeader>
      </FormRow>
      <FormRow>
        <VerticalText grow="2" caption="Name" />
        <VerticalText grow="1" caption="Birth Year" />
      </FormRow>
      <FormRow>
        <PrimaryButton>Search</PrimaryButton>
      </FormRow>
    </Panel>
  );
};

export default Search;
