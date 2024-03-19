import React, { useEffect, useState } from "react";
import "./Event.css";
import axios from "axios";
import Event from "./Event";
const URL = "http://localhost:5000/events";
const fetchHandler = async () => {
  return await axios.get(URL).then((res) => res.data);
};
const Events = () => {
  const [events, setEvents] = useState();
  useEffect(() => {
    fetchHandler().then((data) => setEvents(data.events));
  }, []);
  console.log(events);
  return (
    <div>
      <ul>
        {events &&
          events.map((event, i) => (
            <li key={i}>
              <Event event={event} />
            </li>
          ))}
      </ul>
    </div>
  );
};

export default Events;