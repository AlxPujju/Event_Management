import React from "react";
import Header from "./components/Header";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import AddEvent from "./components/AddEvent";
import Events from "./components/Events/Events";
import About from "./components/About";
import EventDetails from "./components/Events/EventDetails";
function App() {
  return (
    <React.Fragment>
      <header>
        <Header />
      </header>
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/add" element={<AddEvent />} />
          <Route path="/events" element={<Events />} />
          <Route path="/about" element={<About />} />
          <Route path="/events/:id" element={<EventDetails />} />
        </Routes>
      </main>
    </React.Fragment>
  );
}

export default App;
