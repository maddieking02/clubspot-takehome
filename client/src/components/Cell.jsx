import React from 'react';

const Cell = ({ children, onClick }) => {
  return (
    <div onClick={onClick} style={{ height: "48px", display: "flex", alignItems: "center", justifyContent: "center" }}>
      {children}
    </div>
  )
};

export default Cell;