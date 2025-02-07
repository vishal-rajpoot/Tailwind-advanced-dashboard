// Local Imports
import { ClassCard } from "./ClassCard";

// ----------------------------------------------------------------------

const classes = [
  {
    uid: 1,
    image: "/images/800x600.png",
    name: "Basic English",
    category: "Language",
    time: "Mon. 08:00 - 09:00",
    color: "primary",
    students: [
      {
        uid: "5",
        name: "Katrina West",
        avatar: "/images/200x200.png",
      },
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
    ],
  },
  {
    uid: 2,
    image: "/images/800x600.png",
    name: "Learn UI/UX Design",
    category: "UI/UX Design",
    time: "Tue. 10:00 - 11:30",
    color: "info",
    students: [
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
      {
        uid: "10",
        name: "Lance Tucker",
        avatar: null,
      },
    ],
  },
  {
    uid: 3,
    image: "/images/800x600.png",
    name: "Basic of digital marketing",
    category: "Marketing",
    time: "Wed. 09:00 - 11:00",
    color: "secondary",
    students: [
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
    ],
  },
];

export function Classes() {
  return (
    <div className="mt-4 sm:mt-5 lg:mt-6">
      <div className="flex h-8 min-w-0 items-center justify-between">
        <h2 className="truncate text-base font-medium tracking-wide text-gray-800 dark:text-dark-100">
          Week 2 Classes
        </h2>
        <a
          href="##"
          className="border-b border-dotted border-current pb-0.5 text-xs+ font-medium text-primary-600 outline-none transition-colors duration-300 hover:text-primary-600/70 focus:text-primary-600/70 dark:text-primary-400 dark:hover:text-primary-400/70 dark:focus:text-primary-400/70"
        >
          View All
        </a>
      </div>
      <div className="mt-3 grid grid-cols-1 gap-4 sm:grid-cols-3 sm:gap-5">
        {classes.map((item) => (
          <ClassCard
            key={item.uid}
            name={item.name}
            image={item.image}
            time={item.time}
            category={item.category}
            color={item.color}
            students={item.students}
          />
        ))}
      </div>
    </div>
  );
}
