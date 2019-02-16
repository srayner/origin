import React from "react";
import { Button, PrimaryButton } from "../ui/button";
import Modal from "../ui/modal";
import FormRow from "../ui/form-row";
import VerticalText from "../ui/vertical-text";

class TreeModal extends React.Component {
  state = { ...this.props.tree };

  onNameChange = event => {
    this.setState({ name: event.target.value });
  };

  onSubmit = event => {
    this.props.onSubmit(this.state);
  };

  render() {
    const { heading, handleClose } = this.props;
    return (
      <Modal handleClose={handleClose}>
        <h1>{heading}</h1>
        <FormRow>
          <VerticalText
            caption="Tree Name"
            value={this.state.name}
            onChange={this.onNameChange}
          />
        </FormRow>
        <PrimaryButton onClick={this.onSubmit}>OK</PrimaryButton>
        <Button onClick={handleClose}>Cancel</Button>
      </Modal>
    );
  }
}

export default TreeModal;
