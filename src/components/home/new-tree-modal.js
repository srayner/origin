import React from "react";
import styled from "styled-components";
import Label from "../ui/label";
import Text from "../ui/text";
import { Button, PrimaryButton } from "../ui/button";
import Modal from "../ui/modal";

class NewTreeModal extends React.Component {
  state = { name: "" };

  onNameChange = event => {
    this.setState({ name: event.target.value });
  };

  onSubmit = event => {
    this.props.onSubmit(this.state.name);
  };

  render() {
    const { handleClose } = this.props;
    return (
      <Modal handleClose={handleClose}>
        <h1>Add New Tree</h1>
        <Label>Tree Name</Label>
        <Text value={this.state.treeName} onChange={this.onNameChange} />
        <PrimaryButton onClick={this.onSubmit}>OK</PrimaryButton>
        <Button onClick={handleClose}>Cancel</Button>
      </Modal>
    );
  }
}

export default NewTreeModal;
