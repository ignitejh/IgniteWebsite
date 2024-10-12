// components/EventCard.js
'use client';
import Image from "next/image";
import "../../src/app/event/event.css";

interface Event {
  image: string;
  name: string;
  date: string;
  time: string;
  info: string;
}

const EventCard = ({ event }: { event: any }) => {
  return (
    <>
      <div className="event-card">
        <Image src={event.image} alt={event.name} width={300} height={200} />
        <h2>{event.name}</h2>
        <p>Date: {event.date}</p>
        <p>Time: {event.time}</p>
        <p>Info: {event.info}</p>
      </div>
    </>
  );
};

export default EventCard;
