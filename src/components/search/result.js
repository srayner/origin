import React from "react";
import styled from "styled-components";

const Container = styled.div`
  margin: 0;
  padding: 10px;
  font-size: 14px;
  display: flex;
  background-color: ${props => {
    return props.index % 2 === 0 ? "#f5f5f5" : "#ececec";
  }};
`;

const IndexDetail = styled.div`
  margin: 0;
  padding: 5px;
`;

const ResultDetail = styled.dl`
  margin: 0;
  padding: 0;
`;

const ResultDetailRow = styled.div`
  display: flex;
  padding: 5px;
`;

const DataTitle = styled.dt`
  width: 120px;
  text-align: right;
  font-weight: 600;
`;

const Result = props => {
  console.log(props);
  const { result } = props;
  return (
    <Container index={props.index}>
      <IndexDetail>Baptism Index</IndexDetail>
      <ResultDetail>
        <ResultDetailRow>
          <DataTitle>Date</DataTitle>
          <dd>{result.eventDate}</dd>
        </ResultDetailRow>
        <ResultDetailRow>
          <DataTitle>Name</DataTitle>
          <dd>
            {result.individualForename} {result.individualSurname}
          </dd>
        </ResultDetailRow>
        <ResultDetailRow>
          <DataTitle>Father</DataTitle>
          <dd>
            {result.fatherForename} {result.fatherSurname}
          </dd>
        </ResultDetailRow>
        <ResultDetailRow>
          <DataTitle>Mother</DataTitle>
          <dd>
            {result.motherForename} {result.motherSurname}
          </dd>
        </ResultDetailRow>
      </ResultDetail>
    </Container>
  );
};

export default Result;
