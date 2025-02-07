// Local Imports
import { Card } from "components/ui";
import { ArtistCard } from "./ArtistCard";

// ----------------------------------------------------------------------

const artists = [
  {
    uid: "1",
    name: "Konnor Guzman",
    avatar: "/images/200x200.png",
    itemsCount: "2616",
    featuredItems: [
      {
        uid: "1",
        cover: "/images/800x600.png",
        name: "Cube Store #025",
        price: 5.03,
      },
      {
        uid: "2",
        cover: "/images/800x600.png",
        name: "The Runner #0456",
        price: 4.26,
      },
      {
        uid: "3",
        cover: "/images/800x600.png",
        name: "Punkiber #5764",
        price: 2.32,
      },
      {
        uid: "4",
        cover: "/images/800x600.png",
        name: "Kiberpink #3698",
        price: 15.26,
      },
    ],
  },
  {
    uid: "2",
    name: "Raul Bradley",
    avatar: "/images/200x200.png",
    itemsCount: "1694",
    featuredItems: [
      {
        uid: "1",
        cover: "/images/800x600.png",
        name: "Abstrac Point #762",
        price: 6.69,
      },
      {
        uid: "2",
        cover: "/images/800x600.png",
        name: "Superdiamond #169",
        price: 2.11,
      },
      {
        uid: "3",
        cover: "/images/800x600.png",
        name: "CyberPink #559",
        price: 1.62,
      },
    ],
  },
  {
    uid: "3",
    name: "Anthony Jensen",
    avatar: "/images/200x200.png",
    itemsCount: "541",
    featuredItems: [
      {
        uid: "1",
        cover: "/images/800x600.png",
        name: "The Digital Art #682",
        price: 12.3,
      },
      {
        uid: "2",
        cover: "/images/800x600.png",
        name: "Geomatro Art #329",
        price: 4.11,
      },
      {
        uid: "3",
        cover: "/images/800x600.png",
        name: "3D Cube Art #012",
        price: 7.26,
      },
      {
        uid: "4",
        cover: "/images/800x600.png",
        name: "The Runner #863",
        price: 9.16,
      },
    ],
  },
];

export function FeaturedArtists() {
  return (
    <Card className="pb-4">
      <div className="flex h-14 min-w-0 items-center justify-between px-4 py-3">
        <h2 className="font-medium tracking-wide text-gray-800 dark:text-dark-100">
          Feautred Artists
        </h2>
        <a
          href="##"
          className="border-b border-dotted border-current pb-0.5 text-xs+ font-medium text-primary-600 outline-none transition-colors duration-300 hover:text-primary-600/70 focus:text-primary-600/70 dark:text-primary-400 dark:hover:text-primary-400/70 dark:focus:text-primary-400/70"
        >
          View All
        </a>
      </div>
      <div className="space-y-5.5">
        {artists.map((artist) => (
          <ArtistCard key={artist.uid} {...artist} />
        ))}
      </div>
    </Card>
  );
}
