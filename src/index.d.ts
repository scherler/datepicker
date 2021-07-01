import { Component } from 'react';
declare module '@scherler/bootstrap-datepicker' {
  export interface IDatepicker {
    width?: number;
    height?: number;
    daySpacing?: number;
    offset?: number;
    startDate?: Date;
    isRange?: boolean;
    autoclose?: number;
  }

  export interface IDatepickerBody {
    width?: number;
    height?: number;
    daySpacing?: number;
    offset?: number;
    currentDate?: Date;
    autoclose?: number;
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
    fixedSize?: number;
  }

  export interface IDatepickerNavigation {
    width?: number;
    setCurrentDate: (date: Date) => void;
    currentDate?: Date;
  }

  export interface IDatepickerTrigger {
    setShowPicker: (state: boolean) => void;
    showPicker: boolean;
    isRange: boolean;
    setSelection: (range: number[]) => void;
    setCurrentDate: (date: Date) => void;
    selection: number[];
  }

  export interface BaseProps {
    daySpacing: number;
    offset: number;
  }

  export interface TotalDays {
    startDate: Date;
  }

  export interface Formater {
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
    onClick?: (event: any) => void;
  }

  export interface CellSize extends BaseProps {
    width: number;
    height: number;
    totalDays: number;
  }

  export interface CellPositions extends BaseProps, TotalDays {
    cellWidth: number;
    cellHeight: number;
    days: Date[];
  }
  export interface ComputeWeekdays {
    cellWidth: number;
    cellHeight: number;
    daySpacing: number;
    ticks?: number[];
    arrayOfWeekdays?: string[];
  }
}
export class Datepicker extends Component<IDatepicker> {}
export class DatepickerBody extends Component<IDatepickerBody> {}
export class DatepickerCalendar extends Component<IDatepickerCalendar> {}
export class DatepickerNavigation extends Component<IDatepickerNavigation> {}
export class DatepickerTrigger extends Component<IDatepickerTrigger> {}
