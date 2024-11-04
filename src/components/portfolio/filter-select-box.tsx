import React from 'react';
import { MdExpandMore } from "react-icons/md";
import { projectTags } from '@/config/portfolio';
import { handleItemClick } from '@/lib/utils/filter-utils';

interface FilterSelectBoxProps {
  selectedValue: string;
  isSelectActive: boolean;
  setIsSelectActive: React.Dispatch<React.SetStateAction<boolean>>;
  setSelectedValue: React.Dispatch<React.SetStateAction<string>>;
}

const FilterSelectBox: React.FC<FilterSelectBoxProps> = ({
  selectedValue,
  isSelectActive,
  setIsSelectActive,
  setSelectedValue,
}) => (
  <div className="filter-select-box">
    <button
      className={`filter-select ${isSelectActive ? 'active' : ''}`}
      onClick={() => setIsSelectActive(!isSelectActive)}
    >
      <div className="select-value">
        {selectedValue || 'Select category'}
      </div>
      <div className="select-icon">
        <MdExpandMore />
      </div>
    </button>
    {isSelectActive && (
      <ul className="select-list">
        {projectTags.map((tag: string) => (
          <li className="select-item" key={tag}>
            <button
              onClick={() => {
                handleItemClick(tag, setSelectedValue);
                setIsSelectActive(false);
              }}
            >
              {tag}
            </button>
          </li>
        ))}
      </ul>
    )}
  </div>
);

export default FilterSelectBox;
