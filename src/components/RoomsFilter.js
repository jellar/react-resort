import React, { useContext } from "react";
import Title from "./Title";
import { RoomContext } from "../RoomContext";

//get unique
const getUnique = (items, value) => {
  return [...new Set(items.map(item => item[value]))];
};
export default function RoomsFilter({ rooms }) {
  const context = useContext(RoomContext);
  const {
    handleChange,
    type,
    capacity,
    price,
    minPrice,
    maxPrice,
    minSize,
    maxSize,
    breakfast,
    pets
  } = context;

  // get unique types
  let types = getUnique(rooms, "type");
  // add all
  types = ["all", ...types];
  //map to jsx
  types = types.map((item, index) => (
    <option key={index} value={item}>
      {item}
    </option>
  ));

  let people = getUnique(rooms, "capacity");
  people = people.map((item, index) => (
    <option key={index} value={item}>
      {item}
    </option>
  ));

  return (
    <section className="filter-container">
      <Title title="search rooms" />
      <form className="filter-form">
        {/* select type */}
        <div className="form-group">
          <label htmlFor="type">Room Type</label>
          <select
            id="type"
            name="type"
            className="form-control"
            onChange={handleChange}
            value={type}
          >
            {types}
          </select>
        </div>
        {/* end of select type */}
        {/* select guests */}
        <div className="form-group">
          <label htmlFor="">guests</label>
          <select
            id="capacity"
            name="capacity"
            value={capacity}
            onChange={handleChange}
            className="form-control"
          >
            {people}
          </select>
        </div>
        {/* end of select guests */}
        {/* room price */}
        <div className="form-group">
          <label htmlFor="price">Room Price £{price}</label>
          <input
            type="range"
            id="price"
            name="price"
            min={minPrice}
            max={maxPrice}
            value={price}
            className="forn-control"
            onChange={handleChange}
          />
        </div>
        {/* end of room price */}
        {/* room size */}
        <div className="form-group">
          <label htmlFor="minSize">Room size</label>
          <div className="size-inputs">
            <input
              type="number"
              id="minSize"
              name="minSize"
              value={minSize}
              onChange={handleChange}
              className="size-input"
            />
            <input
              type="number"
              name="maxSize"
              value={maxSize}
              onChange={handleChange}
              className="size-input"
            />
          </div>
        </div>
        {/* end of room size */}
        {/* extras */}
        <div className="form-group">
          <div className="single-extra">
            <input
              type="checkbox"
              name="breakfast"
              id="breakfast"
              checked={breakfast}
              onChange={handleChange}
            />
            <label htmlFor="breakfast">breakfast</label>
          </div>
          <div className="single-extra">
            <input
              type="checkbox"
              name="pets"
              checked={pets}
              onChange={handleChange}
            />
            <label htmlFor="breakfast">pets</label>
          </div>
        </div>
        {/* end of extras type */}
      </form>
    </section>
  );
}
