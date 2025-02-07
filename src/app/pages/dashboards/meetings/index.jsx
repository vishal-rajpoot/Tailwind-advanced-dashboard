// Import Dependencies
import { PlusIcon } from "@heroicons/react/24/outline";

// Local Imports
import { Page } from "components/shared/Page";
import { Avatar } from "components/ui";
import { MeetingCard } from "./MeetingCard";

// ----------------------------------------------------------------------

const teamMembers = [
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

const todayMeetings = [
  {
    uid: '1',
    isActive: true,
    title: "Product Roadmap Q4",
    description: "Lorem ipsum dolor sit amet, consectetur.",
    image: "/images/800x600.png",
    meetingDate: "Today",
    meetingRange: "11:30 - 13:00",
    members: [
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
    ],
  },
  {
    uid: '2',
    isActive: false,
    title: "Design Review",
    description: "Lorem ipsum dolor sit amet.",
    image: "/images/800x600.png",
    meetingDate: "Today",
    meetingRange: "16:00 - 16:30",
    members: [
      {
        uid: "1",
        name: "Henry Curtis",
        avatar: "/images/200x200.png",
      },
      {
        uid: "2",
        name: "Raul Bradley",
        avatar: "/images/200x200.png",
      },
      {
        uid: "3",
        name: "Samantha Shelton",
        avatar: null,
      },
      {
        uid: "4",
        name: "Corey Evans",
        avatar: "/images/200x200.png",
      },
      {
        uid: "5",
        name: "Travis Fuller",
        avatar: "/images/200x200.png",
      },
      {
        uid: "6",
        name: "Alfredo Elliott",
        avatar: "/images/200x200.png",
      },
    ],
  },
  {
    uid: '3',
    isActive: false,
    title: "Weekly meeting",
    description: "Consectetur adipisicing elit.",
    image: "/images/800x600.png",
    meetingDate: "Today",
    meetingRange: "18:00 - 18:45",
    members: [
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
      {
        uid: "11",
        name: "Anthony Jensen",
        avatar: "/images/200x200.png",
      },
      {
        uid: "12",
        name: "Anthony Jensen",
        avatar: "/images/200x200.png",
      },
    ],
  },
];

const weekMeetings = [
  {
    uid: '1',
    isActive: false,
    title: "Sales Presentation",
    description: "Iure odio placeat temporibus.",
    image: "/images/800x600.png",
    meetingDate: "Tomorrow",
    meetingRange: "11:30 - 12:00",
    members: [
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
    ],
  },
  {
    uid: '2',
    isActive: false,
    title: "Testing Vol. 1",
    description: "In iste labore odit sapiente?",
    image: "/images/800x600.png",
    meetingDate: "THU, May 25, 2022",
    meetingRange: "14:30 - 15:00",
    members: [
      {
        uid: "4",
        name: "Corey Evans",
        avatar: "/images/200x200.png",
      },
      {
        uid: "5",
        name: "Travis Fuller",
        avatar: "/images/200x200.png",
      },
      {
        uid: "6",
        name: "Alfredo Elliott",
        avatar: "/images/200x200.png",
      },
      {
        uid: "1",
        name: "Henry Curtis",
        avatar: "/images/200x200.png",
      },
      {
        uid: "2",
        name: "Raul Bradley",
        avatar: "/images/200x200.png",
      },
      {
        uid: "3",
        name: "Samantha Shelton",
        avatar: null,
      },
    ],
  },
];

const monthMeetings = [
  {
    uid: '1',
    isActive: false,
    title: "New Analysis App",
    description: "Lorem ipsum dolor sit amet, consectetur..",
    image: "/images/800x600.png",
    meetingDate: "Mon, June 18, 2022",
    meetingRange: "08:00 - 09:00",
    members: [
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
    uid: '2',
    isActive: false,
    title: "React Conf",
    description: "In iste labore odit sapiente?",
    image: "/images/800x600.png",
    meetingDate: "SAT, June 21, 2022",
    meetingRange: "10:00 - 12:00",
    members: [
      {
        uid: "3",
        name: "Samantha Shelton",
        avatar: null,
      },
      {
        uid: "4",
        name: "Corey Evans",
        avatar: "/images/200x200.png",
      },
      {
        uid: "5",
        name: "Travis Fuller",
        avatar: "/images/200x200.png",
      },
      {
        uid: "1",
        name: "Henry Curtis",
        avatar: "/images/200x200.png",
      },
      {
        uid: "2",
        name: "Raul Bradley",
        avatar: "/images/200x200.png",
      },

      {
        uid: "6",
        name: "Alfredo Elliott",
        avatar: "/images/200x200.png",
      },
    ],
  },
  {
    uid: '3',
    isActive: false,
    title: "Monthly meeting",
    description: "Consectetur adipisicing elit.",
    image: "/images/800x600.png",
    meetingDate: "MON, 31 June, 2022",
    meetingRange: "18:00 - 18:45",
    members: [
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
      {
        uid: "11",
        name: "Anthony Jensen",
        avatar: "/images/200x200.png",
      },
      {
        uid: "12",
        name: "Anthony Jensen",
        avatar: "/images/200x200.png",
      },
    ],
  },
];

export default function Meetings() {
  return (
    <Page title="Meetings">
      <div className="transition-content w-full px-[--margin-x] pb-8">
        <div className="mt-6 flex flex-col items-center justify-between space-y-2 text-center sm:flex-row sm:space-y-0 sm:text-start">
          <div>
            <h3 className="text-xl font-semibold text-gray-800 dark:text-dark-100">
              Your Meetings
            </h3>
            <p className="mt-1 hidden sm:block">Recent meetings in your team</p>
          </div>

          <div>
            <p className="font-medium text-gray-800 dark:text-dark-100">
              Team Members
            </p>
            <div className="mt-2 flex space-x-2 rtl:space-x-reverse">
              {teamMembers.map((member) => (
                <Avatar
                  size={8}
                  key={member.uid}
                  name={member.name}
                  src={member.avatar}
                  initialColor="auto"
                  classNames={{
                    display: "mask is-squircle rounded-none text-xs+",
                  }}
                />
              ))}
              <Avatar
                size={8}
                component="button"
                title="Add Member"
                classNames={{
                  display: "mask is-squircle rounded-none text-xs+",
                }}
                initialColor="primary"
              >
                <PlusIcon className="size-4" />
              </Avatar>
            </div>
          </div>
        </div>

        <div className="mt-4">
          <h3 className="text-base font-medium text-gray-800 dark:text-dark-100">
            Today
          </h3>
          <div className="mt-3 grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3 lg:gap-6">
            {todayMeetings.map((meeting) => (
              <MeetingCard
                key={meeting.uid}
                isActive={meeting.isActive}
                members={meeting.members}
                image={meeting.image}
                title={meeting.title}
                description={meeting.description}
                meetingDate={meeting.meetingDate}
                meetingRange={meeting.meetingRange}
              />
            ))}
          </div>
        </div>

        <div className="mt-4 sm:mt-5 lg:mt-6">
          <h3 className="text-base font-medium text-gray-800 dark:text-dark-100">
            This week
          </h3>
          <div className="mt-3 grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3 lg:gap-6">
            {weekMeetings.map((meeting) => (
              <MeetingCard
                key={meeting.uid}
                isActive={meeting.isActive}
                members={meeting.members}
                image={meeting.image}
                title={meeting.title}
                description={meeting.description}
                meetingDate={meeting.meetingDate}
                meetingRange={meeting.meetingRange}
              />
            ))}
          </div>
        </div>

        <div className="mt-4 sm:mt-5 lg:mt-6">
          <h3 className="text-base font-medium text-gray-800 dark:text-dark-100">
            This Month
          </h3>
          <div className="mt-3 grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3 lg:gap-6">
            {monthMeetings.map((meeting) => (
              <MeetingCard
                key={meeting.uid}
                isActive={meeting.isActive}
                members={meeting.members}
                image={meeting.image}
                title={meeting.title}
                description={meeting.description}
                meetingDate={meeting.meetingDate}
                meetingRange={meeting.meetingRange}
              />
            ))}
          </div>
        </div>
      </div>
    </Page>
  );
}
