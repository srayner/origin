import React from "react";
import styled from "styled-components";
import { connect } from "react-redux";

const Container = styled.div`
  margin: 0;
  padding: 10px;
  background-color: #f7f7f7;
`;

const Header = styled.h2`
  font-size: 16px;
  font-weight: 600;
`;

const SubHeader = styled.h3`
  font-size: 14px;
  font-weight: 400;
`;

class FamilyPanel extends React.Component {
  render() {
    return (
      <Container>
        <Header>Family</Header>
        <SubHeader>Parents</SubHeader>
        <SubHeader>Spouces &amp; Children</SubHeader>
      </Container>
    );
  }
}

const mapStateToProps = state => {
  return {
    people: state.people,
    families: state.families
  };
};

export default connect(
  mapStateToProps,
  null
)(FamilyPanel);
