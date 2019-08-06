import React, { useState, useEffect } from "react";
import items from "./data";
const RoomContext = React.createContext();

function RoomProvider({ children }) {
  const [rooms, setRooms] = useState([]);
  const [sortedRooms, setSortedRooms] = useState([]);
  const [featuredRooms, setFeaturedRooms] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    let rooms = formatData(items);
    let featuredRooms = rooms.filter(room => room.featured === true);
    setRooms(rooms);
    setSortedRooms(rooms);
    setFeaturedRooms(featuredRooms);
    setLoading(false);
  }, []);

  function formatData(items) {
    return items.map(item => {
      let id = item.sys.id;
      let images = item.fields.images.map(image => image.fields.file.url);
      let room = { ...item.fields };
      return { ...room, images, id };
    });
  }
  return (
    <RoomContext.Provider
      value={{ rooms, sortedRooms, featuredRooms, loading }}
    >
      {children}
    </RoomContext.Provider>
  );
}
const RoomConsumer = RoomContext.Consumer;

export { RoomProvider, RoomConsumer, RoomContext };
