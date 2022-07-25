import React from "react";
import "./sidebar.css";

import LineStyle from "@mui/icons-material/LineStyle";
import Timeline from "@mui/icons-material/Timeline";
import PermIdentity from "@mui/icons-material/PermIdentitye";
import Storefront from "@mui/icons-material/ Storefront";
import BarChart from "@mui/icons-material/ BarChart";
import MailOutline from "@mui/icons-material/ MailOutline";
import DynamicFeed from "@mui/icons-material/DynamicFeed";
import ChatBubbleOutline from "@mui/icons-material/ChatBubbleOutline";
import WorkOutline from "@mui/icons-material/WorkOutline";
import Report from "@mui/icons-material/WorkOutline";
import CreditCardIcon from "@mui/icons-material/CreditCardIcon";

export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Dashboard</h3>
          <ul className="sidebarList">
            <li className="sidebarListItem active">
              <LineStyle className="sidebarIcon" />
              Home
            </li>
            <li className="sidebarListItem">
              <Timeline className="sidebarIcon" />
              Account
            </li>
            <li className="sidebarListItem">
              <Report className="sidebarIcon" />
              Transaction
            </li>
          </ul>
        </div>
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Quick Menu</h3>
          <ul className="sidebarList">
            <li className="sidebarListItem">
              <PermIdentity className="sidebarIcon" />
              User
            </li>
            <li className="sidebarListItem">
              <Storefront className="sidebarIcon" />
              Loan detail
            </li>
            <li className="sidebarListItem">
              <CreditCardIcon className="sidebarIcon" />
              Credit Card
            </li>
            <li className="sidebarListItem">
              <BarChart className="sidebarIcon" />
              Reports
            </li>
          </ul>
        </div>
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Notifications</h3>
          <ul className="sidebarList">
            <li className="sidebarListItem">
              <MailOutline className="sidebarIcon" />
              Mail
            </li>
            <li className="sidebarListItem">
              <DynamicFeed className="sidebarIcon" />
              Feedback
            </li>
            <li className="sidebarListItem">
              <ChatBubbleOutline className="sidebarIcon" />
              Messages
            </li>
          </ul>
        </div>
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Staff</h3>
          <ul className="sidebarList">
            <li className="sidebarListItem">
              <WorkOutline className="sidebarIcon" />
              Manage
            </li>
            <li className="sidebarListItem">
              <Timeline className="sidebarIcon" />
              Analytics
            </li>
            <li className="sidebarListItem">
              <Report className="sidebarIcon" />
              Reports
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
