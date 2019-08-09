import React from "react";
import Room from "./Room";

export default function RoomsList({ rooms }) {
  if (rooms.length === 0) {
    return (
      <div className="empty-search">
        <h3>unfortunately no rooms matched your search criteria</h3>
      </div>
    );
  }
  return (
    <section className="roomslist">
      <div className="roomslist-center">
        {rooms.map(room => (
          <Room room={room} key={room.id} />
        ))}
      </div>
    </section>
  );
}
