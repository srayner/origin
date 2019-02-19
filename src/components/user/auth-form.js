import React from "react";
import FormRow from "../ui/form-row";
import VerticalText from "../ui/vertical-text";
import { PrimaryButton } from "../ui/button";
import { Link } from "react-router-dom";
import styled from "styled-components";

const StyledLink = styled(Link)`
  color: steelblue;
  text-decoration: none;
  &:visited {
    color: steelblue;
    text-decoration: none;
  }
`;

class AuthForm extends React.Component {
  state = {
    email: "",
    password: ""
  };

  handleChange = (event, field) => {
    this.setState({ [field]: event.target.value });
  };

  handleSubmit = event => {
    console.log(this.state);
    event.preventDefault();
    this.props.onSubmit(this.state);
  };

  renderSignUpLink() {
    return <StyledLink to="/sign-up">Don't have an account? Signup</StyledLink>;
  }

  render() {
    const signUpLink =
      this.props.formType === "login" ? this.renderSignUpLink() : null;
    return (
      <div>
        <form>
          <FormRow>
            <VerticalText
              onChange={event => this.handleChange(event, "email")}
              caption="Email"
            />
          </FormRow>
          <FormRow>
            <VerticalText
              onChange={event => this.handleChange(event, "password")}
              type="password"
              caption="Password"
            />
          </FormRow>
          <PrimaryButton onClick={this.handleSubmit}>Login</PrimaryButton>
          {signUpLink}
        </form>
      </div>
    );
  }
}

export default AuthForm;
