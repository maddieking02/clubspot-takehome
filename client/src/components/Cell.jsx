import React, { useState } from 'react';
import { useSelector, useDispatch } from "react-redux";

const Cell = ({ children, disableHover, onClick, hidden, isToday }) => {
  const [isSelected, setIsSelected] = useState(false);

  const handleSelection = () => {
    setIsSelected(!isSelected);
  }

  return (

    <div
      className={`
        grid-cell
        flex-align-content
        ${hidden ? "hidden" : ""}
        ${isToday ? "today" : ""}
        ${disableHover ? "disableHover" : ""}
        ${isSelected ? "isSelected" : ""}
      `}
      onClick={onClick ? onClick : handleSelection}
    >
      {children}
    </div>
  )
};

export default Cell;