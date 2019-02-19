import React from "react";
import AuthForm from "./auth-form";
import { signUp } from "../../actions/user";
import { connect } from "react-redux";

class SignUp extends React.Component {
  render() {
    return (
      <div>
        <h1>Sign Up</h1>
        <AuthForm formType="signup" onSubmit={this.props.onSubmit} />
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onSubmit: data => dispatch(signUp(data))
  };
};

export default connect(
  null,
  mapDispatchToProps
)(SignUp);
