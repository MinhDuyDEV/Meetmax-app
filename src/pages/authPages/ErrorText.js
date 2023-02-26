import React from "react";

const ErrorText = ({ children }) => {
  return (
    <p className="font-normal text-left text-body14 text-red">{children}</p>
  );
};

export default ErrorText;
