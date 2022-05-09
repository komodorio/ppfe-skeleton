import React from "react";
import { useParams } from "react-router-dom";

const EventView = () => {
  let { id } = useParams();

  return <div>event Id: {id}</div>;
};

export default EventView;
