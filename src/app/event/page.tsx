// pages/events.js
'use client';
import EventCard from "../../components/EventCard";
import { useState } from "react";
import "./event.css";
import image1 from "../../assets/eve-1.jpeg";

const events = [
  {
    id: 1,
    name: "Event 1",
    image: image1,
    date: "2023-03-01",
    time: "10:00 AM",
    info: "This is event 1",
    status: "past",
  },
  {
    id: 2,
    name: "Event 2",
    image: image1,
    date: "2023-03-15",
    time: "2:00 PM",
    info: "This is event 2",
    status: "upcoming",
  },
  {
    id: 3,
    name: "Event 3",
    image: image1,
    date: "2023-03-20",
    time: "5:00 PM",
    info: "This is event 3",
    status: "live",
  },
  // Add more events here...
];

const EventPage = () => {
  const [filter, setFilter] = useState("all");
  const [filteredEvents, setFilteredEvents] = useState(events);

  const handleFilterChange = (newFilter: string) => {
    setFilter(newFilter);
    if (newFilter === "all") {
      setFilteredEvents(events);
    } else {
      setFilteredEvents(events.filter((event) => event.status === newFilter));
    }
  };

  return (
    <>
      <div className="event-page">
        <h1 className="event-title">Events</h1>
        <div className="filter-buttons">
          <button onClick={() => handleFilterChange("all")}>All</button>
          <button onClick={() => handleFilterChange("past")}>Past</button>
          <button onClick={() => handleFilterChange("upcoming")}>
            Upcoming
          </button>
          <button onClick={() => handleFilterChange("live")}>Live</button>
        </div>
        <div className="event-list">
          {filteredEvents.map((event) => (
            <EventCard key={event.id} event={event} />
          ))}
        </div>
      </div>
    </>
  );
};

export default EventPage;
