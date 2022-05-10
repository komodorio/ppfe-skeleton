import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import EventsListPage from "./pages/EventsListPage";
import EventDetails from "./components/EventDetails";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/events/:id" element={<EventDetails />} />
        <Route path="/events" element={<EventsListPage />}></Route>
        <Route path="/" element={<Navigate to="/events" />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
