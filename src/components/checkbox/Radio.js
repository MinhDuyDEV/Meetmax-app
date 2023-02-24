import React from "react";
import { IconMale } from "../icons";

const Radio = ({ checked = true, children }) => {
  return (
    <label className="">
      <IconMale></IconMale>
      <input
        onChange={() => {}}
        checked={checked}
        type="radio"
        className="hidden-input"
      />
      <div className="flex items-center font-medium cursor-pointer gap-x-3">
        <div
          className={`w-5 h-5 rounded-full border flex items-center justify-center p-1 ${
            checked
              ? "bg-primary border-primary text-red"
              : "border-gray-200 text-transparent"
          }`}
        >
          <svg
            width={16}
            height={16}
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M16 8C16 12.4183 12.4183 16 8 16C3.58172 16 0 12.4183 0 8C0 3.58172 3.58172 0 8 0C12.4183 0 16 3.58172 16 8ZM2 8C2 11.3137 4.68629 14 8 14C11.3137 14 14 11.3137 14 8C14 4.68629 11.3137 2 8 2C4.68629 2 2 4.68629 2 8Z"
              fill="#377DFF"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M8 12C10.2091 12 12 10.2091 12 8C12 5.79086 10.2091 4 8 4C5.79086 4 4 5.79086 4 8C4 10.2091 5.79086 12 8 12Z"
              fill="#377DFF"
            />
          </svg>
        </div>
        <span className="font-medium text-display text-gray">{children}</span>
      </div>
    </label>
  );
};

export default Radio;
