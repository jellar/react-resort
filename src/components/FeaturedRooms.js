import React, { useContext } from "react";
import RoomContext from "../RoomContext";

export default function FeaturedRooms() {
  const { name, greeting } = useContext(RoomContext);
  return (
    <div>
      {greeting} {name} from featured rooms
    </div>
  );
}
