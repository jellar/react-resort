import React, { useContext } from "react";
import { RoomContext } from "../RoomContext";
import Loading from "../components/Loading";
import Title from "../components/Title";
import Room from "../components/Room";

export default function FeaturedRooms() {
  let { loading, featuredRooms } = useContext(RoomContext);
  const rooms = featuredRooms.map(room => {
    return <Room key={room.id} room={room} />;
  });
  return (
    <section className="featured-rooms">
      <Title title="featured rooms" />
      <div className="featured-rooms-center">
        {loading ? <Loading /> : rooms}
      </div>
    </section>
  );
}
