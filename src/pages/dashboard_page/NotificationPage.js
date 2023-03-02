import React from "react";
import { Outlet } from "react-router-dom";
import RightBar from "../../modules/dashboard/RightBar";

const NotificationPage = () => {
  return (
    <div className="flex">
      <div className="flex-1 bg-gray bg-opacity-[3%] p-[30px] rounded-2xl">
        <Outlet></Outlet>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga ea illum
        animi reprehenderit eum ullam eveniet. Enim eos, cum quidem minus id
        distinctio aliquam praesentium numquam a quisquam delectus autem!
      </div>
      <RightBar></RightBar>
    </div>
  );
};

export default NotificationPage;
