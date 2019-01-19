import React from "react";

import Text from "../ui/text";
import Label from "../ui/label";
import Radio from "../ui/radio";

class PersonDetail extends React.Component {
  render() {
    const { person } = this.props;
    return (
      <div>
        <Label>Forenames</Label>
        <Text value={person.forenames} />
        <Label>Surname</Label>
        <Text value={person.surname} />
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
      </div>
    );
  }
}

export default PersonDetail;
