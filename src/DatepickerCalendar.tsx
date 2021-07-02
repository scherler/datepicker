import React from 'react';
import { Day } from './Day';
import { computeTotalDays, computeCellSize, computeCellPositions, computeWeekdays } from './compute/datePicker';
import { generateSuggestedKey, navigate } from './helper';

export interface IDatepickerCalendar {
  width: number;
  height: number;
  daySpacing: number;
  offset: number;
  startDate: Date;
  autoclose: number;
  currentDate: Date;
  setShowPicker: (state: boolean) => void;
  setCurrentDate: (date: Date) => void;
  isRange: boolean;
  setSelection: (range: number[]) => void;
  selection: number[];
  dayRadius: number;
  dayBorderWidth: number;
  dayBorderColor: string;
  todayBorderWidth: number;
  todayBorderRadius: number;
  todayBorderColor: string;
  fixedSize: number;
  addBuffer: boolean;
  squares: boolean;
}

export const DatepickerCalendar = ({
  currentDate,
  dayRadius,
  dayBorderWidth,
  dayBorderColor,
  todayBorderWidth,
  todayBorderRadius,
  todayBorderColor,
  width,
  height,
  daySpacing,
  offset,
  startDate,
  selection,
  setSelection,
  setShowPicker,
  isRange,
  autoclose,
  fixedSize,
  setCurrentDate,
  addBuffer,
  squares,
}: IDatepickerCalendar) => {
  const { totalDays, days: daysInMonth, firstOfMonth, daysNextMonth, daysPrevMonth } = computeTotalDays({ startDate });
  const today = new Date().setHours(0, 0, 0, 0);

  const addDate = (date: Date) => {
    let dates: number[];
    if (isRange && selection.length === 1) {
      dates = [...selection, date.getTime()].sort((left, right) => left - right);
    } else {
      dates = [date.getTime()];
    }
    setSelection(dates);
    if (autoclose && !isRange) {
      setTimeout(() => setShowPicker(false), autoclose);
    } else if (autoclose && isRange && dates.length > 1) {
      setTimeout(() => setShowPicker(false), autoclose);
    }
  };

  // dynamic calculations but we want fixed
  const { cellHeight, cellWidth } = !fixedSize
    ? computeCellSize({
        squares,
        totalDays,
        offset,
        daySpacing,
        width,
        height,
      })
    : {
        cellHeight: fixedSize,
        cellWidth: fixedSize,
      };

  const dayArray = addBuffer ? [...daysPrevMonth, ...daysInMonth, ...daysNextMonth] : daysInMonth;
  const days = computeCellPositions({
    startDate: addBuffer ? daysPrevMonth[0] || firstOfMonth : firstOfMonth,
    days: dayArray,
    offset: offset + 30, // to make room for the weekDay legend
    cellHeight,
    cellWidth,
    daySpacing,
  });

  const weekdayLegends = computeWeekdays({
    cellHeight,
    cellWidth,
    daySpacing,
  });
  const navigation = (daysCount: number) => {
    const date = new Date(startDate);
    switch (daysCount) {
      case -0.1:
        date.setDate(date.getDate() - date.getDay());
        setCurrentDate(date);
        break;
      case 0.1:
        date.setDate(date.getDate() + date.getDay());
        setCurrentDate(date);
        break;
      case 30:
        date.setMonth(date.getMonth() + 1);
        setCurrentDate(date);
        break;
      case -30:
        date.setMonth(date.getMonth() - 1);
        setCurrentDate(date);
        break;
      case 360:
        date.setFullYear(date.getFullYear() + 1);
        setCurrentDate(date);
        break;
      case -360:
        date.setFullYear(date.getFullYear() - 1);
        setCurrentDate(date);
        break;
      default:
        date.setDate(date.getDate() + daysCount);
        setCurrentDate(date);
        break;
    }
    setTimeout(() => {
      const key = generateSuggestedKey(date);
      const el = document.getElementById(key) as HTMLElement;
      if (el) {
        el.setAttribute('aria-selected', 'true');
        el.focus();
      }
    }, 1);
  };

  return (
    <div className="d-flex justify-content-around">
      <svg
        role="grid"
        aria-labelledby="id-dialog-label"
        {...navigate({
          navigation,
          exec: () => addDate(currentDate),
          close: () => setShowPicker(false),
        })}
        width={width}
        height={height}>
        {weekdayLegends.map((legend) => (
          <text className="text-gray-light small" height={50} key={legend.key} x={legend.x + 13} y={legend.y + 25}>
            {legend.value}
          </text>
        ))}
        {days.map((innerDay) => {
          const iDay = { ...innerDay };
          if (firstOfMonth.getMonth() !== iDay.date.getMonth()) {
            iDay.classes = {
              rect: 'text-white',
              text: 'text-secondary small',
            };
          }
          const timestamp = iDay.date.getTime();
          // today needs a border
          iDay.borderWidth = today === timestamp ? todayBorderWidth : dayBorderWidth;
          iDay.borderColor = today === timestamp ? todayBorderColor : dayBorderColor;
          if (selection.includes(timestamp)) {
            iDay.classes = {
              rect: 'text-primary',
              text: 'text-white small',
            };
          } else if (timestamp > selection[0] && timestamp < selection[1]) {
            iDay.classes = {
              rect: 'text-info',
              text: 'text-white small',
            };
          }
          iDay.coordinates.rx = today === timestamp ? todayBorderRadius : dayRadius;
          iDay.coordinates.ry = today === timestamp ? todayBorderRadius : dayRadius;
          iDay.onClick = () => {
            console.debug('You clicked ', iDay);
            addDate(iDay.date);
          };
          return <Day key={iDay.suggestedKey} {...{ ...iDay }} />;
        })}
      </svg>
    </div>
  );
};
