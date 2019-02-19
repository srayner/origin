import React from "react";
import AuthForm from "./auth-form";
import styled from "styled-components";
import { Redirect } from "react-router-dom";
import { login } from "../../actions/user";
import { connect } from "react-redux";

const Panel = styled.div`
  background-color: white;
  border: 1px solid #777;
  border-radius: 5px;
  margin: 0;
  padding: 20px;
  width: 320px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const Title = styled.h1`
  text-align: center;
`;

class Login extends React.Component {
  render() {
    const { redirect } = this.props;
    if (redirect) {
      return <Redirect to={redirect} />;
    }
    return (
      <Panel>
        <Title>Login</Title>
        <AuthForm formType="login" onSubmit={this.props.onSubmit} />
      </Panel>
    );
  }
}

const mapStateToProps = state => {
  return {
    redirect: state.app.redirect
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onSubmit: data => dispatch(login(data))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login);
