import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Events from "./modules/Events/Events";
import EventView from "./modules/EventView/EventsView";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/events/:id" element={<EventView />} />
        <Route path="/events" element={<Events />}></Route>
        <Route path="/" element={<Navigate to="/events" />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
