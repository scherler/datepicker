import React, { useState, useCallback, useRef } from 'react';
import { Overlay } from 'react-bootstrap';
import { DatepickerBody } from './DatepickerBody';
import { DatepickerTrigger } from './DatepickerTrigger';
import defaultProps from './DefaultProperties';
import { generateSuggestedKey } from './helper';

export interface IDatepicker {
  width?: number;
  height?: number;
  daySpacing?: number;
  offset?: number;
  startDate?: Date;
  isRange?: boolean;
  autoclose?: number;
}

export const Datepicker = (props: IDatepicker) => {
  const mergedProps = {
    ...defaultProps,
    ...props,
  };

  const [currentDate, setCurrentDate] = useState<Date>(props.startDate || new Date());
  const [selection, setSelection] = useState<number[]>([]);
  // will decide whether we show the popup or not
  const [showPicker, setShowPickerBase] = useState<boolean>(false);
  const { isRange } = mergedProps;
  const ref = useRef(null);

  const setShowPicker = useCallback(
    (state: boolean) => {
      setShowPickerBase(state);
      if (state) {
        setTimeout(() => {
          const key = generateSuggestedKey(currentDate);
          const el = document.getElementById(key);
          if (el) {
            el.setAttribute('aria-selected', 'true');
            el.focus();
          }
        }, 1);
      }
    },
    [showPicker, currentDate]
  );

  return (
    <div ref={ref} className="datepicker">
      <DatepickerTrigger
        {...{
          selection,
          showPicker,
          setShowPicker,
          isRange,
          setSelection,
          setCurrentDate,
        }}
      />
      <Overlay target={ref} show={showPicker} placement="bottom" container={ref.current}>
        <DatepickerBody
          {...{
            ...mergedProps,
            ...{
              showPicker,
              currentDate,
              setCurrentDate,
              selection,
              setSelection,
              setShowPicker,
            },
          }}
        />
      </Overlay>
    </div>
  );
};
export default Datepicker;
