import React from 'react';
import { MdExpandMore } from 'react-icons/md';

interface InfoMoreButtonProps {
  onClick: () => void;
}

const InfoMoreButton: React.FC<InfoMoreButtonProps> = ({ onClick }) => (
  <button
    className="info-more-btn"
    onClick={onClick}
    data-sidebar-btn
  >
    <span>Show Contacts</span>
    <MdExpandMore />
  </button>
);

export default InfoMoreButton;
