import React from "react";
import AdminWelcomeBar from "./AdminWelcomeBar"; // 👈 لأنه في نفس الفولدر

import { CustomerEngagement } from "../../components/CustomerEngagement";
import { EventSeat } from "../../components/EventSeat";
import { NetSalesChart } from "../../components/NetSalesChart";
import { Notifications } from "../../components/Notification";
import { Sidebar } from "../../components/Sidebar";
import { UpcomingEvents } from "../../components/UpcomingEvents";

import "../../styles/Dashboard.css";

const Dashboard = () => {
  return (
    <div className="dashboard-screen">
      <div className="div-2">
        <div className="overlap-21">
          <div className="content-box" />

          {/* Images from public/images */}
          <img className="arrow-4" alt="Arrow" src="/images/Arrow-2.svg" />
          <img className="arrow-5" alt="Arrow" src="/images/Arrow-4.svg" />
          <img className="arrow-6" alt="Arrow" src="/images/Arrow-3.svg" />
          <img className="arrow-7" alt="Arrow" src="/images/Arrow-5.svg" />

          <AdminWelcomeBar />

          <div className="events">
            <div className="overlap-22">
              <div className="text-wrapper-45">EVENTS</div>
              <div className="text-wrapper-46">28 Events</div>
              <img className="img-2" alt="Dancing" src="/images/Dancing.svg" />
            </div>
          </div>

          <div className="bookings">
            <div className="overlap-22">
              <div className="rectangle-40" />
              <div className="text-wrapper-47">BOOKINGS</div>
              <div className="text-wrapper-48">2,7598</div>
              <img className="img-2" alt="Movie ticket" src="/images/MovieTicket.svg" />
              <img className="img-2" alt="Extra image" src="/images/image.svg" />
            </div>
          </div>

          <div className="revenue">
            <div className="overlap-22">
              <div className="rectangle-40" />
              <div className="text-wrapper-49">REVENUE</div>
              <img className="transaction" alt="Transaction" src="/images/Transaction.svg" />
              <div className="text-wrapper-50">623,500 LKR</div>
              <img className="transaction" alt="Transaction 2" src="/images/Transaction2.svg" />
            </div>
          </div>

          <NetSalesChart />
          <EventSeat />
          <UpcomingEvents />
          <Notifications />
          <CustomerEngagement />

          <img className="arrow-4" alt="Arrow" src="/images/arrow-14.png" />
          <img className="arrow-5" alt="Arrow" src="/images/arrow-15.png" />
          <img className="arrow-6" alt="Arrow" src="/images/arrow-16.png" />
          <img className="arrow-7" alt="Arrow" src="/images/arrow-17.png" />

          <Sidebar />
        </div>
        <div className="ellipse-18" />
      </div>
    </div>
  );
};

export default Dashboard;
