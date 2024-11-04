// https://github.com/sleepymalc/pbb.wtf/blob/main/config.js

import { Config } from "@/types/config";
import { MdOutlineDevices } from "react-icons/md";
import { IoSchoolOutline } from "react-icons/io5";
import { PiTrophy } from "react-icons/pi";
import { PiBooks } from "react-icons/pi";

const config: Config = {
  avatar: "/images/profileImage.jpeg",
  title: "Gaurav H Panchal | Full Stack Web Developer",
  description:
    "I'm Gaurav H Panchal, a graduate with a Bachelor's degree from Mumbai University (MU) 🐿️, driven by a sincere passion for Software Engineering 💻.",
  author: "Gaurav H Panchal",
  keywords: [
    "Gaurav H Panchal",
    "1chooo",
    "Software Engineering",
    "Next.js",
    "React",
  ],
  status: "Day ONE ⚡️",
  openGraph: {
    url: "https://1chooo.com/",
    type: "website",
    siteName: "Gaurav H Panchal | Full Stack Web Developer",
    title: "Gaurav H Panchal | Full Stack Web Developer",
    description:
      "I'm Gaurav H Panchal, a graduate with a Bachelor's degree from Mumbai University (MU) 🐿️, driven by a sincere passion for Software Engineering 💻.",
    images: [
      {
        url: "https://docs.1chooo.com/images/cover-with-1chooo-com.png",
        width: 1200,
        height: 630,
        alt: "Gaurav Cover Image",
      },
    ],
  },
  navItems: [
    { path: "/", label: "About" },
    { path: "/resume", label: "Resume" },
    { path: "/portfolio", label: "Portfolio" },
    // { path: "/blog", label: "Blog" },
    { path: "/contact", label: "Contact" },
  ],
  about: {
    subHeader: "$ ls -al Gaurav 👨🏻‍💻",
    firstName: "Gaurav",
    lastName: "",
    middleName: "Panchal",
    preferredName: "",
    additionalName: "",
    pronouns: "He/Him",
    socialMedia: {
      githubUsername: "gauravhpanchal",
      mediumUsername: "",
      twitterUsername: "",
      linkedinUsername: "gauravh-panchal",
    },
    introductions: [
      // "#### $ ls -al Gaurav 👨🏻‍💻 (He/Him)", {/* TODO: #157 */}
      // "I obtained my Bachelor's degree from [Mumbai University 🐿️], driven by a *sincere passion* for **Software Engineering 💻.**",
      // `My current research interests include ***Programming Language Theory, Operating Systems, and Compilers.*** To gain practical experience, I developed my own ***<a href="https://en.wikipedia.org/wiki/Lisp_(programming_language)">Lisp</a>*** interpreter using **<a href="https://en.wikipedia.org/wiki/C_(programming_language)">C</a>** <sup>[[Code](https://github.com/1chooo/compiler-101)]</sup> and implemented [***Monkey Programming***](https://monkeylang.org/) Compiler with [**GO**](https://go.dev/) <sup>[[Code](https://github.com/1chooo/monkey-prog-lang)]</sup>.`,
      "Skilled web developer with 1.5 months of professional experience in an Indian and USA based company, expert in JavaScript, React.js, and Next.js, NodeJS, MongoDB, Express. Passionate about creating efficient, visually appealing, and user-friendly websites. Committed to continuous learning and utilizing the latest web development technologies.",
      "In my spare time, I do workouts 💪🏻, street photography 📸, and speed Cubing 💠.",
      "**`Self-motivated, Team player, Love coding 👨🏻‍💻`**",
    ],
    lifestyles: [
      {
        icon: "/images/icons/developer.png",
        title: "Development",
        text: "Actively learning new technologies and frameworks.",
      },
      {
        icon: "/images/icons/writing.png",
        title: "Freelancing",
        text: "Love to work on different projects and meet different minds.",
      },
      {
        icon: "/images/icons/dumbbell.png",
        title: "Workouts",
        text: "Weight training defines my active workout lifestyle.",
      },
      {
        icon: "/images/icons/camera.png",
        title: "Photography",
        text: "Sky brings freedom; streets, a reminder of others' contributions.",
      },
    ],
    programmingLanguage: [
      {
        id: "react",
        src: "https://skillicons.dev/icons?i=react",
        alt: "react",
      },
      {
        id: "nextjs",
        src: "https://skillicons.dev/icons?i=nextjs",
        alt: "nextjs",
      },
      { id: "js", src: "https://skillicons.dev/icons?i=js", alt: "js" },
      {
        id: "nodejs",
        src: "https://skillicons.dev/icons?i=nodejs",
        alt: "nodejs",
      },
      {
        id: "express",
        src: "https://skillicons.dev/icons?i=express",
        alt: "express",
      },
      {
        id: "mongodb",
        src: "https://skillicons.dev/icons?i=mongodb",
        alt: "mongodb",
      },
      {
        id: "tailwind",
        src: "https://skillicons.dev/icons?i=tailwind",
        alt: "tailwind",
      },
    ],
    devOps: [
      { id: "html", src: "https://skillicons.dev/icons?i=html", alt: "html" },
      { id: "css	", src: "https://skillicons.dev/icons?i=css	", alt: "css	" },
      {
        id: "github",
        src: "https://skillicons.dev/icons?i=github",
        alt: "github",
      },
      {
        id: "postman",
        src: "https://skillicons.dev/icons?i=postman",
        alt: "postman",
      },
      {
        id: "redux",
        src: "https://skillicons.dev/icons?i=redux",
        alt: "redux",
      },
      {
        id: "supabase",
        src: "https://skillicons.dev/icons?i=supabase",
        alt: "supabase",
      },

      {
        id: "wordpress",
        src: "https://skillicons.dev/icons?i=wordpress",
        alt: "wordpress",
      },
    ],
  },
  resume: {
    educations: {
      icon: IoSchoolOutline,
      title: "Education",
      items: [
        {
          company: "Lovely Professional University",
          location: "Distance - Punjab, India",
          role: "Master of Computer Applications (MCA)",
          duration: "2023 — Present",
          tasksMarkdown: ``,
        },
        {
          company: "Masai School",
          location: "Online",
          role: "Full Stack Web Developement",
          duration: "2022 — 2023",
          tasksMarkdown: ``,
        },
        {
          company: "Mumbai University",
          location: "Mumbai",
          role: "BE (Production Engineering)",
          duration: "2015 — 2019",
          tasksMarkdown: ``,
        },
      ],
    },
    professionalExperiences: {
      icon: MdOutlineDevices,
      title: "Professional Experience",
      items: [
        {
          company: "Pacedream",
          location: "Remote",
          role: "Freelance Frontend Developer",
          duration: "Jan. 2024 - Sep. 2024",
          tasksMarkdown: `
- Develop and maintain pixel-perfect user interfaces based on
Figma designs.
- Work closely with designers, backend developers, and other
team members to ensure seamless integration of the UI with
backend services.
- Monitor and optimize the performance of the UI to ensure fast
load times and smooth user experiences.
- Implement frontend best practices to enhance performance,
such as lazy loading, code splitting, and efficient asset
management.
          `,
        },
        {
          company: "CityCabz",
          location: "Mumbai, India",
          role: "Web Developer",
          duration: "Jul. 2023 - Jan. 2024",
          tasksMarkdown: `
- Develop user friendly and mobilefirst approach websites for
Tour and Travel Company.
- Market research for search engine optimization.
- Develop and maintain pixel-perfect user interfaces based on
Figma designs.
          `,
        },
      ],
    },
  },
};

export default config;
