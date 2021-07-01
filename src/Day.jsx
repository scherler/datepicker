import React from "react";

export const Day = (props) => {
  const {
    formater = () => `${props.day}`,
    classes = {
      rect: "text-white",
      text: "text-gray-primary small"
    },
    coordinates: { x = 0, y = 0, ry = 0, rx = 0 },
    width = 30,
    height = 30,
    borderWidth = 1,
    borderColor,
    onClick,
    suggestedKey
  } = props;

  const handleClick = (event) => onClick?.(event);

  return (
    <g id={suggestedKey} cursor="pointer" className="datepicker-day" tabIndex={0}>
      <rect
        className={classes.rect}
        onClick={handleClick}
        x={x}
        y={y}
        rx={rx}
        ry={ry}
        width={width}
        height={height}
        style={{
          strokeWidth: borderWidth,
          stroke: borderColor
        }}
      />
      <text
        style={{
          textAnchor: "middle"
        }}
        className={classes.text}
        onClick={handleClick}
        x={x + width / 2} // move to the horizontal middle
        y={y + (height - height / 3)} // move to the vertical middle
      >
        {formater(props)}
      </text>
    </g>
  );
};
