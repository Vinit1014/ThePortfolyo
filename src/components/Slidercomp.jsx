import React from "react";
import { Slider } from "@nextui-org/react";
const Slidercomp = (props) => {
  return (
    <Slider
      label={props.value}
      size="sm"
      hideThumb={true}
      //   step={0.01}
      maxValue={100}
      minValue={0}
      defaultValue={props.number}
      className="max-w-md"
    />
  );
};

export default Slidercomp;
