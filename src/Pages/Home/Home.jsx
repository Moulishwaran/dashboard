import React from "react";
import Chart from "../../components/chart/Chart";
import FeaturedInfo from "../../components/FeaturedInfo/FeaturedInfo";
import "./home.css";
import { userdata } from "../../dummydata";
import Widgetsm from "../../components/Widgetsm/Widgetsm";
import WidgetLg from "../../components/WidgetLg/WidgetLg";

export default function Home() {
  return (
    <div className="home">
      <FeaturedInfo />
      <Chart
        data={userdata}
        title="Transaction Analytics"
        grid
        dataKey="Active User"
      />
      <div className="homeWidgets">
        <Widgetsm />
        <WidgetLg />
      </div>
    </div>
  );
}
