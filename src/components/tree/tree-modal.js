import React from "react";
import Label from "../ui/label";
import Text from "../ui/text";
import { Button, PrimaryButton } from "../ui/button";
import Modal from "../ui/modal";

class TreeModal extends React.Component {
  state = { ...this.props.tree };

  onNameChange = event => {
    console.log(this.state);
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
        <Label>Tree Name</Label>
        <Text value={this.state.name} onChange={this.onNameChange} />
        <PrimaryButton onClick={this.onSubmit}>OK</PrimaryButton>
        <Button onClick={handleClose}>Cancel</Button>
      </Modal>
    );
  }
}

export default TreeModal;
