import React, { useState, useEffect } from "react";
import styled from "styled-components";
import KomodorAxios from "../utils/KomodorAxios";
import Loading, { SquareLoading } from "./common/Loading";
import EventListItem from "./EventListItem";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const LoadingContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const HasMoreAnimation = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
position: fixed;
right: 0;
margin-right: 10%; 
`;

const EventsList = () => {
  const [items, setItems] = useState([]);
  const [hasMoreEvents, setHasMoreEvents] = useState(false);

  const get = async () => {
    const { data } = await KomodorAxios("get", "/events/?after=-1");
    setItems(items.concat(data.events));
  };

  useEffect(() => {
    get();
  }, []);

  return (
    <Container>
      <HasMoreAnimation>
        <SquareLoading isAnimate={hasMoreEvents} />
        <h5>{hasMoreEvents ? "There are more events" : "No more events"}</h5>
      </HasMoreAnimation>
      {items.length > 0 ? (
        items.map((item) => {
          return <EventListItem event={item} />;
        })
      ) : (
        <LoadingContainer>
          <Loading />
        </LoadingContainer>
      )}
    </Container>
  );
};

export default EventsList;
