import React from "react";
import Friend from "./Friend";

const Followers = () => {
  return (
    <div className="grid grid-cols-3 gap-[19px]">
      <Friend></Friend>
      <Friend following></Friend>
      <Friend></Friend>
      <Friend following></Friend>
      <Friend></Friend>
      <Friend></Friend>
      <Friend following></Friend>
      <Friend following></Friend>
      <Friend></Friend>
      <Friend></Friend>
      <Friend following></Friend>
      <Friend></Friend>
      <Friend></Friend>
      <Friend following></Friend>
      <Friend></Friend>
    </div>
  );
};

export default Followers;
