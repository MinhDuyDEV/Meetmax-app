import React, { useState } from "react";
import { useController } from "react-hook-form";
import { IconDeSelect, IconSelect } from "../icons";

const Checkbox = ({ control, name, checked, children }) => {
  const [checkbox, setCheckbox] = useState(false);
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
        type="checkbox"
        control={control}
        className="hidden-input"
        {...field}
      />
      <div
        className="flex items-center gap-x-[10px] cursor-pointer select-none"
        onClick={() => setCheckbox(!checkbox)}
      >
        {checkbox ? <IconSelect></IconSelect> : <IconDeSelect></IconDeSelect>}
        <span className="font-medium text-body14 text-gray">{children}</span>
      </div>
    </label>
  );
};

export default Checkbox;
