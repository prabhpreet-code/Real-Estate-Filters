export const genrePrice = [
  { _id: "5b21ca3eeb7f6fbccd471518", maxPrice: "3000", minPrice: "1000" },
  { _id: "5b21ca3eeb7f6fbccd471514", maxPrice: "7000", minPrice: "3000" },
  { _id: "5b21ca3eeb7f6fbccd471520", maxPrice: "10000", minPrice: "7000" },
];

export function getGenresPrice() {
  return genrePrice.filter((g) => g);
}
