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
import { loadTreeForPerson } from "../../actions/trees";
import {
  deletePersonStart,
  deletePersonCancel,
  deletePersonEnd
} from "../../actions/delete-person";
import DeletePerson from "./delete-person";

const Container = styled.div`
  position: relative;
  margin: 0;
`;

const DetailContainer = styled.div`
  display: flex;
  justify-content: center;
  margin: 0;
`;

class Person extends React.Component {
  componentDidMount() {
    this.props.loadTreeForPerson(this.props.match.params.personId);
  }

  render() {
    const person = this.props.people[this.props.match.params.personId];
    if (!person) {
      return null;
    }
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
    if (this.props.deletingPerson) {
      modal = (
        <Modal width="50%" handleClose={this.props.deletePersonCancel}>
          <DeletePerson
            person={person}
            submit={() =>
              this.props.deletePersonEnd(
                person,
                this.props.people,
                this.props.families
              )
            }
            cancel={this.props.deletePersonCancel}
          />
        </Modal>
      );
    }
    return (
      <Container>
        <FloatingButton
          top="10px"
          left="10px"
          onClick={() => {
            this.props.history.push("/tree/" + person.tree);
          }}
        >
          Show Tree
        </FloatingButton>
        <FloatingButton
          top="10px"
          right="80px"
          onClick={() => {
            this.props.startEditing({ ...person });
          }}
        >
          Edit
        </FloatingButton>
        <FloatingButton
          top="10px"
          right="10px"
          onClick={() => {
            this.props.deletePersonStart(person._id);
          }}
        >
          Delete
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
    deletingPerson: state.app.deletingPerson,
    editingPerson: state.person.person,
    people: state.people,
    families: state.families
  };
};

const mapDispatchToProps = dispatch => {
  return {
    loadTreeForPerson: personId => {
      dispatch(loadTreeForPerson(personId));
    },
    startEditing: person => {
      dispatch(startEditing(person));
    },
    cancelEditing: () => {
      dispatch(cancelEditing());
    },
    endEditing: updatedPerson => {
      dispatch(endEditing(updatedPerson));
    },
    deletePersonStart: personId => {
      dispatch(deletePersonStart(personId));
    },
    deletePersonCancel: () => {
      dispatch(deletePersonCancel());
    },
    deletePersonEnd: (person, people, families) => {
      dispatch(deletePersonEnd(person, people, families));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Person);
