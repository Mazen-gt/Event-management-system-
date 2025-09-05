import React from "react";
import { EventForum } from "./EventForum";
import { Sidebar } from "./Sidebar";
import "./style.css";

export const EventDetailsPage = () => {
  return (
    <div className="event-details-page">
      <div className="overlap-wrapper">
        <div className="overlap-17">
          <div className="outer-line" />

          <div className="content-box" />

          <EventForum />
          <Sidebar />
        </div>
      </div>
    </div>
  );
};
