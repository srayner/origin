import React from "react";
import styled from "styled-components";
import Text from "../ui/text";
import Label from "../ui/label";
import Radio from "../ui/radio";
import { dateAsText } from "../../library/person";
import { Button, PrimaryButton } from "../ui/button";
import ButtonGroup from "../ui/button-group";

const Row = styled.div`
  display: flex;
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
    console.log(gender);
    this.setState({ gender });
  };

  render() {
    const { person } = this.props;
    const birth = dateAsText(person.birth);
    const death = dateAsText(person.death);
    return (
      <div>
        <Row>
          <div>
            <Label>Forenames</Label>
            <Text
              value={this.state.forenames}
              onChange={this.onChangeForenames}
            />
          </div>
          <div>
            <Label>Surname</Label>
            <Text value={this.state.surname} onChange={this.onChangeSurname} />
          </div>
        </Row>
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
        <Row>
          <div>
            <Label>Birth Date</Label>
            <Text value={birth} />
          </div>
          <div>
            <Label>Birth Place</Label>
            <Text value={person.birth.place} />
          </div>
        </Row>
        <Row>
          <div>
            <Label>Death Date</Label>
            <Text value={death} />
          </div>
          <div>
            <Label>Death Place</Label>
            <Text value={person.death.place} />
          </div>
        </Row>
        <ButtonGroup>
          <PrimaryButton
            onClick={() => {
              this.props.endEditing({ ...this.state });
            }}
          >
            OK
          </PrimaryButton>
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
