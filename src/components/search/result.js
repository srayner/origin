import React from "react";
import styled from "styled-components";

const Container = styled.div``;

const IndexDetail = styled.div``;

const ResultDetail = styled.dl``;

const Result = props => {
  const { result } = props;
  return (
    <Container>
      <IndexDetail />
      Baptism Index
      <ResultDetail>
        <dt>Date</dt>
        <dd>{result.eventDate}</dd>
        <dt>Name</dt>
        <dd>
          {result.individualForename} {result.individualSurname}
        </dd>
        <dt>Father</dt>
        <dd>
          {result.fatherForename} {result.fatherSurname}
        </dd>
        <dt>Mother</dt>
        <dd>
          {result.motherForename} {result.motherSurname}
        </dd>
      </ResultDetail>
    </Container>
  );
};

export default Result;
