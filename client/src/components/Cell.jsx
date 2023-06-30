import React from 'react';

const Cell = ({ children }) => {
  return (
    <div style={{ height: "48px", display: "flex", alignItems: "center", justifyContent: "center" }}>
      {children}
    </div>
  )
};

export default Cell;