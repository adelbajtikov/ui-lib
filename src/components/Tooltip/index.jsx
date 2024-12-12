import React from 'react';
import './styles.css';

function Tooltip({ text, position, children }) {
  return (
    <div className="tooltip-wrapper">
      {children}
      <div className={`tooltip-box tooltip-${position}`}>{text}</div>
    </div>
  );
}

export default Tooltip;
