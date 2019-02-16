import React from "react";
import { connect } from "react-redux";
import { loadSearchResults } from "../../actions/search";
import Result from "./result";

class Results extends React.Component {
  componentDidMount() {
    const { query } = this.props;
    this.props.loadSearchResults(query);
  }

  render() {
    const { searchResults } = this.props;

    console.log(searchResults);
    if (!searchResults || searchResults.length === 0) {
      return <p>Sorry your search returned no results.</p>;
    }

    const rows = searchResults.map((result, index) => {
      return <Result key={index} result={result} />;
    });

    return (
      <div>
        <h1>Search Results</h1>
        {rows}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    query: state.search.query,
    searchResults: state.search.results
  };
};

const mapDispatchToProps = dispatch => {
  return {
    loadSearchResults: query => {
      dispatch(loadSearchResults(query));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Results);
