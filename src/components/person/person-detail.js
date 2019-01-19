import React from "react";

import Text from "../ui/text";
import Label from "../ui/label";
import Radio from "../ui/radio";

class PersonDetail extends React.Component {
  dateAsText(dateObject) {
    return dateObject.day + " " + dateObject.month + " " + dateObject.year;
  }

  render() {
    const { person } = this.props;
    const birth = this.dateAsText(person.birth);
    const death = this.dateAsText(person.death);
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
        <Label>Birth Date</Label>
        <Text value={birth} />
        <Label>Birth Place</Label>
        <Text value={person.birth.place} />
        <Label>Death Date</Label>
        <Text value={death} />
        <Label>Death Place</Label>
        <Text value={person.death.place} />
      </div>
    );
  }
}

export default PersonDetail;
