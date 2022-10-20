import ListGroup from "react-bootstrap/ListGroup";
import { Button } from "react-bootstrap";
import NavDropdown from "react-bootstrap/NavDropdown";
import "../styles/HorizontalExample.css";

function HorizontalExample({
  handleSelectedLocation,
  selectedLocation,
  handleSelectedProperty,
  selectedPropertyType,
  handleSubmitQueries,
  handleSelectedRoomNumber,
  selectedRoomNumber,
  selectedPrice,
  handleSelectedPrice,
}) {
  return (
    <ListGroup
      horizontal
      style={{
        width: "70vw",
        height: "10vh",
      }}
    >
      <ListGroup.Item
        className="d-flex flex-column justify-content-center align-items-center"
        style={{
          flex: "1",
          background: "rgb(248 249 250)",
        }}
      >
        <p className="filter__options">Location</p>
        <NavDropdown
          style={{
            fontWeight: "500",
          }}
          title={selectedLocation === "" ? "All" : selectedLocation.name}
          id="navbarScrollingDropdown"
        >
          <NavDropdown.Item
            onClick={() =>
              handleSelectedLocation({
                _id: "5b21ca3eeb7f6fbccd471818",
                name: "Subhash Nagar",
              })
            }
          >
            Subhash Nagar
          </NavDropdown.Item>
          <NavDropdown.Item
            onClick={() =>
              handleSelectedLocation({
                _id: "5b21ca3eeb7f6fbccd471814",
                name: "Rajouri Garden",
              })
            }
          >
            Rajouri Garden
          </NavDropdown.Item>

          <NavDropdown.Item
            onClick={() =>
              handleSelectedLocation({
                _id: "5b21ca3eeb7f6fbccd471820",
                name: "Janakpuri",
              })
            }
          >
            Janakpuri
          </NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item onClick={() => handleSelectedLocation("")}>
            All
          </NavDropdown.Item>
        </NavDropdown>
      </ListGroup.Item>

      <ListGroup.Item
        className="d-flex flex-column justify-content-center align-items-center"
        style={{
          flex: "1",
          background: "rgb(248 249 250)",
        }}
      >
        <p className="filter__options">Number of Rooms</p>
        <NavDropdown
          style={{
            fontWeight: "500",
          }}
          title={selectedRoomNumber === "" ? "All" : selectedRoomNumber.number}
          id="navbarScrollingDropdown"
        >
          <NavDropdown.Item
            onClick={() =>
              handleSelectedRoomNumber({
                _id: "5b21ca3eeb7f6fbccd471841",
                number: "1",
              })
            }
          >
            1
          </NavDropdown.Item>
          <NavDropdown.Item
            onClick={() =>
              handleSelectedRoomNumber({
                _id: "5b21ca3eeb7f6fbccd471842",
                number: "2",
              })
            }
          >
            2
          </NavDropdown.Item>

          <NavDropdown.Item
            onClick={() =>
              handleSelectedRoomNumber({
                _id: "5b21ca3eeb7f6fbccd471843",
                number: "3",
              })
            }
          >
            3+
          </NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item onClick={() => handleSelectedRoomNumber("")}>
            All
          </NavDropdown.Item>
        </NavDropdown>
      </ListGroup.Item>
      <ListGroup.Item
        className="d-flex flex-column justify-content-center align-items-center"
        style={{
          flex: "1",
          background: "rgb(248 249 250)",
        }}
      >
        <p className="filter__options">Price</p>
        <NavDropdown
          style={{
            fontWeight: "500",
          }}
          title={
            selectedPrice === ""
              ? "All"
              : `$${selectedPrice.minPrice} - $${selectedPrice.maxPrice}`
          }
          id="navbarScrollingDropdown"
        >
          <NavDropdown.Item
            onClick={() =>
              handleSelectedPrice({
                _id: "5b21ca3eeb7f6fbccd471518",
                maxPrice: "3000",
                minPrice: "1000",
              })
            }
          >
            $1000 - $3000
          </NavDropdown.Item>
          <NavDropdown.Item
            onClick={() =>
              handleSelectedPrice({
                _id: "5b21ca3eeb7f6fbccd471514",
                maxPrice: "7000",
                minPrice: "3000",
              })
            }
          >
            $3000 - $7000
          </NavDropdown.Item>

          <NavDropdown.Item
            onClick={() =>
              handleSelectedPrice({
                _id: "5b21ca3eeb7f6fbccd471520",
                maxPrice: "10000",
                minPrice: "7000",
              })
            }
          >
            $7000 - $10000
          </NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item onClick={() => handleSelectedPrice("")}>
            All
          </NavDropdown.Item>
        </NavDropdown>
      </ListGroup.Item>
      <ListGroup.Item
        className="d-flex flex-column justify-content-center align-items-center"
        style={{
          flex: "1",
          background: "rgb(248 249 250)",
        }}
      >
        <p className="filter__options">Property Type</p>
        <NavDropdown
          style={{
            fontWeight: "500",
          }}
          title={
            selectedPropertyType === "" ? "All" : selectedPropertyType.name
          }
          id="navbarScrollingDropdown"
        >
          <NavDropdown.Item
            onClick={() =>
              handleSelectedProperty({
                _id: "5b21ca3eeb7f6fbccd471832",
                name: "House",
              })
            }
          >
            House
          </NavDropdown.Item>
          <NavDropdown.Item
            onClick={() =>
              handleSelectedProperty({
                _id: "5b21ca3eeb7f6fbccd471833",
                name: "Apartment",
              })
            }
          >
            Apartment
          </NavDropdown.Item>
          <NavDropdown.Item
            onClick={() =>
              handleSelectedProperty({
                _id: "5b21ca3eeb7f6fbccd471831",
                name: "Villa",
              })
            }
          >
            Villa
          </NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item onClick={() => handleSelectedProperty("")}>
            All
          </NavDropdown.Item>
        </NavDropdown>
      </ListGroup.Item>
      <ListGroup.Item
        className="d-flex flex-column justify-content-center align-items-center"
        style={{
          flex: "1",
          background: "rgb(248 249 250)",
        }}
      >
        <Button
          onClick={() => handleSubmitQueries()}
          variant="danger"
          style={{
            marginRight: "15px",
            flex: "1",
            width: "10vw",
            height: "5vh",
          }}
        >
          Search
        </Button>
      </ListGroup.Item>
    </ListGroup>
  );
}

export default HorizontalExample;
