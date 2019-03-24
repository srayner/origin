import React from "react";
import { connect } from "react-redux";
import queryString from "query-string";
import { verify } from "../../actions/user";

class Verify extends React.Component {
  componentDidMount() {
    const token = queryString.parse(this.props.location.search).token;
    if (token) {
      this.props.verify(token);
    }
  }

  render() {
    return (
      <div>
        <h1>Verify account</h1>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    verify: token => dispatch(verify(token))
  };
};

export default connect(
  null,
  mapDispatchToProps
)(Verify);
