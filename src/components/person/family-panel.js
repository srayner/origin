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

  renderSpoucesAndChildren() {
    const { spouces } = this.props.person;
    return spouces.map(familyKey => {
      const family = this.props.families[familyKey];
      const spouceGender =
        this.props.person.gender === "male" ? "female" : "male";
      const spouceKey = spouceGender === "male" ? family.father : family.mother;
      const children = family.children.map(childKey => {
        const child = this.props.people[childKey];
        return (
          <Link to={child._id}>
            <PersonButton child person={child} />
          </Link>
        );
      });
      let spouceComponent = null;
      if (spouceKey) {
        const spouce = this.props.people[spouceKey];
        spouceComponent = (
          <Link to={spouce._id}>
            <PersonButton person={spouce} />
          </Link>
        );
      }
      if (children && !spouceKey) {
        spouceComponent = (
          <AddRelativeButton gender={spouceGender} caption="Add spouce" />
        );
      }
      return (
        <div>
          {spouceComponent}
          {children}
        </div>
      );
    });
  }

  render() {
    const { person } = this.props;
    const father = this.renderFather();
    const mother = this.renderMother();
    const spoucesAndChildren = this.renderSpoucesAndChildren();
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
        {spoucesAndChildren}
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
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FamilyPanel);
