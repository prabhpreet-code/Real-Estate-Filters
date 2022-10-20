import React from "react";
import "../styles/Cards.css";

export const Cards = ({ image, address, location, price, type, number }) => {
  return (
    <div className="card">
      <img src={image} alt="" />
      <div className="card-body">
        <h2>${price}/month</h2>
        <h5>
          {address} {location.name}
        </h5>
        <h5>{type.name}</h5>
        <h5>{number.number} bedrooms</h5>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam.
        </p>
      </div>
    </div>
  );
};
