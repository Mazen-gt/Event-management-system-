import React from "react";
import { EventCards } from "./EventCards";
import { EventManagement } from "./EventManagement";
import { Sidebar } from "./Sidebar";
import { Title } from "./Title";
import arrow2 from "./arrow-2.svg";
import arrow3 from "./arrow-3.svg";
import arrow4 from "./arrow-4.svg";
import arrow5 from "./arrow-5.svg";
import arrow14 from "./arrow-14.svg";
import "./style.css";
import tune from "./tune.png";

export const BrowseEventsScreen = () => {
  return (
    <div className="browse-events-screen">
      <div className="div-3">
        <div className="overlap-20">
          <div className="outer-line" />

          <div className="content-box" />

          <img className="arrow-2" alt="Arrow" src={arrow2} />

          <img className="arrow-3" alt="Arrow" src={arrow4} />

          <img className="arrow-4" alt="Arrow" src={arrow3} />

          <img className="arrow-5" alt="Arrow" src={arrow5} />

          <EventManagement />
          <Title />
          <EventCards />
          <button className="filter-button">
            <div className="overlap-21">
              <div className="text-wrapper-34">Filter</div>

              <img className="arrow-6" alt="Arrow" src={arrow14} />

              <img className="tune" alt="Tune" src={tune} />
            </div>
          </button>

          <div className="rectangle-4" />

          <Sidebar />
        </div>

        <div className="rectangle-5" />
      </div>
    </div>
  );
};
