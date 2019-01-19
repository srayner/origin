import React from "react";
import { connect } from "react-redux";
import PersonDetails from "./person-detail";
import PersonRelationships from "./person-relationships";

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
        <h1>Person</h1>
        <PersonDetails person={person} />
        <PersonRelationships
          father={father}
          mother={mother}
          children={children}
        />
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
