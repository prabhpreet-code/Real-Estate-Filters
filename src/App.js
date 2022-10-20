import React, { useState, useEffect } from "react";
import Form from "react-bootstrap/Form";
import { Cards } from "./components/Cards";
import NavScrollExample from "./components/NavScrollExample";
import HorizontalExample from "./components/HorizontalExample";
import { getEstates } from "./services/fakeEstateService.js";

import "./App.css";

function App() {
  // To store all the data
  const [estates, setEstates] = useState([]);
  const [filteredEstates, setFilteredEstates] = useState([]);

  //Selected Genre Filters
  const [selectedLocation, setSelectedLocation] = useState("");
  const [selectedPropertyType, setSelectedPropertyType] = useState("");
  const [selectedRoomNumber, setSelectedRoomNumber] = useState("");
  const [selectedPrice, setSelectedPrice] = useState("");

  //to change selected genre
  const handleSelectedLocation = (location) => {
    setSelectedLocation(location);
  };

  const handleSelectedProperty = (location) => {
    setSelectedPropertyType(location);
  };

  const handleSelectedRoomNumber = (location) => {
    setSelectedRoomNumber(location);
  };

  const handleSelectedPrice = (location) => {
    setSelectedPrice(location);
  };

  // filter data based on selected genre
  const handleSubmitQueries = () => {
    let filtered = estates;
    if (selectedLocation !== "") {
      filtered = filtered.filter(
        (m) => m.location._id === selectedLocation._id
      );
    }
    if (selectedPropertyType !== "") {
      filtered = filtered.filter(
        (m) => m.type._id === selectedPropertyType._id
      );
    }
    if (selectedRoomNumber !== "") {
      filtered = filtered.filter(
        (m) => m.number._id === selectedRoomNumber._id
      );
    }
    if (selectedPrice !== "") {
      filtered = filtered.filter(
        (m) =>
          Number(m.price) <= Number(selectedPrice.maxPrice) &&
          Number(m.price) >= Number(selectedPrice.minPrice)
      );
    }

    setFilteredEstates(filtered);
  };

  // Fetch data from fakeEstateService file
  useEffect(() => {
    setEstates(getEstates());
    setFilteredEstates(getEstates());
  }, []);

  return (
    <div className="estate">
      <NavScrollExample />
      <div className="estate__mainContentContainer">
        <div className="estate__mainContentHeading">
          <h1 className="estate__heading">Search Properties to rent</h1>
          <Form.Control
            type="search"
            placeholder="Search"
            className="me-2 estate__searchBar"
            aria-label="Search"
          />
        </div>
        <HorizontalExample
          handleSelectedLocation={handleSelectedLocation}
          handleSelectedProperty={handleSelectedProperty}
          selectedLocation={selectedLocation}
          selectedPropertyType={selectedPropertyType}
          handleSubmitQueries={handleSubmitQueries}
          handleSelectedRoomNumber={handleSelectedRoomNumber}
          selectedRoomNumber={selectedRoomNumber}
          selectedPrice={selectedPrice}
          handleSelectedPrice={handleSelectedPrice}
        />
        <div className="estate__cards">
          {filteredEstates.map((estate) => (
            <Cards
              image={estate.image}
              price={estate.price}
              address={estate.address}
              location={estate.location}
              type={estate.type}
              number={estate.number}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
