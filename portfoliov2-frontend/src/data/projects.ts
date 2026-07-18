export interface Project {
  title: string;
  description: string;
  link: string;
  tags: string[];
}

export const projects: Project[] = [
  {
    title: "Booking Application",
    description: "A Fullstack booking system, where you can create a company, employees and book appointments as an user.",
    link: "https://github.com/chris924",
    tags: ["React", "TypeScript", "Java", "Spring Boot"],
  },
  {
    title: "Project Two",
    description: "Work in progress.",
    link: "https://github.com/chris924",
    tags: [],
  },
  {
    title: "Project Three",
    description: "Work in progress",
    link: "https://github.com/chris924",
    tags: [],
  },
];
