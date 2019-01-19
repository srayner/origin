import React from "react";
import styled from "styled-components";

const Container = styled.div`
  height: 100px;
  background-color: grey;
`;

const PersonTitle = props => {
  const img = props.person.gender == "male" ? "/male.png" : "/female.png";
  return (
    <div>
      <img src={img} />
    </div>
  );
};

export default PersonTitle;
