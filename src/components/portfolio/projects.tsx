import React, { useState, useEffect } from 'react';
import { projectsData } from '@/config/portfolio';
import { filterCategory } from '@/lib/utils/filter-utils';
import FilterList from './filter-list';
import FilterSelectBox from './filter-select-box';
import ProjectItem from './project-item';

const Projects: React.FC = () => {
  const [selectedValue, setSelectedValue] = useState('All');
  const [isSelectActive, setIsSelectActive] = useState(false);

  useEffect(() => {
    setSelectedValue('All');
  }, []);

  const filteredProjects = filterCategory(selectedValue, projectsData);

  return (
    <div className="projects">
      <FilterList
        selectedValue={selectedValue}
        setSelectedValue={setSelectedValue}
      />
      <FilterSelectBox
        selectedValue={selectedValue}
        isSelectActive={isSelectActive}
        setIsSelectActive={setIsSelectActive}
        setSelectedValue={setSelectedValue}
      />
      <ul className="project-list">
        {filteredProjects.map((project, index) => (
          <ProjectItem project={project} key={index} />
        ))}
      </ul>
    </div>
  );
};

export default Projects;
