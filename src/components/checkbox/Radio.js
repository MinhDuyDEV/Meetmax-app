import { lowerCase } from "lodash";
import React from "react";
import { useController } from "react-hook-form";
import { IconDeSelectRadio, IconSelectRadio } from "../icons";

const Radio = ({ checked, control, children, name }) => {
  const { field } = useController({
    control,
    name,
    defaultValue: "",
  });
  return (
    <label>
      <input
        onChange={() => {}}
        checked={checked}
        value={lowerCase(children)}
        type="radio"
        className="hidden-input py-[18px]"
        {...field}
      />
      <div className="flex items-center font-medium cursor-pointer gap-x-[14px]">
        {checked === true ? (
          <IconSelectRadio></IconSelectRadio>
        ) : (
          <IconDeSelectRadio></IconDeSelectRadio>
        )}
        <span className="font-medium text-display text-gray">{children}</span>
      </div>
    </label>
  );
};

export default Radio;
