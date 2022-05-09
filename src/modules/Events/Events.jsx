import React, { useState, useEffect } from "react";
import styled from "styled-components";
import KomodorAxios from "../../utils/KomodorAxios";
import Loading from "../Common/Loading";
import Event from "./Event/Event";

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

const Events = () => {
  const [items, setItems] = useState([]);

  const get = async () => {
    const fetchedData = await KomodorAxios("get", "/events/?after=-1");
    setItems(items.concat(fetchedData.data.events));
  };

  useEffect(() => {
    get();
  }, []);

  return (
    <Container>
      {items.length > 0 ? (
        items.map((item) => {
          return <Event event={item} />;
        })
      ) : (
        <LoadingContainer>
          <Loading />
        </LoadingContainer>
      )}
    </Container>
  );
};

export default Events;
