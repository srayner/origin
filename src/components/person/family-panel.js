import React from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import PersonButton from "./person-button";
import AddRelativeButton from "./add-relative-button";
import PersonDetail from "./person-detail";
import Modal from "../ui/modal";

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

  renderFather() {
    const { parents } = this.props.person;
    if (parents && this.props.families[parents].father) {
      const father = this.props.people[this.props.families[parents].father];
      return <PersonButton person={father} />;
    }
    return (
      <AddRelativeButton
        gender="male"
        caption="Add Father"
        onClick={() => this.props.addFatherStart()}
      />
    );
  }

  renderMother() {
    console.log(this.props);
    const { parents } = this.props.person;
    if (parents && this.props.families[parents].mother) {
      const mother = this.props.people[this.props.families[parents].mother];
      return <PersonButton person={mother} />;
    }
    return (
      <AddRelativeButton
        gender="female"
        caption="Add Mother"
        onClick={() => this.props.addMotherStart()}
      />
    );
  }

  render() {
    const { person } = this.props;
    const father = this.renderFather();
    const mother = this.renderMother();
    let modal = null;
    if (this.props.addingRelation === "father") {
      modal = (
        <Modal width="50%" handleClose={this.props.addFatherCancel}>
          <PersonDetail
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
          <PersonDetail
            person={{ gender: "female" }}
            cancelEditing={this.props.addMotherCancel}
            endEditing={mother => this.addMother(person, mother)}
          />
        </Modal>
      );
    }
    return (
      <Container>
        <Header>Family</Header>
        <SubHeader>Parents</SubHeader>
        {father}
        {mother}
        <SubHeader>Spouces &amp; Children</SubHeader>
        {modal}
      </Container>
    );
  }
}

const mapStateToProps = state => {
  return {
    addingRelation: state.app.addingRelation,
    people: state.people,
    families: state.families
  };
};

const mapDispatchToProps = dispatch => {
  return {
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
      console.log("fired");
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
)(FamilyPanel);
