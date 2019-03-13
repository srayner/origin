import React from "react";
import styled from "styled-components";
import Label from "../ui/label";
import VerticalText from "../ui/vertical-text";
import Radio from "../ui/radio";
import { dateAsText } from "../../library/person";
import { Button, PrimaryButton } from "../ui/button";
import ButtonGroup from "../ui/button-group";
import FormRow from "../ui/form-row";
import ErrorMessage from "../ui/error-message";
import { lookLikeDate, looksLikeDate } from "../../library/date";

const VerticleContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 10px 5px;
`;

class PersonDetail extends React.Component {
  state = {
    ...this.props.person
  };

  onChangeForenames = event => {
    const forenames = event.target.value;
    this.setState({ forenames });
  };

  onChangeSurname = event => {
    const surname = event.target.value;
    this.setState({ surname });
  };

  onChangeGender = event => {
    const gender = event.target.value;
    this.setState({ gender });
  };

  onChangeStatus = event => {
    const status = event.target.value;
    this.setState({ status });
  };

  onChangeBirthDate = event => {
    const birthDate = event.target.value;
    console.log(birthDate);
    looksLikeDate(birthDate);
    this.setState({ birthDate });
  };

  onChangeBirthPlace = event => {
    const birthPlace = event.target.value;
    this.setState({ birthPlace });
  };

  onChangeDeathDate = event => {
    const deathDate = event.target.value;
    this.setState({ deathDate });
  };

  onChangeDeathPlace = event => {
    const deathPlace = event.target.value;
    this.setState({ deathPlace });
  };

  onChangeParents = event => {
    const parents = event.target.value;
    this.setState({ parents, error: false });
  };

  renderParentOptions() {
    if (this.props.parentOptions && this.props.parentOptions.length > 0) {
      const parentOptions = this.props.parentOptions.map(option => {
        return (
          <Radio
            name="parents"
            value={option.value}
            checked={this.state.parents === option.value}
            onChange={this.onChangeParents}
          >
            {option.text}
          </Radio>
        );
      });

      return (
        <FormRow>
          <VerticleContainer>
            <Label>Parents</Label>
            {parentOptions}
          </VerticleContainer>
        </FormRow>
      );
    }
    return null;
  }

  buildDateObject(dateString) {
    if (!dateString) {
      return null;
    }
    const parts = dateString.split(" ");
    return {
      day: parts[0],
      month: parts[1],
      year: parts[2]
    };
  }

  submit = event => {
    if (this.props.parentOptions && !this.state.parents) {
      this.setState({ error: true });
      return;
    }
    let person = { ...this.state };
    console.log(person);
    person.birth = this.buildDateObject(person.birthDate);
    person.death = this.buildDateObject(person.deathDate);
    this.props.endEditing(person);
  };

  render() {
    const { person } = this.props;
    const parentOptions = this.renderParentOptions();
    const error = this.state.error ? (
      <ErrorMessage>You must select parents for this child.</ErrorMessage>
    ) : null;
    return (
      <div>
        <FormRow>
          <VerticalText
            caption="Forenames"
            value={this.state.forenames}
            onChange={this.onChangeForenames}
          />
          <VerticalText
            caption="Surname"
            value={this.state.surname}
            onChange={this.onChangeSurname}
          />
        </FormRow>
        <FormRow>
          <VerticleContainer>
            <Label>Gender</Label>
            <Radio
              name="gender"
              value="male"
              checked={this.state.gender === "male"}
              onChange={this.onChangeGender}
            >
              Male
            </Radio>
            <Radio
              name="gender"
              value="female"
              checked={this.state.gender === "female"}
              onChange={this.onChangeGender}
            >
              Female
            </Radio>
          </VerticleContainer>
          <VerticleContainer>
            <Label>Status</Label>
            <Radio
              name="status"
              value="alive"
              checked={this.state.status === "alive"}
              onChange={this.onChangeStatus}
            >
              Alive
            </Radio>
            <Radio
              name="status"
              value="deceased"
              checked={this.state.status === "deceased"}
              onChange={this.onChangeStatus}
            >
              Deceased
            </Radio>
          </VerticleContainer>
        </FormRow>
        <FormRow>
          <VerticalText
            caption="Birth Date"
            value={this.state.birthDate}
            onChange={this.onChangeBirthDate}
          />
          <VerticalText
            caption="Birth Place"
            value={person.birthDate}
            onChange={this.onChangeBirthPlace}
          />
        </FormRow>
        <FormRow>
          <VerticalText
            caption="Death Date"
            value={this.state.deathDate}
            onChange={this.onChangeDeathDate}
          />
          <VerticalText
            caption="Death Place"
            value={person.deathDate}
            onChange={this.onChangeDeathPlace}
          />
        </FormRow>
        {parentOptions}
        {error}
        <ButtonGroup>
          <PrimaryButton onClick={this.submit}>OK</PrimaryButton>
          <Button
            onClick={() => {
              this.props.cancelEditing();
            }}
          >
            Cancel
          </Button>
        </ButtonGroup>
      </div>
    );
  }
}

export default PersonDetail;
