import React from "react";
import { DatepickerCalendar } from "./DatepickerCalendar";
import { DatepickerNavigation } from "./DatepickerNavigation";

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
    squares
}) => (
    <div className="d-flex justify-content-between">
        <div
            role="dialog"
            aria-modal="true"
            aria-labelledby="id-dialog-label"
            aria-live="polite"
            className="shadow border rounded p-3"
        >
            <DatepickerNavigation {...{ width, currentDate, setCurrentDate }} />
            <DatepickerCalendar
                {...{
                    squares,
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
                    addBuffer
                }}
            />
        </div>
    </div>
);
