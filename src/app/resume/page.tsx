import type { Metadata } from "next";
import React from "react";
import DownloadCV from "@/components/resume/download-cv";
import TimeLine from "@/components/resume/timeline";
import PageHeader from "@/components/page-header";
import config from "@/config";

const { title } = config;

const { resume } = config;
const { professionalExperiences } = resume;
const { educations } = resume;

export const metadata: Metadata = {
  title: `Resume | ${title}`,
};

const profExp = <TimeLine data={professionalExperiences} />;
const education = <TimeLine data={educations} />;

const Resume = () => {
  return (
    <article data-page="">
      <PageHeader header="Gaurav's Resume" />
      {/* <DownloadCV /> */}
      {profExp}
      {education}
    </article>
  );
};

export default Resume;
