import React from "react";
import styled from "styled-components";
import { navigateDetail } from "../../actions/person";
import { connect } from "react-redux";

const Container = styled.div`
  background-color: #dedede;
  display: flex;
  justify-content: center;
`;

const Button = styled.div`
  color: grey;
  border: 0;
  border-bottom: 3px solid transparent;
  padding: 10px;
  &:hover {
    color: black;
    cursor: pointer;
  }
  &.active {
    border-bottom-color: ${props => props.theme.dandilion};
  }
`;

class PersonMenu extends React.Component {
  onClick = event => {
    const detailPane = event.target.getAttribute("value");
    this.props.navigateDetail(detailPane);
  };

  render() {
    const active = this.props.detailPane;
    return (
      <Container>
        <Button
          onClick={this.onClick}
          key="1"
          value="life-story"
          className={active === "life-story" ? "active" : ""}
        >
          Life Story
        </Button>
        <Button
          onClick={this.onClick}
          key="2"
          value="facts"
          className={active === "facts" ? "active" : ""}
        >
          Facts
        </Button>
        <Button
          onClick={this.onClick}
          key="3"
          value="gallery"
          className={active === "gallery" ? "active" : ""}
        >
          Gallery
        </Button>
      </Container>
    );
  }
}

const mapStateToProps = state => {
  return {
    detailPane: state.app.detailPane
  };
};

const mapDispatchToProps = dispatch => {
  return {
    navigateDetail: detailPane => {
      dispatch(navigateDetail(detailPane));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PersonMenu);
