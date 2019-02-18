import React from "react";
import FormRow from "../ui/form-row";
import VerticalText from "../ui/vertical-text";
import { PrimaryButton } from "../ui/button";

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

  render() {
    return (
      <div>
        <form>
          <FormRow>
            <VerticalText
              onChange={event => this.handleChange(event, "email")}
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
        </form>
      </div>
    );
  }
}

export default AuthForm;
