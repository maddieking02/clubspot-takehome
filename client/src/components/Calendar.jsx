import React from "react";
import Cell from "./Cell";
import { startOfMonth, endOfMonth } from "date-fns";
import { updateCurrentDate } from '../auth';
import { useSelector, useDispatch } from 'react-redux';

const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

const Calendar = () => {
  const { currentDate } = useSelector((state) => state.calendar);

  return (
    <div className="grid">
      <Cell>{"<<"}</Cell>
      <Cell>{"<"}</Cell>
      <Cell className="grid-row" />
      <Cell className="col-3">June 2023</Cell>
      <Cell className="grid-row" />
      <Cell>{">"}</Cell>
      <Cell>{">>"}</Cell>
    </div>
  )
};

export default Calendar;