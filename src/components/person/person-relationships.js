import React from "react";
import { fullName } from "../../library/person";

const PersonRelationships = props => {
  const father = fullName(props.father);
  const mother = fullName(props.mother);
  const children = props.children.map(person => {
    const fullname = fullName(person);
    return <div>{fullname}</div>;
  });
  return (
    <div>
      <div>
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
