export const genreProperty = [
  { _id: "5b21ca3eeb7f6fbccd471831", name: "Villa" },
  { _id: "5b21ca3eeb7f6fbccd471832", name: "House" },
  { _id: "5b21ca3eeb7f6fbccd471833", name: "Apartment" },
];

export function getGenresProperty() {
  return genreProperty.filter((g) => g);
}
