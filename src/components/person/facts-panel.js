import React from "react";
import styled from "styled-components";
import { dateAsText } from "../../library/person";
import Panel from "../ui/panel";

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
  margin: 0;
  padding: 0;
  list-style: none;
`;

const Seperator = styled.span`
  margin: 0 3px;
`;

const Title = styled.h3`
  margin: 0;
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
        <Panel>
          <Title>{event.title}</Title>
          <span>{event.date}</span>
          <Seperator>&#9642;</Seperator>
          <span>{event.location}</span>
        </Panel>
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
