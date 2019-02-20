import React from "react";
import AuthForm from "./auth-form";
import styled from "styled-components";
import { Redirect } from "react-router-dom";
import { login } from "../../actions/user";
import { connect } from "react-redux";

const Panel = styled.div`
  background-color: white;
  border: none;
  border-radius: 5px;
  margin: 0;
  padding: 20px;
  width: 320px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
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
        <Title>Origin Genealogy</Title>
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
