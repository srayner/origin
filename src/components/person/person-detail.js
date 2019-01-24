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

const VerticleContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
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
        <Row>
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
        </Row>
        <Row>
          <div>
            <Label>Birth Date</Label>
            <Text value={birth} />
          </div>
          <div>
            <Label>Birth Place</Label>
            <Text
              value={person.birthPlace}
              onChange={this.onChangeBirthPlace}
            />
          </div>
        </Row>
        <Row>
          <div>
            <Label>Death Date</Label>
            <Text value={death} />
          </div>
          <div>
            <Label>Death Place</Label>
            <Text
              value={person.deathPlace}
              onChange={this.onChangeDeathPlace}
            />
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
