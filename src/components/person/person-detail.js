import React from "react";
import styled from "styled-components";
import Text from "../ui/text";
import Label from "../ui/label";
import Radio from "../ui/radio";
import { dateAsText } from "../../library/person";

const Row = styled.div`
  display: flex;
`;

class PersonDetail extends React.Component {
  render() {
    const { person } = this.props;
    const birth = dateAsText(person.birth);
    const death = dateAsText(person.death);
    return (
      <div>
        <Row>
          <div>
            <Label>Forenames</Label>
            <Text value={person.forenames} />
          </div>
          <div>
            <Label>Surname</Label>
            <Text value={person.surname} />
          </div>
        </Row>
        <Radio name="gender" value="male" checked={person.gender === "male"}>
          Male
        </Radio>
        <Radio
          name="gender"
          value="female"
          checked={person.gender === "female"}
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
      </div>
    );
  }
}

export default PersonDetail;
