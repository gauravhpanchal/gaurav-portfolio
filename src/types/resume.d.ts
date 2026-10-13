import { IconType } from "react-icons";

export type TimelineItem = {
  company: string;
  location: string;
  role: string;
  duration: string;
  tasksMarkdown: string;
};

export type TimelineSection = {
  icon: IconType;
  title: string;
  items: TimelineItem[];
};

export type Education = TimelineSection;
export type ProfessionalExperience = TimelineSection;

export type Resume = {
  educations: Education;
  professionalExperiences: ProfessionalExperience;
  certifications?: TimelineSection;
  achievements?: TimelineSection;
};

export type ResumeProps = {
  name: string;
  title: string;
  items: {
    icon: IconType;
    title: string;
    text: string;
  }[];
};
