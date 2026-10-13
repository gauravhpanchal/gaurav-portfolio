// https://github.com/sleepymalc/pbb.wtf/blob/main/config.js

import { Config } from "@/types/config";
import { MdOutlineDevices } from "react-icons/md";
import { IoSchoolOutline } from "react-icons/io5";
import { PiTrophy, PiCertificate } from "react-icons/pi";

const config: Config = {
  avatar: "/images/profileImage.jpeg",
  title: "Gaurav Panchal | Full Stack Engineer",
  description:
    "Results-driven Full Stack Engineer with nearly 3 years of experience specializing in scalable full-stack applications, cloud-native architectures, and Generative AI solutions.",
  author: "Gaurav Panchal",
  keywords: [
    "Gaurav Panchal",
    "Full Stack Engineer",
    "Software Engineering",
    "Next.js",
    "React",
    "Node.js",
    "AWS",
    "Generative AI",
    "RAG",
    "TypeScript",
    "Python",
  ],
  status: "Full Stack Engineer ⚡️",
  openGraph: {
    url: "https://portfolio-web-gaurav.vercel.app/",
    type: "website",
    siteName: "Gaurav Panchal | Full Stack Engineer",
    title: "Gaurav Panchal | Full Stack Engineer",
    description:
      "Results-driven Full Stack Engineer with nearly 3 years of experience specializing in scalable full-stack applications, cloud-native architectures, and Generative AI solutions.",
    images: [
      {
        url: "https://portfolio-web-gaurav.vercel.app/",
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
      "Results-driven **Full Stack Engineer** with nearly 3 years of experience, recognized through the **GitHub Pro Badge (1,261+ contributions)**. Bringing strong problem-solving, ownership, and proven proficiency in delivering end-to-end software solutions across React.js, Node.js, Next.js, Express.js, TypeScript, and Python.",
      "Hands-on expertise in cloud-native and event-driven architectures leveraging **AWS services (Lambda, S3, SQS, EventBridge)**, distributed workflows with **Temporal.io**, modern databases (**DynamoDB, MySQL, MongoDB**), and **Generative AI & RAG solutions** using LangChain and Milvus Vector DB.",
      "In my spare time, I do workouts 💪🏻, street photography 📸, and speed cubing 💠.",
      "**`Self-motivated, Team player, Love coding 👨🏻‍💻`**",
    ],
    lifestyles: [
      {
        icon: "/images/icons/developer.png",
        title: "Development",
        text: "Actively architecting scalable systems and exploring Generative AI solutions.",
      },
      {
        icon: "/images/icons/writing.png",
        title: "Freelancing",
        text: "Love to collaborate on diverse projects and solve complex challenges.",
      },
      {
        icon: "/images/icons/dumbbell.png",
        title: "Workouts",
        text: "Weight training defines my active workout lifestyle.",
      },
      {
        icon: "/images/icons/camera.png",
        title: "Photography",
        text: "Street and urban photography capturing unique moments and perspectives.",
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
      {
        id: "ts",
        src: "https://skillicons.dev/icons?i=ts",
        alt: "typescript",
      },
      { id: "js", src: "https://skillicons.dev/icons?i=js", alt: "javascript" },
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
        id: "py",
        src: "https://skillicons.dev/icons?i=py",
        alt: "python",
      },
      {
        id: "flask",
        src: "https://skillicons.dev/icons?i=flask",
        alt: "flask",
      },
      {
        id: "mongodb",
        src: "https://skillicons.dev/icons?i=mongodb",
        alt: "mongodb",
      },
      {
        id: "mysql",
        src: "https://skillicons.dev/icons?i=mysql",
        alt: "mysql",
      },
    ],
    devOps: [
      {
        id: "aws",
        src: "https://skillicons.dev/icons?i=aws",
        alt: "aws",
      },
      {
        id: "redux",
        src: "https://skillicons.dev/icons?i=redux",
        alt: "redux",
      },
      {
        id: "tailwind",
        src: "https://skillicons.dev/icons?i=tailwind",
        alt: "tailwind",
      },
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
        id: "html",
        src: "https://skillicons.dev/icons?i=html",
        alt: "html",
      },
      {
        id: "css",
        src: "https://skillicons.dev/icons?i=css",
        alt: "css",
      },
    ],
  },
  resume: {
    educations: {
      icon: IoSchoolOutline,
      title: "Education",
      items: [
        {
          company: "Masai School",
          location: "Bangalore",
          role: "Full Stack Web Development",
          duration: "2022 — 2023",
          tasksMarkdown: ``,
        },
        {
          company: "Mumbai University",
          location: "Mumbai",
          role: "Bachelor of Engineering (Production Engineering) — CGPI: 6.33",
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
          company: "Resident Interface India Pvt. Ltd.",
          location: "Pune",
          role: "Full Stack Engineer",
          duration: "Aug 2025 – Oct 2026",
          tasksMarkdown: `
- Developed end-to-end product features across React.js and Node.js environments, managed the complete development lifecycle from design through deployment.
- Designed fault-tolerant workflows using Temporal.io for reliable process execution.
- Architected scalable data solutions using DynamoDB and MySQL to support high-performance transactional & operational workloads.
- Built serverless applications and event-driven services leveraging AWS Lambda, SQS, EventBridge, and S3 to enhance scalability, reliability, and system performance.
          `,
        },
        {
          company: "DataNnovite Solutions",
          location: "Pune, India",
          role: "Associate Full Stack Developer",
          duration: "Jan 2025 – May 2025",
          tasksMarkdown: `
- Developed scalable full-stack web applications using React.js, Node.js, Express.js, and Flask for business-critical use cases.
- Built Generative AI-powered RAG pipelines utilizing LangChain and Milvus Vector DB to enable intelligent extraction and retrieval of financial and KYC document data.
- Integrated Server-Sent Events (SSE) and RabbitMQ to support real-time data streaming and asynchronous messaging capabilities.
- Managed end-to-end SDLC activities, including low-level design, testing, debugging, and API performance optimization.
          `,
        },
        {
          company: "Freelance Full Stack Developer",
          location: "Remote",
          role: "Freelance Full Stack Developer",
          duration: "Jan 2024 – Dec 2024",
          tasksMarkdown: `
- Developed responsive user interfaces from Figma designs using React.js and integrated back-end services to deliver seamless application functionality.
- Integrated and consumed RESTful APIs to enable efficient client-server communication and data exchange.
- Optimized front-end performance and streamlined API payloads to improve application responsiveness and user experience.
- Designed and implemented a robust backend architecture using Node.js and Express.js, seamlessly integrating RESTful APIs and database services for enhanced performance.
          `,
        },
        {
          company: "CityCabz",
          location: "Mumbai, India",
          role: "Web Developer",
          duration: "Nov 2022 – Jan 2024",
          tasksMarkdown: `
- Designed and developed mobile-first websites for the travel and tourism industry, enhancing usability and customer engagement.
- Optimized website architecture and content for search engines, achieving first-page Google rankings for targeted keywords.
- Deployed and maintained website hosting environments on custom domains while ensuring security, stability, and high availability.
          `,
        },
      ],
    },
    certifications: {
      icon: PiCertificate,
      title: "Certifications",
      items: [
        {
          company: "Masai School",
          location: "Bangalore",
          role: "Masai Assessment Assistantship Program",
          duration: "2024",
          tasksMarkdown: ``,
        },
        {
          company: "NamasteDev",
          location: "Online",
          role: "Namaste React",
          duration: "2023",
          tasksMarkdown: ``,
        },
      ],
    },
    achievements: {
      icon: PiTrophy,
      title: "Achievements",
      items: [
        {
          company: "GitHub",
          location: "Global",
          role: "GitHub Pro Badge",
          duration: "1,261+ Contributions",
          tasksMarkdown: `Achieved 1,261+ contributions through active participation in software development and open-source projects.`,
        },
        {
          company: "Online Platforms",
          location: "Competitive Programming",
          role: "Data Structures & Algorithms Excellence",
          duration: "601+ Problems Solved",
          tasksMarkdown: `Solved 601+ coding challenges across online programming platforms, exhibiting strong analytical and problem-solving capabilities.`,
        },
        {
          company: "Masai School",
          location: "Bangalore",
          role: "Masai Assessment Assistantship Program Recognition",
          duration: "2024",
          tasksMarkdown: `Selected for successfully completing the assessment and assistantship program at Masai School.`,
        },
      ],
    },
  },
};

export default config;
