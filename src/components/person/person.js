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
import LifeStory from "./life-story";
import {
  addFatherStart,
  addFatherCancel,
  addFatherEnd
} from "../../actions/add-father";
import {
  addMotherStart,
  addMotherCancel,
  addMotherEnd
} from "../../actions/add-mother";
import AddRelativeButton from "./add-relative-button";

const Container = styled.div`
  position: relative;
  margin: 0;
`;

const DetailContainer = styled.div`
  margin: 10px 15px;
`;

class Person extends React.Component {
  addFather = (child, father) => {
    const family = child.parents ? this.props.families[child.parents] : null;
    const mother =
      family && family.mother ? this.props.people[family.mother] : null;
    this.props.addFatherEnd(child, father, mother, family);
  };
  addMother = (child, mother) => {
    const family = child.parents ? this.props.families[child.parents] : null;
    const father =
      family && family.father ? this.props.people[family.father] : null;
    this.props.addMotherEnd(child, mother, father, family);
  };

  fullName(person) {
    return person ? person.forenames + " " + person.surname : "unknown";
  }

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
    if (this.props.addingRelation === "father") {
      modal = (
        <Modal width="50%" handleClose={this.props.addFatherCancel}>
          <PersonDetails
            person={{ gender: "male" }}
            cancelEditing={this.props.addFatherCancel}
            endEditing={father => this.addFather(person, father)}
          />
        </Modal>
      );
    }
    if (this.props.addingRelation === "mother") {
      modal = (
        <Modal width="50%" handleClose={this.props.addMotherCancel}>
          <PersonDetails
            person={{ gender: "female" }}
            cancelEditing={this.props.addMotherCancel}
            endEditing={mother => this.addMother(person, mother)}
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
          <div>
            <LifeStory person={person} />
          </div>
          <PersonRelationships
            father={father}
            mother={mother}
            children={children}
          />
          <AddRelativeButton
            gender="male"
            caption="Add Father"
            onClick={() => this.props.addFatherStart()}
          />
          <AddRelativeButton
            gender="female"
            caption="Add Mother"
            onClick={() => this.props.addMotherStart()}
          />
        </DetailContainer>
        {modal}
      </Container>
    );
  }
}

const mapStateToProps = state => {
  return {
    addingRelation: state.app.addingRelation,
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
    },
    addFatherStart: () => {
      dispatch(addFatherStart());
    },
    addFatherCancel: () => {
      dispatch(addFatherCancel());
    },
    addFatherEnd: (child, father, mother, family) => {
      dispatch(addFatherEnd(child, father, mother, family));
    },
    addMotherStart: () => {
      dispatch(addMotherStart());
    },
    addMotherCancel: () => {
      dispatch(addMotherCancel());
    },
    addMotherEnd: (child, mother, father, family) => {
      dispatch(addMotherEnd(child, mother, father, family));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Person);
