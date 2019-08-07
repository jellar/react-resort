import React, { useContext } from "react";
import { Link } from "react-router-dom";
import Hero from "../components/Hero";
import Banner from "../components/Banner";
import { RoomContext } from "../RoomContext";

export default function SingleRoom(props) {
  const { getRoom } = useContext(RoomContext);
  const room = getRoom(props.match.params.slug);
  if (!room) {
    return (
      <div className="error">
        <h3>no such room could be found...</h3>
        <Link to="/rooms" className="btn-primary">
          back to rooms
        </Link>
      </div>
    );
  }

  const {
    name,
    description,
    capacity,
    size,
    price,
    extras,
    breakfast,
    pets,
    images
  } = room;

  return (
    <>
      <Hero>
        <Banner title={`${room.name} room`}>
          <Link to="/" className="btn-primary">
            back to rooms
          </Link>
        </Banner>
      </Hero>
      <section className="single-room">
        <div className="single-room-images">
          {images.map((image, index) => (
            <img key={index} src={image} alt={name} />
          ))}
        </div>
        <div className="single-room-info">
          <article className="desc">
            <h3>details</h3>
            <p>{description}</p>
          </article>
          <article className="info">
            <h3>info</h3>
            <h6>price: £{price}</h6>
            <h6>size: {size} SQFT</h6>
            <h6>
              max capacity:{" "}
              {capacity > 1 ? `${capacity} people` : `${capacity} person`}
            </h6>
            <h6>{pets ? "pets allowed" : "no pets allowed"}</h6>
            <h6>{breakfast && "free breakfast included"}</h6>
          </article>
        </div>
      </section>
      <section className="room-extras">
        <h6>extras</h6>
        <ul className="extras">
          {extras.map((item, index) => (
            <li key={index}>- {item}</li>
          ))}
        </ul>
      </section>
    </>
  );
}
