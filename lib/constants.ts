export type Event = {
  id: string;
  title: string;
  slug?: string;
  date: string; // ISO date
  location?: string;
  description?: string;
  url?: string;
  image: string; // public image path (starts with /images)
  tags?: string[];
};

export const events: Event[] = [
  {
    id: "devcon-2025",
    title: "DevCon 2025",
    slug: "devcon-2025",
    date: "2025-11-18",
    location: "San Francisco, CA (Hybrid)",
    description:
      "A 3-day conference for full-stack engineers, platform teams, and engineering leaders. Talks, workshops, and networking focused on modern web platforms.",
    url: "https://devcon.example.com",
    image: "/images/event1.png",
    tags: ["conference", "web", "platforms"],
  },
  {
    id: "europe-js-2025",
    title: "Europe JS Summit 2025",
    slug: "europe-js-2025",
    date: "2025-12-03",
    location: "Berlin, Germany",
    description:
      "Europe's premier JavaScript summit covering framework-agnostic best practices, performance, and tooling.",
    url: "https://europejs.example.com",
    image: "/images/event2.png",
    tags: ["javascript", "frontend", "performance"],
  },
  {
    id: "global-hack-2026",
    title: "Global Hack 2026",
    slug: "global-hack-2026",
    date: "2026-01-17",
    location: "Online",
    description:
      "48-hour global hackathon with tracks for AI, web3, accessibility, and sustainability. Open to students and professionals.",
    url: "https://globalhack.example.com",
    image: "/images/event3.png",
    tags: ["hackathon", "ai", "online"],
  },
  {
    id: "react-next-summit-2026",
    title: "React + Next Summit",
    slug: "react-next-summit-2026",
    date: "2026-02-25",
    location: "London, UK",
    description:
      "Focused sessions and deep dives on React and Next.js. Ideal for frontend engineers building production apps.",
    url: "https://reactnext.example.com",
    image: "/images/event4.png",
    tags: ["react", "nextjs", "frontend"],
  },
  {
    id: "security-day-2025",
    title: "Security Day: AppSec",
    slug: "security-day-2025",
    date: "2025-11-05",
    location: "New York, NY",
    description:
      "One-day event focused on application security, secure CI/CD, and threat modeling for engineering teams.",
    url: "https://securityday.example.com",
    image: "/images/event5.png",
    tags: ["security", "devops", "appsec"],
  },
  {
    id: "startup-weekend-2025",
    title: "Startup Weekend: Builders",
    slug: "startup-weekend-2025",
    date: "2025-12-12",
    location: "Austin, TX",
    description:
      "An in-person weekend for founders and builders to form teams, validate ideas, and build a demo.",
    url: "https://startupweekend.example.com",
    image: "/images/event6.png",
    tags: ["startup", "entrepreneurship", "hackathon"],
  },
  {
    id: "local-meetup-series",
    title: "Local Dev Meetup Series",
    slug: "local-dev-meetup",
    date: "2025-11-12",
    location: "Seattle, WA",
    description: "Monthly meetup with lightning talks and open networking for local engineers.",
    url: "https://meetup.example.com/local-dev",
    image: "/images/event-full.png",
    tags: ["meetup", "community"],
  },
];
