import React from "react";
import { fullName } from "../../library/person";
import PersonButton from "./person-button";

const PersonRelationships = props => {
  const father = fullName(props.father);
  const mother = fullName(props.mother);
  const children = props.children.map((person, index) => {
    const fullname = fullName(person);
    return <div key={index}>{fullname}</div>;
  });
  return (
    <div>
      <div>
        <PersonButton gender="male" caption={father} />
        Father: <span>{father}</span>
      </div>
      <div>
        Mother: <span>{mother}</span>
      </div>
      <div>
        Children:
        {children}
      </div>
    </div>
  );
};

export default PersonRelationships;
