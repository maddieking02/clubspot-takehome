import React from 'react';

const Cell = ({ children, disableHover, onClick, hidden, isToday }) => {
  return (
    <div className={`grid-cell flex-align-content ${hidden ? "hidden" : ""} ${isToday ? "today" : ""} ${disableHover ? "disableHover" : ""}`} onClick={onClick}>
      {children}
    </div>
  )
};

export default Cell;