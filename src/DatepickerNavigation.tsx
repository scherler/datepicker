import React from 'react';
import { BsChevronCompactLeft as Left, BsChevronCompactRight as Right } from 'react-icons/bs';

import { buttonize } from './helper';

export interface IDatepickerNavigation {
  width: number;
  setCurrentDate: (date: Date) => void;
  currentDate: Date;
}

export const DatepickerNavigation = ({ width = 220, currentDate, setCurrentDate }: IDatepickerNavigation) => (
  <svg className="datepicker-navigation" width={width} height="25">
    <g>
      <rect
        aria-label="previous month"
        className="text-white"
        cursor="pointer"
        x={0}
        width={25}
        height={25}
        {...buttonize(() => {
          setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1));
        })}
      />
      <Left
        aria-label="previous month"
        x={2}
        width={24}
        cursor="pointer"
        {...buttonize(() => {
          setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1));
        })}
        xlinkHref="bootstrap-icons.svg#chevron-left"
        className="text-primary"
      />
    </g>
    <g>
      <text aria-live="polite" className="h6" x="50%" y="50%" dominantBaseline="middle" textAnchor="middle">
        {currentDate.toLocaleString('default', { month: 'long', year: 'numeric' })}
      </text>
    </g>
    <g>
      <rect
        aria-label="next month"
        className="text-white"
        cursor="pointer"
        x={width - 20}
        width={25}
        height={25}
        {...buttonize(() => {
          setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1));
        })}
      />
      <Right
        aria-label="next month"
        width={24}
        x={width - 20}
        cursor="pointer"
        {...buttonize(() => {
          setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1));
        })}
        className="text-primary"
      />
    </g>
  </svg>
);
