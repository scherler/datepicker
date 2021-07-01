import { timeMonth, timeWeek } from 'd3-time';
import { generateSuggestedKey } from '../helper';

/**
 * Compute day cell size according to
 * current context.
 */
export const computeCellSize = ({ daySpacing, offset, totalDays, width, height, squares }) => {
  const daysInRange = 7;
  const columns = daysInRange;
  const rows = Math.ceil(totalDays / daysInRange);
  const widthRest = width - offset;
  const heightRest = height - offset;
  // + 1 since we have to apply spacing to the rigth and left
  const cellHeight = (heightRest - daySpacing * (rows + 1)) / rows;
  const cellWidth = (widthRest - daySpacing * (columns + 1)) / columns;
  // we want squares
  return {
    columns,
    rows,
    cellHeight: squares ? Math.min(cellHeight, cellWidth) : cellHeight,
    cellWidth: squares ? Math.min(cellHeight, cellWidth) : cellWidth,
  };
};

export const computeMonthArray = ({ daysInMonth, startDate }) => {
  const days = [];
  let index = 1;
  while (index <= daysInMonth) {
    days.push(new Date(startDate.getFullYear(), startDate.getMonth(), index));
    index++;
  }
  return days;
};

export const computeTotalDays = ({ startDate }) => {
  const firstOfMonth = timeMonth(startDate);

  const lastOfMonth = new Date(startDate.getFullYear(), startDate.getMonth() + 1, 0);
  const totalDays = lastOfMonth.getDate();
  const days = computeMonthArray({ daysInMonth: totalDays, startDate: firstOfMonth });
  // buffer days before and after
  const prevMonth = new Date(firstOfMonth);
  prevMonth.setDate(1 - firstOfMonth.getDay());
  const daysPrevMonth = [...Array(firstOfMonth.getDay()).keys()].map(
    (day) => new Date(prevMonth.getFullYear(), prevMonth.getMonth(), prevMonth.getDate() + day)
  );
  const nextMonth = new Date(startDate.getFullYear(), startDate.getMonth() + 1, 1);
  nextMonth.setDate(6 - lastOfMonth.getDay());
  const daysNextMonth = [...Array(6 - lastOfMonth.getDay()).keys()]
    .map((day) => new Date(nextMonth.getFullYear(), nextMonth.getMonth(), nextMonth.getDate() - day))
    .sort((left, right) => left.getTime() - right.getTime());
  return {
    startDate,
    firstOfMonth,
    totalDays,
    days,
    daysPrevMonth,
    daysNextMonth,
  };
};

export const computeCellPositions = ({ days, cellWidth, cellHeight, daySpacing, offset, startDate }) => {
  const x = daySpacing;
  const y = daySpacing + offset;

  const dataWithCellPosition = days.map((dateValue) => {
    const { currentColumn, currentRow, firstWeek, year, month, date, day, suggestedKey } = computeGrid({
      startDate,
      date: dateValue,
    });

    const coordinates = {
      x: x + daySpacing * currentColumn + cellWidth * currentColumn,
      y: y + daySpacing * currentRow + cellHeight * currentRow,
    };
    return {
      coordinates,
      firstWeek,
      day,
      month,
      year,
      date,
      width: cellWidth,
      height: cellHeight,
      suggestedKey,
    };
  });
  return dataWithCellPosition;
};

export const computeGrid = ({ startDate, date }) => {
  const firstWeek = timeWeek.count(startDate, date);
  const day = date.getDate();
  const month = date.getMonth();
  const year = date.getFullYear();
  const currentColumn = date.getDay();
  const currentRow = firstWeek;
  const suggestedKey = generateSuggestedKey(date);
  return { currentColumn, year, currentRow, firstWeek, month, date, day, suggestedKey };
};

export const computeWeekdays = ({
  cellHeight,
  cellWidth,
  daySpacing,
  ticks = [...Array(7).keys()],
  arrayOfWeekdays = ['S', 'M', 'T', 'W', 'T', 'F', 'S'],
}) => {
  const sizes = {
    width: cellWidth + daySpacing,
    height: cellHeight + daySpacing,
  };
  return ticks.map((day) => ({
    key: sizes.width * day,
    value: arrayOfWeekdays[day],
    y: 0,
    x: sizes.width * day,
  }));
};
