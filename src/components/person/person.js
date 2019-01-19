import React from "react";
import { connect } from "react-redux";
import PersonDetails from "./person-detail";

class Person extends React.Component {
  render() {
    console.log(this.props.people);
    console.log(this.props.match.params.personId);
    const person = this.props.people[this.props.match.params.personId];

    console.log(person);
    return (
      <div>
        <h1>Person</h1>
        <PersonDetails person={person} />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    people: state.tree
  };
};

const mapDispatchToProps = dispatch => {
  return {};
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Person);
