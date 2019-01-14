import React from "react";
import styled from "styled-components";
import Panel from "../ui/panel";
import Label from "../ui/label";
import Text from "../ui/text";

const Container = styled.div`
  margin: 0;
  padding: 10px;
  background-color: #eee;
`;

const Profile = props => {
  return (
    <Container>
      <h1>Your profile</h1>
      <Panel>
        <div>
          <Label>Display Name</Label>
          <Text value="Steve Rayner" />
        </div>
        <div>
          <Label>Initials</Label>
          <Text value="S R" />
        </div>
        <div>
          <Label>Email</Label>
          <Text value="myname@mydomain.com" />
        </div>
      </Panel>
    </Container>
  );
};

export default Profile;
