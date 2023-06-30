import React, { useEffect, useState } from 'react';
import { updateIsSelected } from "../auth";
import { useSelector, useDispatch } from "react-redux";

const Cell = ({ children, disableHover, onClick, hidden, isToday }) => {
  const [test, setTest] = useState(false);


  const { isSelected } = useSelector((state) => state.calendar);
  const dispatch = useDispatch();

  const handleSelection = () => {
    // const dataValue = e.currentTarget.getAttribute('data-value');
    // console.log(dataValue);


    // dispatch(updateIsSelected(!isSelected))
    // console.log('state of isSelected', isSelected)
    setTest(!test);
  }

  return (

    <div
      className={`
        grid-cell
        flex-align-content
        ${hidden ? "hidden" : ""}
        ${isToday ? "today" : ""}
        ${disableHover ? "disableHover" : ""}
        ${test ? "isSelected" : ""}
      `}
      onClick={onClick ? onClick : handleSelection}
      data-value={children}
    >
      {children}
    </div>
  )
};

export default Cell;