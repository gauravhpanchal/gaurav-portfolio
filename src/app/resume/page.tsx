import type { Metadata } from "next";
import React from "react";
import DownloadCV from "@/components/resume/download-cv";
import TimeLine from "@/components/resume/timeline";
import PageHeader from "@/components/page-header";
import config from "@/config";

const { title } = config;

const { resume } = config;
const { professionalExperiences, educations, certifications, achievements } = resume;

export const metadata: Metadata = {
  title: `Resume | ${title}`,
};

const Resume = () => {
  return (
    <article data-page="">
      <PageHeader header="Gaurav's Resume" />
      <DownloadCV />
      <TimeLine data={professionalExperiences} />
      <TimeLine data={educations} />
      {certifications && <TimeLine data={certifications} />}
      {achievements && <TimeLine data={achievements} />}
    </article>
  );
};

export default Resume;
