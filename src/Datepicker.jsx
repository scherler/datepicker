import React, { useState, useCallback, useRef } from "react";
import { Overlay } from "react-bootstrap";
import { DatepickerBody } from "./DatepickerBody";
import { DatepickerTrigger } from "./DatepickerTrigger";
import defaultProps from "./DefaultProperties";
import { generateSuggestedKey } from "./helper";

export const Datepicker = (props) => {
  const mergedProps = {
    ...defaultProps,
    ...props
  };

  const [currentDate, setCurrentDate] = useState(props.startDate || new Date());
  const [selection, setSelection] = useState([]);
  // will decide whether we show the popup or not
  const [showPicker, setShowPickerBase] = useState(false);
  const { isRange } = mergedProps;
  const ref = useRef(null);

  const setShowPicker = useCallback(
    (state) => {
      setShowPickerBase(state);
      if (state) {
        setTimeout(() => {
          const key = generateSuggestedKey(currentDate);
          const el = document.getElementById(key);
          el.setAttribute("aria-selected", "true");
          el.focus();
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
          setCurrentDate
        }}
      />
      <Overlay target={ref} show={showPicker} placement="bottom" container={ref.current}>
        {() => {
          return (
            <DatepickerBody
              {...{
                ...mergedProps,
                ...{
                  showPicker,
                  currentDate,
                  setCurrentDate,
                  selection,
                  setSelection,
                  setShowPicker
                }
              }}
            />
          );
        }}
      </Overlay>
    </div>
  );
};
export default Datepicker;
