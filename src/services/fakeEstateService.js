// Dummy data

const estates = [
  {
    _id: "5b21ca3eeb7f6fbccd471815",
    address: "15/121",
    location: { _id: "5b21ca3eeb7f6fbccd471818", name: "Subhash Nagar" },
    price: 6000,
    content: 2.5,
    number: { _id: "5b21ca3eeb7f6fbccd471841", number: "1" },
    type: { _id: "5b21ca3eeb7f6fbccd471831", name: "Villa" },
    image:
      "https://images.pexels.com/photos/3288100/pexels-photo-3288100.png?auto=compress&cs=tinysrgb&w=600",
  },
  {
    _id: "5b21ca3eeb7f6fbccd471816",
    address: "J6/111",
    location: { _id: "5b21ca3eeb7f6fbccd471814", name: "Rajouri Garden" },
    price: 5000,
    content: 2.5,
    number: { _id: "5b21ca3eeb7f6fbccd471842", number: "2" },
    type: { _id: "5b21ca3eeb7f6fbccd471832", name: "House" },
    image:
      "https://images.pexels.com/photos/3288102/pexels-photo-3288102.png?auto=compress&cs=tinysrgb&w=600",
  },
  {
    _id: "5b21ca3eeb7f6fbccd471817",
    address: "E5/333",
    location: { _id: "5b21ca3eeb7f6fbccd471818", name: "Subhash Nagar" },
    price: 8000,
    content: 3.5,
    number: { _id: "5b21ca3eeb7f6fbccd471843", number: "3" },
    type: { _id: "5b21ca3eeb7f6fbccd471833", name: "Apartment" },
    image:
      "	https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    _id: "5b21ca3eeb7f6fbccd471819",
    address: "12/343 ",
    location: { _id: "5b21ca3eeb7f6fbccd471820", name: "Janakpuri" },
    price: 7000,
    content: 3.5,
    number: { _id: "5b21ca3eeb7f6fbccd471842", number: "2" },
    type: { _id: "5b21ca3eeb7f6fbccd471832", name: "House" },
    image:
      "	https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    _id: "5b21ca3eeb7f6fbccd47181a",
    address: "J3/333",
    location: { _id: "5b21ca3eeb7f6fbccd471814", name: "Rajouri Garden" },
    price: 7500,
    content: 3.5,
    number: { _id: "5b21ca3eeb7f6fbccd471843", number: "3" },
    type: { _id: "5b21ca3eeb7f6fbccd471833", name: "Apartment" },
    image:
      "	https://images.pexels.com/photos/87223/pexels-photo-87223.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    _id: "5b21ca3eeb7f6fbccd47181b",
    address: "B3/2",
    location: { _id: "5b21ca3eeb7f6fbccd471818", name: "Subhash Nagar" },
    price: 6300,
    content: 3.5,
    number: { _id: "5b21ca3eeb7f6fbccd471841", number: "1" },
    type: { _id: "5b21ca3eeb7f6fbccd471833", name: "Apartment" },
    image:
      "https://images.pexels.com/photos/32870/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    _id: "5b21ca3eeb7f6fbccd47181e",
    address: "5/12",
    location: { _id: "5b21ca3eeb7f6fbccd471818", name: "Subhash Nagar" },
    price: 1700,
    content: 4.5,
    number: { _id: "5b21ca3eeb7f6fbccd471843", number: "3" },
    type: { _id: "5b21ca3eeb7f6fbccd471832", name: "House" },
    image:
      "https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    _id: "5b21ca3eeb7f6fbccd47181f",
    address: "Z5/33 ",
    location: { _id: "5b21ca3eeb7f6fbccd471820", name: "Janakpuri" },
    price: 4000,
    content: 3.5,
    number: { _id: "5b21ca3eeb7f6fbccd471841", number: "1" },
    type: { _id: "5b21ca3eeb7f6fbccd471831", name: "Villa" },
    image:
      "https://images.pexels.com/photos/1732414/pexels-photo-1732414.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    _id: "5b21ca3eeb7f6fbccd471821",
    address: "C12/22 ",
    location: { _id: "5b21ca3eeb7f6fbccd471820", name: "Janakpuri" },
    price: 7800,
    content: 3.5,
    number: { _id: "5b21ca3eeb7f6fbccd471841", number: "1" },
    type: { _id: "5b21ca3eeb7f6fbccd471831", name: "Villa" },
    image:
      "https://images.pexels.com/photos/210617/pexels-photo-210617.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
];

// return all data
export function getEstates() {
  return estates;
}
