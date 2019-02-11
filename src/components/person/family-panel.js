import React from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import PersonButton from "./person-button";
import AddRelativeButton from "./add-relative-button";
import PersonDetail from "./person-detail";
import Modal from "../ui/modal";
import { NavLink } from "react-router-dom";
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
import {
  addSpouseStart,
  addSpouseCancel,
  addSpouseEnd
} from "../../actions/add-spouse";

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

const Link = styled(NavLink)`
  text-decoration: none;
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

  addSpouse = (person, spouse) => {
    this.props.addSpouseEnd(person, spouse);
  };

  renderFather() {
    const { parents } = this.props.person;
    if (parents && this.props.families[parents].father) {
      const father = this.props.people[this.props.families[parents].father];
      return (
        <Link to={father._id}>
          <PersonButton person={father} />
        </Link>
      );
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
    const { parents } = this.props.person;
    if (parents && this.props.families[parents].mother) {
      const mother = this.props.people[this.props.families[parents].mother];
      return (
        <Link to={mother._id}>
          <PersonButton person={mother} />
        </Link>
      );
    }
    return (
      <AddRelativeButton
        gender="female"
        caption="Add Mother"
        onClick={() => this.props.addMotherStart()}
      />
    );
  }

  renderSpousesAndChildren() {
    const { spouses } = this.props.person;
    return spouses.map(familyKey => {
      const family = this.props.families[familyKey];
      const spouseGender =
        this.props.person.gender === "male" ? "female" : "male";
      const spouseKey = spouseGender === "male" ? family.father : family.mother;
      const children = family.children.map(childKey => {
        const child = this.props.people[childKey];
        return (
          <Link to={child._id}>
            <PersonButton child person={child} />
          </Link>
        );
      });
      let spouseComponent = null;
      if (spouseKey) {
        const spouse = this.props.people[spouseKey];
        spouseComponent = (
          <Link to={spouse._id}>
            <PersonButton person={spouse} />
          </Link>
        );
      }
      if (children && !spouseKey) {
        spouseComponent = (
          <AddRelativeButton gender={spouseGender} caption="Add spouse" />
        );
      }
      return (
        <div>
          {spouseComponent}
          {children}
        </div>
      );
    });
  }

  render() {
    const { person } = this.props;
    const father = this.renderFather();
    const mother = this.renderMother();
    const spousesAndChildren = this.renderSpousesAndChildren();
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
    if (this.props.addingRelation === "spouse") {
      modal = (
        <Modal width="50%" handleClose={this.props.addSpouseCancel}>
          <PersonDetail
            person={{ gender: person.gender === "male" ? "female" : "male" }}
            cancelEditing={this.props.addSpouseCancel}
            endEditing={spouse => this.addSpouse(person, spouse)}
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
        <SubHeader>Spouses &amp; Children</SubHeader>
        {spousesAndChildren}
        <AddRelativeButton
          gender={person.gender === "male" ? "female" : "male"}
          caption="Add spouse"
          onClick={() => this.props.addSpouseStart()}
        />
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
      dispatch(addMotherStart());
    },
    addMotherCancel: () => {
      dispatch(addMotherCancel());
    },
    addMotherEnd: (child, mother, father, family) => {
      dispatch(addMotherEnd(child, mother, father, family));
    },
    addSpouseStart: () => {
      dispatch(addSpouseStart());
    },
    addSpouseCancel: () => {
      dispatch(addSpouseCancel());
    },
    addSpouseEnd: (person, spouse) => {
      dispatch(addSpouseEnd(person, spouse));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FamilyPanel);
