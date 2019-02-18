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
    event.preventDefault();
    this.props.onSubmit(this.state);
  };

  render() {
    return (
      <div>
        <form>
          <FormRow>
            <VerticalText caption="Email" />
          </FormRow>
          <FormRow>
            <VerticalText caption="Password" />
          </FormRow>
          <PrimaryButton>Login</PrimaryButton>
        </form>
      </div>
    );
  }
}

export default AuthForm;
