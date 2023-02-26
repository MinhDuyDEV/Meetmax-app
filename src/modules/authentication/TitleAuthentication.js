import React from "react";

const TitleAuthentication = ({
  title = "",
  desc = "Create an account to continue and connect with the people.",
  email = "",
}) => {
  return (
    <div className="text-center">
      <h1 className="font-black text-heading1 text-gray mb-[10px]">{title}</h1>
      {/* <div className="text-display font-medium text-gray mb-[30px]">{desc}</div> */}
      {email === "" ? (
        <div className="text-display font-medium text-gray mb-[30px]">
          {desc}
        </div>
      ) : (
        <div className="text-display font-medium text-gray mb-[30px]">
          {desc}
          <span className="font-medium text-blue text-display">{email}</span>
        </div>
      )}
    </div>
  );
};

export default TitleAuthentication;
