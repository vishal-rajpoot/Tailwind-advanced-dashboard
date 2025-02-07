// Import Dependencies
import { PlusIcon } from "@heroicons/react/20/solid";

// Local Imports
import { Avatar } from "components/ui";

// ----------------------------------------------------------------------

const featuredAuthors = [
  {
    uid: "6",
    name: "Henry Curtis",
    avatar: "/images/200x200.png",
  },
  {
    uid: "7",
    name: "Raul Bradley",
    avatar: "/images/200x200.png",
  },
  {
    uid: "8",
    name: "Samantha Shelton",
    avatar: null,
  },
  {
    uid: "9",
    name: "Corey Evans",
    avatar: "/images/200x200.png",
  },
];

export function Header() {
  return (
    <div className="mt-6 flex flex-col items-center justify-between space-y-2 text-center sm:flex-row sm:space-y-0 sm:text-start">
      <div>
        <h3 className="text-xl font-semibold text-gray-800 dark:text-dark-100">
          Blogboard
        </h3>
        <p className="mt-1 hidden sm:block">Manage articles and authors</p>
      </div>

      <div>
        <p className="font-medium text-gray-800 dark:text-dark-100">
          Featured Authors
        </p>
        <div className="mt-2 flex space-x-2 rtl:space-x-reverse">
          {featuredAuthors.map((author) => (
            <Avatar
              key={author.uid}
              size={8}
              name={author.name}
              src={author.avatar}
              initialColor="auto"
              classNames={{
                display: "mask is-squircle rounded-none text-xs+",
              }}
            />
          ))}
          <Avatar
            size={8}
            component="button"
            color="primary"
            title="Add Author"
            classNames={{
              display: "mask is-squircle rounded-none text-xs+",
            }}
          >
            <PlusIcon className="size-4" />
          </Avatar>
        </div>
      </div>
    </div>
  );
}
