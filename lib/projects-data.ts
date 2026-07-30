export interface Project {
  id: number;
  title: string;
  description: string;
  image?: string;
  images?: string[];
  tags: string[];
  github: string;
  featured: boolean;
}

export const projects: Project[] = [
  {
    id: 1,
    title: "ParkWise Mobile Application",
    description: "A mobile application that helps users find parking spots and provides real-time information about parking availability.",
    image: "/projects/parkwise.png",
    images: ["/projects/parkwise.png"],
    tags: ["React Native", "Node.js", "Express", "PostgreSQL"],
    github: "https://github.com",
    featured: true,
  },
  {
    id: 2,
    title: "BiteHub Mobile Application",
    description: "A mobile application that helps users order food from different restaurants and provides real-time information about food availability.",
    image: "/projects/bite.png",
    images: ["/projects/bite.png"],
    tags: ["React Native", "Express", "Node.js", "PostgreSQL"],
    github: "https://github.com",
    featured: true,
  },
  {
    id: 3,
    title: "Akwa-Flo: Water Refilling Management System",
    description: "A mobile application that helps users order water, reserve water refilling slots and provides real-time information about water availability.",
    image: "/projects/akwa.png",
    images: ["/projects/akwa.png"],
    tags: ["React", "Node.js", "PostgreSQL"],
    github: "https://github.com",
    featured: true,
  },
];
