import React from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import PersonDetails from "./person-detail";
import PersonTitle from "./person-title";
import PersonMenu from "./person-menu";
import FloatingButton from "../ui/floating-button";
import { startEditing, cancelEditing, endEditing } from "../../actions/person";
import Modal from "../ui/modal";
import FamilyPanel from "./family-panel";
import FactsPanel from "./facts-panel";

const Container = styled.div`
  position: relative;
  margin: 0;
`;

const DetailContainer = styled.div`
  display: flex;
  margin: 0;
`;

class Person extends React.Component {
  render() {
    const person = this.props.people[this.props.match.params.personId];
    let modal = null;
    if (this.props.editingPerson) {
      modal = (
        <Modal width="50%" handleClose={this.props.cancelEditing}>
          <PersonDetails
            person={this.props.editingPerson}
            cancelEditing={this.props.cancelEditing}
            endEditing={this.props.endEditing}
          />
        </Modal>
      );
    }
    return (
      <Container>
        <FloatingButton
          top="10px"
          right="10px"
          onClick={() => {
            this.props.startEditing({ ...person });
          }}
        >
          Edit
        </FloatingButton>
        <PersonTitle person={person} />
        <PersonMenu />
        <DetailContainer>
          <FactsPanel person={person} />
          <FamilyPanel person={person} />
        </DetailContainer>
        {modal}
      </Container>
    );
  }
}

const mapStateToProps = state => {
  return {
    editingPerson: state.person.person,
    people: state.people,
    families: state.families
  };
};

const mapDispatchToProps = dispatch => {
  return {
    startEditing: person => {
      dispatch(startEditing(person));
    },
    cancelEditing: () => {
      dispatch(cancelEditing());
    },
    endEditing: updatedPerson => {
      dispatch(endEditing(updatedPerson));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Person);
