import React from 'react';
import { DatepickerCalendar } from './DatepickerCalendar';
import { DatepickerNavigation } from './DatepickerNavigation';

export interface IDatepickerBody {
  width: number;
  height: number;
  daySpacing: number;
  offset: number;
  currentDate: Date;
  autoclose: number;
  setShowPicker: (state: boolean) => void;
  showPicker: boolean;
  isRange: boolean;
  setSelection: (range: number[]) => void;
  setCurrentDate: (date: Date) => void;
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
export const DatepickerBody = ({
  width,
  height,
  daySpacing,
  offset,
  currentDate,
  setCurrentDate,
  selection,
  setSelection,
  setShowPicker,
  isRange,
  autoclose,
  dayRadius,
  dayBorderWidth,
  dayBorderColor,
  todayBorderWidth,
  todayBorderRadius,
  todayBorderColor,
  fixedSize,
  addBuffer,
  squares,
}: IDatepickerBody) => (
  <div className="d-flex justify-content-between datepicker-body">
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="id-dialog-label"
      aria-live="polite"
      className="shadow border rounded p-3">
      <DatepickerNavigation {...{ width, currentDate, setCurrentDate }} />
      <DatepickerCalendar
        {...{
          currentDate,
          setCurrentDate,
          fixedSize,
          dayRadius,
          dayBorderWidth,
          dayBorderColor,
          todayBorderWidth,
          todayBorderRadius,
          todayBorderColor,
          width,
          height,
          selection,
          setSelection,
          setShowPicker,
          daySpacing,
          offset,
          startDate: currentDate,
          isRange,
          autoclose,
          addBuffer,
          squares,
        }}
      />
    </div>
  </div>
);
