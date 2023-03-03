import React from "react";
import ExploreCard from "./ExploreCard";

const ExploreView = () => {
  return (
    <div className="grid grid-cols-3 gap-[30px]">
      <ExploreCard status="features"></ExploreCard>
      <ExploreCard status="features"></ExploreCard>
      <ExploreCard status="new"></ExploreCard>
      <ExploreCard status="new"></ExploreCard>
      <ExploreCard status="features"></ExploreCard>
      <ExploreCard status="new"></ExploreCard>
      <ExploreCard status="features"></ExploreCard>
      <ExploreCard status="features"></ExploreCard>
      <ExploreCard status="new"></ExploreCard>
      <ExploreCard status="features"></ExploreCard>
    </div>
  );
};

export default ExploreView;
