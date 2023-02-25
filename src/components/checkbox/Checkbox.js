import React, { useState } from "react";
import { IconDeSelect, IconSelect } from "../icons";

const Checkbox = ({ checked, children }) => {
  const [checkbox, setCheckbox] = useState(false);
  return (
    <label>
      <input
        onChange={() => {}}
        checked={checked}
        type="checkbox"
        className="hidden-input"
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
