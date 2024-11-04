export const projectTags = ["All", "App development", "Web development"];

export interface Project {
  title: string;
  category: string;
  imageUrl: string;
  link: string;
}

export const projectsData: Project[] = [
  {
    title: "Pacedream",
    category: "Web development",
    imageUrl: "/images/projects/pacedream.png",
    link: "#",
  },
  {
    title: "Hirred",
    category: "Web development",
    imageUrl: "/images/projects/hirred.png",
    link: "https://github.com/gauravhpanchal/get-hired",
  },
  {
    title: "Haan Store",
    category: "Web development",
    imageUrl: "/images/projects/haan.png",
    link: "https://github.com/samarjeetpatankar/Hand-Sanitizer-website",
  },
  {
    title: "Maharashtra Tours",
    category: "Web development",
    imageUrl: "/images/projects/maharashtratours.png",
    link: "https://github.com/maharashtra-tour/Maharashtra-Tour",
  },
  {
    title: "Skinstore Clone",
    category: "Web development",
    imageUrl: "/images/projects/skinstoreImg.png",
    link: "https://github.com/samarjeetpatankar/SkinStore-clone",
  },
  {
    title: "Haan Store",
    category: "App development",
    imageUrl: "/images/projects/haan.png",
    link: "https://github.com/samarjeetpatankar/Hand-Sanitizer-website",
  },
];
