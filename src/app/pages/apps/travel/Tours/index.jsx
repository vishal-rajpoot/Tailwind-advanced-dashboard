// Local Imports
import { Header } from "./Header";
import { TourCard } from "./TourCard";

// ----------------------------------------------------------------------

const tours = [
  {
    uid: "1",
    cover: "/images/800x800.png",
    name: "South Island",
    location: "New Zealand",
    rating: "5.0",
    isLiked: false,
  },
  {
    uid: "2",
    cover: "/images/800x800.png",
    name: "Bora Bora",
    location: "French",
    rating: "4.9",
    isLiked: true,
  },
  {
    uid: "3",
    cover: "/images/800x800.png",
    name: "Maui",
    location: "Hana",
    rating: "4.8",
    isLiked: false,
  },
  {
    uid: "4",
    cover: "/images/800x800.png",
    name: "Tahiti",
    location: "French",
    rating: "4.7",
    isLiked: false,
  },
  {
    uid: "5",
    cover: "/images/800x800.png",
    name: "Glacier National Park",
    location: "Unated States",
    rating: "4.5",
    isLiked: true,
  },
  {
    uid: "6",
    cover: "/images/800x800.png",
    name: "Argentine Patagonia",
    location: "Argentine",
    rating: "4.4",
    isLiked: false,
  },
  {
    uid: "7",
    cover: "/images/800x800.png",
    name: "Amalfi Coast",
    location: "Italy",
    rating: "4.3",
    isLiked: false,
  },
  {
    uid: "8",
    cover: "/images/800x800.png",
    name: "Niagara Falls",
    location: "Niagara",
    rating: "4.2",
    isLiked: false,
  },
  {
    uid: "9",
    cover: "/images/800x800.png",
    name: "Great Barrier Reef",
    location: "Australia",
    rating: "4.0",
    isLiked: true,
  },
];

export function Tours() {
  return (
    <div className="col-span-12 lg:col-span-8">
      <Header />
      <div className="mt-4 grid grid-cols-1 gap-4 sm:mt-5 sm:grid-cols-2 sm:gap-5 lg:mt-6 lg:gap-6 xl:grid-cols-3">
        {tours.map((tour) => (
          <TourCard key={tour.uid} {...tour} />
        ))}
      </div>
    </div>
  );
}
