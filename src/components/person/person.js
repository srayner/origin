import React from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import PersonDetails from "./person-detail";
import PersonRelationships from "./person-relationships";
import PersonTitle from "./person-title";
import PersonMenu from "./person-menu";
import FloatingButton from "../ui/floating-button";
import { startEditing, cancelEditing, endEditing } from "../../actions/person";
import Modal from "../ui/modal";
import { Button, PrimaryButton } from "../ui/button";
import ButtonGroup from "../ui/button-group";

const Container = styled.div`
  position: relative;
  margin: 0;
`;

const DetailContainer = styled.div`
  margin: 10px 15px;
`;

class Person extends React.Component {
  render() {
    const person = this.props.people[this.props.match.params.personId];
    let father = null;
    let mother = null;
    let children = [];
    if (person.parents) {
      const parents = this.props.families[person.parents];
      father = this.props.people[parents.father];
      mother = this.props.people[parents.mother];
    }

    if (person.spouces) {
      person.spouces.forEach(key => {
        const family = this.props.families[key];
        family.children.forEach(p => {
          children.push(this.props.people[p]);
        });
      });
    }

    const modal = this.props.editingPerson ? (
      <Modal width="50%" handleClose={this.props.cancelEditing}>
        <PersonDetails person={this.props.editingPerson} />
        <ButtonGroup>
          <PrimaryButton
            onClick={() => {
              this.props.endEditing();
            }}
          >
            OK
          </PrimaryButton>
          <Button
            onClick={() => {
              this.props.cancelEditing();
            }}
          >
            Cancel
          </Button>
        </ButtonGroup>
      </Modal>
    ) : null;

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
          <PersonDetails person={person} />
          <PersonRelationships
            father={father}
            mother={mother}
            children={children}
          />
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
    endEditing: () => {
      dispatch(endEditing());
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Person);
