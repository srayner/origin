import React from "react";
import Panel from "../ui/panel";
import PanelHeader from "../ui/panel-header";
import VerticalText from "../ui/vertical-text";
import FormRow from "../ui/form-row";
import { PrimaryButton } from "../ui/button";
import { connect } from "react-redux";
import { dispatch } from "rxjs/internal/observable/pairs";
import { queryUpdate } from "../../actions/search";

class Search extends React.Component {
  state = {
    ...this.props.query
  };

  onChangeName = event => {
    const name = event.target.value;
    this.setState({ name });
  };

  onChangeBirth = event => {
    const birth = event.target.value;
    this.setState({ birth });
  };

  submit = event => {
    this.props.queryUpdate({ ...this.state });
    this.props.history.push("/results");
  };

  render() {
    return (
      <Panel>
        <FormRow>
          <PanelHeader>Search</PanelHeader>
        </FormRow>
        <FormRow>
          <VerticalText
            grow="2"
            caption="Name"
            value={this.state.forename}
            onChange={this.onChangeName}
          />
          <VerticalText
            grow="1"
            caption="Birth Year"
            value={this.state.birth}
            onChange={this.onChangeBirth}
          />
        </FormRow>
        <FormRow>
          <PrimaryButton onClick={this.submit}>Search</PrimaryButton>
        </FormRow>
      </Panel>
    );
  }
}

const mapStateToProps = state => {
  return {
    query: state.search.query
  };
};

const mapDispatchToProps = dispatch => {
  return {
    queryUpdate: query => {
      dispatch(queryUpdate(query));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Search);
