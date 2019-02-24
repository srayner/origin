import React from "react";
import styled from "styled-components";
import Panel from "../ui/panel";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import FormRow from "../ui/form-row";
import VerticleText from "../ui/vertical-text";
import ProfileTitle from "./profile-title";

const Container = styled.div`
  margin: 0;
  padding: 0;
  background-color: #eee;
`;

class Profile extends React.Component {
  render() {
    const { token } = this.props;
    if (!token) {
      return <Redirect to="/login" />;
    }
    return (
      <Container>
        <ProfileTitle />
        <Panel>
          <FormRow>
            <VerticleText caption="Display Name" value="Steve Rayner" />
          </FormRow>
          <FormRow>
            <VerticleText caption="Initials" value="S R" />
          </FormRow>
          <FormRow>
            <VerticleText caption="Email" value="myname@mydomain.com" />
          </FormRow>
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
