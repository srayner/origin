import React from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import PersonDetails from "./person-detail";
import PersonRelationships from "./person-relationships";
import PersonTitle from "./person-title";
import PersonMenu from "./person-menu";

const Container = styled.div`
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

    console.log(children);
    return (
      <div>
        <PersonTitle person={person} />
        <PersonMenu />
        <Container>
          <PersonDetails person={person} />
          <PersonRelationships
            father={father}
            mother={mother}
            children={children}
          />
        </Container>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    people: state.people,
    families: state.families
  };
};

const mapDispatchToProps = dispatch => {
  return {};
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Person);
