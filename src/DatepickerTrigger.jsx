import React, { useState } from "react";
import { Form, InputGroup, Col } from "react-bootstrap";
import { BsCalendar as Calendar } from "react-icons/bs";
import { BsX as Close } from "react-icons/bs";
import cn from "classnames";
import { buttonize } from "./helper";

export const DatepickerTrigger = ({
    setShowPicker,
    showPicker,
    isRange,
    setSelection,
    setCurrentDate,
    selection
}) => {
    const [validated, setValidated] = useState(false);
    const patternDate = "([0-1]{1}[0-9]{1}/[0-3]{1}[0-9]{1}/[0-9]{2})";
    const pattern = isRange ? `${patternDate}-${patternDate}` : patternDate;
    const placeHolderPattern = "mm/dd/yy";
    const placeHolder = isRange ? `${placeHolderPattern}-${placeHolderPattern}` : placeHolderPattern;
    const handleSubmit = (event) => {
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
            return date.toLocaleString("en-US", {
                day: "2-digit",
                month: "2-digit",
                year: "2-digit"
            });
        })
        .join("-");
    return (
        <Form noValidate={true} validated={validated} onSubmit={handleSubmit}>
            <Form.Group className="datepicker-trigger" as={Col} controlId="validationCustomUsername">
                <InputGroup
                    className={cn("input-group-unstyled", {
                        "input-group-active": showPicker
                    })}
                >
                    <Form.Control
                        key={defaultValue}
                        defaultValue={defaultValue}
                        onBlur={handleSubmit}
                        pattern={pattern}
                        type="text"
                        placeholder={placeHolder}
                        aria-describedby="inputGroupPrepend"
                        required={true}
                    />
                    <InputGroup.Prepend>
                        <InputGroup.Text
                            className="h-100"
                            tabIndex={0}
                            aria-label={`Choose Date, selected date is ${defaultValue}`}
                            {...buttonize(() => togglePicker())}
                            id="inputGroupPrepend"
                        >
                            {icon}
                        </InputGroup.Text>
                    </InputGroup.Prepend>

                    <Form.Control.Feedback type="invalid">Invalid date</Form.Control.Feedback>
                </InputGroup>
            </Form.Group>
        </Form>
    );
};
