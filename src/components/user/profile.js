import React from "react";
import styled from "styled-components";
import Panel from "../ui/panel";
import Label from "../ui/label";
import Text from "../ui/text";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";

const Container = styled.div`
  margin: 0;
  padding: 10px;
  background-color: #eee;
`;

class Profile extends React.Component {
  render() {
    const { token } = this.props;
    if (!token) {
      return <Redirect to="/login" />;
    }
    console.log("Componnet rendered");
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
  }
}

const mapStateToProps = state => {
  return {
    token: state.app.token
  };
};

export default connect(
  mapStateToProps,
  null
)(Profile);
