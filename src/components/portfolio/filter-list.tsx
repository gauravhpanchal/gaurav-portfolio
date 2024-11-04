import React from 'react';
import { projectTags } from '@/config/portfolio';
import { handleItemClick } from '@/lib/utils/filter-utils';

interface FilterListProps {
  selectedValue: string;
  setSelectedValue: React.Dispatch<React.SetStateAction<string>>;
}

const FilterList: React.FC<FilterListProps> = ({ selectedValue, setSelectedValue }) => (
  <ul className="filter-list">
    {projectTags.map((tag) => (
      <li className="filter-item" key={tag}>
        <button
          className={`filter-btn ${selectedValue === tag ? 'active' : ''}`}
          onClick={() => handleItemClick(tag, setSelectedValue)}
        >
          {tag}
        </button>
      </li>
    ))}
  </ul>
);

export default FilterList;
