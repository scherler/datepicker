import React, { useState } from 'react';
import { Form, InputGroup, Col } from 'react-bootstrap';
import cn from 'classnames';
import { BsCalendar as Calendar, BsX as Close } from 'react-icons/bs';

import { buttonize } from './helper';

export interface IDatepickerTrigger {
  setShowPicker: (state: boolean) => void;
  showPicker: boolean;
  isRange: boolean;
  setSelection: (range: number[]) => void;
  setCurrentDate: (date: Date) => void;
  selection: number[];
}

export const DatepickerTrigger = ({
  setShowPicker,
  showPicker,
  isRange,
  setSelection,
  setCurrentDate,
  selection,
}: IDatepickerTrigger) => {
  const [validated, setValidated] = useState<boolean>(false);
  const patternDate = '([0-1]{1}[0-9]{1}/[0-3]{1}[0-9]{1}/[0-9]{2})';
  const pattern = isRange ? `${patternDate}-${patternDate}` : patternDate;
  const placeHolderPattern = 'mm/dd/yy';
  const placeHolder = isRange ? `${placeHolderPattern}-${placeHolderPattern}` : placeHolderPattern;
  const handleSubmit = (event: any) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    } else {
      let dates;
      if (isRange) {
        const patternRange = /([0-1]{1}[0-9]{1}\/[0-3]{1}[0-9]{1}\/[0-9]{2})-([0-1]{1}[0-9]{1}\/[0-3]{1}[0-9]{1}\/[0-9]{2})/g;
        const parseDates = [...form.value.matchAll(patternRange)];
        dates = [new Date(parseDates[0][1]).getTime(), new Date(parseDates[0][2]).getTime()];
      } else {
        const date = new Date(form.value);
        dates = [date.getTime()];
      }
      setCurrentDate(new Date(dates[0]));
      setSelection(dates);
    }
    setValidated(true);
  };
  const icon = showPicker ? <Close /> : <Calendar />;
  const togglePicker = () => setShowPicker(!showPicker);
  const defaultValue = selection
    .map((select) => {
      const selDate = new Date(select);
      return selDate;
    })
    .map((date) => {
      return date.toLocaleString('en-US', {
        day: '2-digit',
        month: '2-digit',
        year: '2-digit',
      });
    })
    .join('-');
  return (
    <Form noValidate validated={validated} onSubmit={handleSubmit}>
      <Form.Group className="datepicker-trigger" as={Col} controlId="validationCustomUsername">
        <InputGroup
          className={cn('input-group-unstyled', {
            'input-group-active': showPicker,
          })}>
          <Form.Control
            key={defaultValue}
            defaultValue={defaultValue}
            onBlur={handleSubmit}
            pattern={pattern}
            type="text"
            placeholder={placeHolder}
            aria-describedby="inputGroupPrepend"
            required
          />
          <InputGroup.Prepend>
            <InputGroup.Text
              className="h-100"
              aria-label={`Choose Date, selected date is ${defaultValue}`}
              {...buttonize(() => togglePicker())}
              id="inputGroupPrepend">
              {icon}
            </InputGroup.Text>
          </InputGroup.Prepend>

          <Form.Control.Feedback type="invalid">Invalid date</Form.Control.Feedback>
        </InputGroup>
      </Form.Group>
    </Form>
  );
};
