import React from 'react';
import { LuEye } from "react-icons/lu";
import Image from 'next/image';
import { Project } from '@/config/portfolio';

interface ProjectItemProps {
  project: Project;
}

const ProjectItem: React.FC<ProjectItemProps> = ({ project }) => (
  <li
    className="project-item active"
    data-filter-item
    data-category={project.category.toLowerCase()}
  >
    <a
      href={project.link}
      target="_blank"
      rel="noopener noreferrer"
    >
      <figure className="project-img">
        <div className="project-item-icon-box">
          <LuEye />
        </div>
        <Image
          src={project.imageUrl}
          alt={project.title}
          loading="lazy"
          width={1600}
          height={1200}
        />
      </figure>
      <h3 className="project-title">{project.title}</h3>
      <p className="project-category">{project.category}</p>
    </a>
  </li>
);

export default ProjectItem;
