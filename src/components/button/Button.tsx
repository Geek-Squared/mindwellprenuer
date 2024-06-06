import React from 'react';
import "./styles.scss"

interface HeaderButtonProps {
  text: string;
  onClick: () => void;
}

const HeaderButton: React.FC<HeaderButtonProps> = ({ text, onClick }) => {
  return (
    <button className="button-header">{text}</button>
  );
};

export default HeaderButton;
