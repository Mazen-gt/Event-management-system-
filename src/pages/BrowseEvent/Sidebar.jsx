import React from "react";
import "./Sidebar.css";

export default function Sidebar() {
  const menuItems = [
    { icon: "/images/dashboard.png", label: "Dashboard" },
    { icon: "/images/manage-events.png", label: "Manage Events" },
    { icon: "/images/booking-tickets.png", label: "Booking Tickets" },
    { icon: "/images/attendee-insights.png", label: "Attendee Insights" },
    { icon: "/images/analytics-reports.png", label: "Analytics Reports" },
    { icon: "/images/contact-support.png", label: "Contact Support" },
    { icon: "/images/notifications.png", label: "Notifications" },
    { icon: "/images/settings.png", label: "Settings" },
    { icon: "/images/marketing.png", label: "Marketing" },
    { icon: "/images/event-categories.png", label: "Event Categories" },
    { icon: "/images/account-management.png", label: "Account Management" },
    { icon: "/images/manage-users.png", label: "Manage Users" },
    { icon: "/images/logout.png", label: "Logout" },
  ];

  return (
    <div className="sidebar">
      <div className="sidebar-header">
        <img src="/images/mask-group.png" alt="Logo" className="sidebar-logo" />
        <h2>EventX Studio</h2>
      </div>

      <ul className="sidebar-menu">
        {menuItems.map((item, index) => (
          <li key={index} className="sidebar-item">
            <img src={item.icon} alt={item.label} className="sidebar-icon" />
            <span className="sidebar-label">{item.label}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
