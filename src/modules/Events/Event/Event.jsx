import React from "react";
import styled from "styled-components";

const Container = styled.div`
  border: 1px black solid;
  border-radius: 4px;
  height: 4em;
  width: 50vw;
  display: grid;
  grid-template-columns: 1fr 2px 3fr;
  align-items: center;
  justify-items: center;
  margin: 3px;
  cursor: pointer;
`;

const Id = styled.div``;

const VerticalLine = styled.div`
  height: 80%;
  width: 2px;
  background-color: black;
`;

const Kind = styled.div``;

const Event = ({ event }) => {
  return (
    <Container
      onClick={() => {
        window.location.replace(`${event.id}`);
      }}
    >
      <Id>{event.id}</Id>
      <VerticalLine />
      <Kind>{event.kind}</Kind>
    </Container>
  );
};

export default Event;
