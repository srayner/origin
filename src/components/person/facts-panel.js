import React from "react";
import styled from "styled-components";
import { dateAsText } from "../../library/person";

const Container = styled.div`
  margin: 0;
  padding: 10px;
  background-color: #eee;
`;

const Header = styled.h2`
  font-size: 16px;
  font-weight: 600;
`;

const List = styled.ul`
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
`;

const Item = styled.li`
  margin: 5px;
  padding: 5px;
  border: 1px solid #a9a9a9;
  border-radius: 3px;
  background-color: white;
  list-style: none;
  width: 240px;
`;

const Seperator = styled.span`
  margin: 0 3px;
`;

const Title = styled.h3`
  margin: 0;
  font-size: 16px;
  font-weight: 600;
`;

const FactsPanel = props => {
  const { person } = props;
  const birth = {
    title: "Birth",
    date: dateAsText(person.birth),
    location: person.birthPlace
  };
  const death = {
    title: "Death",
    date: dateAsText(person.death),
    location: person.deathPlace
  };
  const events = [birth, death];
  const items = events.map(event => {
    return (
      <Item>
        <Title>{event.title}</Title>
        <span>{event.date}</span>
        <Seperator>&#9642;</Seperator>
        <span>{event.location}</span>
      </Item>
    );
  });
  return (
    <Container>
      <Header>Facts</Header>
      <List>{items}</List>
    </Container>
  );
};

export default FactsPanel;
