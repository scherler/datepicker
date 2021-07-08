import { timeMonth, timeWeek } from 'd3-time';
import { generateSuggestedKey } from '../helper';

interface BaseProps {
  daySpacing: number;
  offset: number;
}

interface TotalDays {
  startDate: Date;
}

interface Formater {
  formater?: (data: DayData) => string;
}

export interface DayData extends Formater {
  coordinates: {
    x: number;
    y: number;
    rx?: number;
    ry?: number;
  };
  classes?: {
    rect?: string;
    text?: string;
  };
  suggestedKey: string;
  date: Date;
  color: string;
  firstWeek: number;
  day: number;
  month: number;
  year: number;
  width: number;
  height: number;
  borderWidth: number;
  borderColor?: string;
  onClick?: (event: any) => void | undefined;
}

interface CellSize extends BaseProps {
  width: number;
  height: number;
  totalDays: number;
  squares: boolean;
}

interface CellPositions extends BaseProps, TotalDays {
  cellWidth: number;
  cellHeight: number;
  days: Date[];
}
interface ComputeWeekdays {
  cellWidth: number;
  cellHeight: number;
  daySpacing: number;
  ticks?: number[];
  arrayOfWeekdays?: string[];
}

/**
 * Compute day cell size according to
 * current context.
 */
export const computeCellSize = ({ daySpacing, offset, totalDays, width, height, squares }: CellSize) => {
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

export const computeMonthArray = ({ daysInMonth, startDate }: { daysInMonth: number; startDate: Date }) => {
  const days: Date[] = [];
  let index = 1;
  while (index <= daysInMonth) {
    days.push(new Date(startDate.getFullYear(), startDate.getMonth(), index));
    index++;
  }
  return days;
};

export const computeTotalDays = ({ startDate }: TotalDays) => {
  const firstOfMonth = timeMonth(startDate);

  const lastOfMonth = new Date(startDate.getFullYear(), startDate.getMonth() + 1, 0);
  const totalDays = lastOfMonth.getDate();
  const days = computeMonthArray({ daysInMonth: totalDays, startDate: firstOfMonth });
  // buffer days before and after
  const prevMonth = new Date(firstOfMonth);
  prevMonth.setDate(1 - firstOfMonth.getDay());
  const daysPrevMonth = Array.from(
    Array(firstOfMonth.getDay()),
    (_day, index) => new Date(prevMonth.getFullYear(), prevMonth.getMonth(), prevMonth.getDate() + index)
  );
  const nextMonth = new Date(startDate.getFullYear(), startDate.getMonth() + 1, 1);
  nextMonth.setDate(6 - lastOfMonth.getDay());
  const daysNextMonth = Array.from(
    Array(6 - lastOfMonth.getDay()),
    (_day, index) => new Date(nextMonth.getFullYear(), nextMonth.getMonth(), nextMonth.getDate() - index)
  );
  daysNextMonth.sort((left, right) => left.getTime() - right.getTime());
  return {
    startDate,
    firstOfMonth,
    totalDays,
    days,
    daysPrevMonth,
    daysNextMonth,
  };
};

export const computeGrid = ({ startDate, date }: { startDate: Date; date: Date }) => {
  const firstWeek = timeWeek.count(startDate, date);
  const day = date.getDate();
  const month = date.getMonth();
  const year = date.getFullYear();
  const currentColumn = date.getDay();
  const currentRow = firstWeek;
  const suggestedKey = generateSuggestedKey(date);
  return { currentColumn, year, currentRow, firstWeek, month, date, day, suggestedKey };
};

export const computeCellPositions = ({
  days,
  cellWidth,
  cellHeight,
  daySpacing,
  offset,
  startDate,
}: CellPositions): DayData[] => {
  const x = daySpacing;
  const y = daySpacing + offset;

  const dataWithCellPosition: DayData[] = days.map((dateValue) => {
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
    } as DayData;
  });
  return dataWithCellPosition;
};

export const computeWeekdays = ({
  cellHeight,
  cellWidth,
  daySpacing,
  ticks = Array(7),
  arrayOfWeekdays = ['S', 'M', 'T', 'W', 'T', 'F', 'S'],
}: ComputeWeekdays) => {
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
