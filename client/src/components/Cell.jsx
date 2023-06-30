import React from 'react';

const Cell = ({ children, onClick }) => {
  return (
    <div className="cell flex-align-content" onClick={onClick}>
      {children}
    </div>
  )
};

export default Cell;