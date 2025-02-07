
// Local Imports
import { ArtistCard } from "./ArtistCard";

// ----------------------------------------------------------------------

const artists = [
  {
    uid: "1",
    cover: "/images/800x600.png",
    avatar: "/images/200x200.png",
    name: "Travis Fuller",
    itemsCount: "6681",
  },
  {
    uid: "2",
    cover: "/images/800x600.png",
    avatar: "/images/200x200.png",
    name: "Katrina West",
    itemsCount: "3651",
  },
  {
    uid: "3",
    cover: "/images/800x600.png",
    avatar: "/images/200x200.png",
    name: "Raul Bradley",
    itemsCount: "4692",
  },
  {
    uid: "4",
    cover: "/images/800x600.png",
    avatar: null,
    name: "Henry Curtis",
    itemsCount: "7491",
  },
];

export function FeaturedArtists() {
  return (
    <div className="col-span-12 lg:col-span-8 xl:col-span-9">
      <div className="flex items-center justify-between">
        <h3 className="min-w-0 text-xl font-medium text-slate-800 dark:text-dark-50">
          Featured Artists
        </h3>
        <a
          href="##"
          className="border-b border-dotted border-current pb-0.5 text-xs+ font-medium text-primary-600 outline-none transition-colors duration-300 hover:text-primary-600/70 focus:text-primary-600/70 dark:text-primary-400 dark:hover:text-primary-400/70 dark:focus:text-primary-400/70"
        >
          View All
        </a>
      </div>
      <div className="mt-4 grid grid-cols-2 gap-4 sm:grid-cols-4 sm:gap-5">
        {artists.map((artist) => (
          <ArtistCard key={artist.uid} {...artist} />
        ))}
      </div>
    </div>
  );
}
