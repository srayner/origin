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
    event.preventDefault();
    this.props.onSubmit(this.state);
  };

  renderSignUpLink() {
    return <StyledLink to="/sign-up">Don't have an account? Signup</StyledLink>;
  }

  renderLoginLink() {
    return <StyledLink to="/login">Already have an account? Login</StyledLink>;
  }

  render() {
    const { formType } = this.props;
    const submitCaption = formType === "login" ? "Login" : "Sign Up";
    const alternateLink =
      formType === "login" ? this.renderSignUpLink() : this.renderLoginLink();
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
          <PrimaryButton onClick={this.handleSubmit}>
            {submitCaption}
          </PrimaryButton>
          {alternateLink}
        </form>
      </div>
    );
  }
}

export default AuthForm;
