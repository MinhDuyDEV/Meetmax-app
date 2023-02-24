import React from "react";
import { IconApple, IconGoogle } from "../../components/icons";

const ButtonLogin = ({ icon = "Google" }) => {
  const classNameBtn =
    "flex items-center gap-x-[25px] text-gray bg-gray bg-opacity-5 rounded-[10px] py-[14px] px-7";
  return (
    <>
      {icon === "Google" && (
        <button className={classNameBtn} type="button">
          <IconGoogle></IconGoogle>
          <p className="font-medium text-display">Log in with {icon}</p>
        </button>
      )}
      {icon === "Apple" && (
        <button className={classNameBtn} type="button">
          <IconApple></IconApple>
          <p className="font-medium text-display">Log in with {icon}</p>
        </button>
      )}
    </>
  );
};

export default ButtonLogin;
