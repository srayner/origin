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

  onChangeBirthPlace = event => {
    const birthPlace = event.target.value;
    this.setState({ birthPlace });
  };

  onChangeDeathPlace = event => {
    const deathPlace = event.target.value;
    this.setState({ deathPlace });
  };

  onChangeBirthDate = event => {
    const values = event.target.value.split(" ");
    let day, month, year;
    switch (values.length) {
      case 1:
        day = null;
        month = null;
        year = values[0];
        break;
      case 2:
        day = null;
        month = values[0];
        year = values[1];
        break;
      case 3:
        day = values[0];
        month = values[1];
        year = values[2];
        break;
      default:
        day = null;
        month = null;
        year = null;
    }
    return this.validDay(day) && this.validMonth(month) && this.validYear(year);
  };

  onChangeParents = event => {
    const parents = event.target.value;
    this.setState({ parents, error: false });
  };

  validDay = day => {
    return day >= 1 && day <= 31;
  };

  validMonth = month => {
    const months = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec"
    ];
    return months.indexOf(month) !== -1;
  };

  validYear = year => {
    const currentYear = new Date().getFullYear();
    return year >= 1 && year <= currentYear;
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

  submit = event => {
    if (this.props.parentOptions && !this.state.parents) {
      this.setState({ error: true });
      return;
    }

    this.props.endEditing({ ...this.state });
  };

  render() {
    const { person } = this.props;
    const birth = dateAsText(person.birth);
    const death = dateAsText(person.death);
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
          <VerticalText caption="Birth Date" value={birth} />
          <VerticalText
            caption="Birth Place"
            value={person.birthPlace}
            onChange={this.onChangeBirthPlace}
          />
        </FormRow>
        <FormRow>
          <VerticalText caption="Death Date" value={death} />
          <VerticalText
            caption="Death Place"
            value={person.deathPlace}
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
