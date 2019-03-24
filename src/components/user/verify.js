import React from "react";
import { connect } from "react-redux";

function verify() {
  return null;
}

class Verify extends React.Component {
  render() {
    console.log("verfiy", this.props.location);
    return (
      <div>
        <h1>Verify account</h1>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    verify: token => dispatch(verify(token))
  };
};

export default connect(
  null,
  mapDispatchToProps
)(Verify);
