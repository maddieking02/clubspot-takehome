import React from "react";
import Cell from "./Cell";
import {
  startOfMonth,
  endOfMonth,
  differenceInDays,
  addMonths,
  subMonths,
  addYears,
  subYears,
  format,
} from "date-fns";
import { updateCurrentDate } from "../auth";
import { useSelector, useDispatch } from "react-redux";
import {
  RiArrowLeftDoubleFill,
  RiArrowRightDoubleFill,
  RiArrowLeftSLine,
  RiArrowRightSLine,
} from "react-icons/ri";

const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

const Calendar = () => {
  const { currentDate } = useSelector((state) => state.calendar);
  const dispatch = useDispatch();

  /* current month start date, end date, total days calculation */
  const start = startOfMonth(currentDate);
  const end = endOfMonth(currentDate);
  const totalDays = differenceInDays(end, start) + 1;
  console.log('start', start, 'end', end, 'totalDays', totalDays)

  /* number of blank spaces to add before and after so day '1' starts on the correct day of the week */
  const spaceBefore = start.getDay();
  const spaceAfter = 6 - end.getDay();

  /* first date of prev and next month */
  const prevMonth = startOfMonth(subMonths(currentDate, 1));
  const nextMonth = endOfMonth(addMonths(currentDate, 1));
  // console.log('prevMonth', prevMonth, 'nextMonth', nextMonth)

  /* current date of prev and next year */
  const prevYear = subYears(currentDate, 1);
  const nextYear = addYears(currentDate, 1);
  // console.log('prevYear', prevYear, 'nextYear', nextYear)

  const handleLeftClick = (value) => {
    value === "prevYear" ? dispatch(updateCurrentDate(prevYear)) : dispatch(updateCurrentDate(prevMonth));
  }

  const handleRightClick = (value) =>  {
    value === "nextYear" ? dispatch(updateCurrentDate(nextYear)) : dispatch(updateCurrentDate(nextMonth));
  }

  return (
    <div className="grid">

      <Cell onClick={() => handleLeftClick("prevYear")}><RiArrowLeftDoubleFill/></Cell>
      <Cell onClick={() => handleLeftClick("prevMonth")}><RiArrowLeftSLine/></Cell>
      <Cell className="grid-row" />
      <Cell className="col-3">{format(currentDate, 'MMMM yyyy')}</Cell>
      <Cell className="grid-row" />
      <Cell onClick={() => handleRightClick("nextMonth")}><RiArrowRightSLine/></Cell>
      <Cell onClick={() => handleRightClick("nextYear")}><RiArrowRightDoubleFill/></Cell>

      {days.map((day, idx) => (
        <Cell key={idx}>{day}</Cell>
      ))}

      {[...Array(spaceBefore).keys()].map((_, idx) => (
        <Cell key={idx}>{""}</Cell>
      ))}

      {[...Array(totalDays).keys()].map((_, idx) => (
        <Cell key={idx}>{idx + 1}</Cell>
      ))}

      {[...Array(spaceAfter).keys()].map((_, idx) => (
        <Cell key={idx}>{""}</Cell>
      ))}

    </div>
  )
};

export default Calendar;