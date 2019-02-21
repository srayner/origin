import React from "react";
import styled from "styled-components";
import AuthForm from "./auth-form";
import { signUp } from "../../actions/user";
import { connect } from "react-redux";
import AuthPanel from "../ui/auth-panel";

const Title = styled.h1`
  margin: 5px;
  text-align: center;
`;

const Heading = styled.h1`
  margin-top: 40px;
  color: #a0a0a0;
  text-align: center;
`;

class SignUp extends React.Component {
  render() {
    return (
      <div>
        <Heading>Origin Genealogy</Heading>
        <AuthPanel>
          <Title>Sign Up</Title>
          <AuthForm formType="signup" onSubmit={this.props.onSubmit} />
        </AuthPanel>
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
