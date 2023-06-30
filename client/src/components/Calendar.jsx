import React from "react";
import Cell from "./Cell";
import { startOfMonth, endOfMonth, differenceInDays } from "date-fns";
import { updateCurrentDate } from '../auth';
import { useSelector, useDispatch } from 'react-redux';

const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

const Calendar = () => {
  const { currentDate } = useSelector((state) => state.calendar);

  const start = startOfMonth(currentDate);
  const end = endOfMonth(currentDate);
  const totalDays = differenceInDays(end, start) + 1;
  console.log('totalDays', totalDays)

  return (
    <div className="grid">
      <Cell>{"<<"}</Cell>
      <Cell>{"<"}</Cell>
      <Cell className="grid-row" />
      <Cell className="col-3">June 2023</Cell>
      <Cell className="grid-row" />
      <Cell>{">"}</Cell>
      <Cell>{">>"}</Cell>

      {days.map((day, idx) => (
        <Cell key={idx}>{day}</Cell>
      ))}

      {[...Array(totalDays).keys()].map((_, idx) => (
        <Cell key={idx}>{idx + 1}</Cell>
      ))}

    </div>
  )
};

export default Calendar;