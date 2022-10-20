export const genreLocation = [
  { _id: "5b21ca3eeb7f6fbccd471818", name: "Subhash Nagar" },
  { _id: "5b21ca3eeb7f6fbccd471814", name: "Rajouri Garden" },
  { _id: "5b21ca3eeb7f6fbccd471820", name: "Janakpuri" },
];

export function getGenresLocation() {
  return genreLocation.filter((g) => g);
}
