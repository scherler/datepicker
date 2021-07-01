import React from "react";
import Datepicker from "../Datepicker";
import propsDefault from "../DefaultProperties";
import "../datepicker.css"
import 'bootstrap/dist/css/bootstrap.min.css';

export const Default = ({ isRange, autoclose, addBuffer }) => {
  const props = {
    ...propsDefault,
    ...{ isRange, autoclose, addBuffer }
  };
  return (
    <div>
      <Datepicker {...{ ...props }} />
    </div>
  );
};
Default.args = {
  autoclose: 1000
};
Default.parameters = {
  controls: {
    // By default controls is disabled for all stories - we only enable for certain stories
    disabled: false
  }
};
Default.argTypes = {
  addBuffer: {
    control: {
      type: "boolean"
    },
    description: "Do you want to see the prev/next month?",
    type: {
      name: "boolean",
      required: false
    },
    table: {
      defaultValue: {
        summary: false
      }
    }
  },
  autoclose: {
    control: {
      type: "number",
      default: 1000
    },
    description: "Set the time after the picker closes automatically. 0 will turn it off",
    type: {
      name: "number",
      required: false
    },
    table: {
      defaultValue: {
        summary: 1000
      }
    }
  },
  isRange: {
    control: {
      type: "boolean"
    },
    description: "Do you want date ranges?",
    type: {
      name: "boolean",
      required: false
    },
    table: {
      defaultValue: {
        summary: false
      }
    }
  }
};
