import React from "react";
import "./featuredInfo.css";

import ArrowDownward from "@mui/icons-material/ArrowDownward";
import ArrowUpward from "@mui/icons-material/ArrowUpward ";

export default function FeaturedInfo() {
  return (
    <div className="featured">
      <div className="featuredItem">
        <span className="featuredTitle">Revanue</span>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney">$2,414</span>
          <span className="featuredMoneyRate">
            -35.56
            <ArrowDownward className="featuredIcon negative" />
          </span>
        </div>
        <span className="featuredSub">Compare to last Month</span>
      </div>
      <div className="featuredItem">
        <span className="featuredTitle">Current Balance</span>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney">$6,895</span>
          <ArrowUpward className="featuredIcon" />
        </div>
        <span className="featuredSub">Balance</span>
      </div>
      <div className="featuredItem">
        <span className="featuredTitle">Credit Card Bill</span>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney">$10,568</span>
          <span className="featuredMoneyRate">
            500
            <ArrowUpward className="featuredIcon" />
          </span>
        </div>
        <span className="featuredSub">Compare to last Month high</span>
      </div>
    </div>
  );
}
