import React from "react";
import { AllAttendee } from "./AllAttendee";
import { AttendeeAges } from "./AttendeeAges";
import { AttendeeInterests } from "./AttendeeInterests";
import { AttendeeNavbar } from "./AttendeeNavbar";
import { InsightCards } from "./InsightCards";
import { Sidebar } from "./Sidebar";
import "./style.css";

export const AllEventsAttendee = () => {
  return (
    <div className="all-events-attendee">
      <div className="overlap-wrapper">
        <div className="overlap-19">
          <div className="content-box" />

          <Sidebar />
          <AttendeeNavbar />
          <AllAttendee />
          <AttendeeInterests />
          <AttendeeAges />
          <InsightCards />
        </div>
      </div>
    </div>
  );
};
