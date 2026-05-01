
// import React, { useState } from "react";
// import "bootstrap/dist/css/bootstrap.min.css";
// import "./SmartPortalsidebar.css";

// const menuItems = [
//   { section: "Foundation" },
//   { name: "dashboard", label: "Dashboard" },
//   { name: "attendenceLog", label: "Attendence Log" },
//   { name: "profile", label: "My Profile" },
//   { name: "org", label: "Org Directory" },
//   { section: "Core Features" },
//   { name: "leave", label: "Leave Management" },
//   { name: "timesheet", label: "Timesheet Submission" },
//   { name: "approvals", label: "Approvals (Manager)" },
//   { name: "notifications", label: "Notifications" },
//   { name: "team", label: "Team View (Manager)" },
//   { name: "admin", label: "HR Admin Backend" },
//   { section: "Advanced" },
//   { name: "updates", label: "Daily Updates Feed" },
//   { name: "reports", label: "Reports & Analytics" },
//   { name: "payslips", label: "Payslips & Documents" }
// ];

// export default function Sidebar() {
//   const [active, setActive] = useState("dashboard");

//   return (
//     <div className="smartPortal-sidebar">
//       <nav className="smartPortal-sidebar-nav">
//         {menuItems.map((item, index) => {
//           if (item.section) {
//             return (
//               <span key={index} className="smartPortal-nav-section-label">
//                 {item.section}
//               </span>
//             );
//           }
//           const isActive = active === item.name;
//           return (
//             <div
//               key={item.name}
//               onClick={() => setActive(item.name)}
//               className={`smartPortal-nav-item ${isActive ? "smartPortal-active" : ""}`}
//             >
//               <span className="smartPortal-nav-indicator"></span>

//               <i className="bi bi-circle smartPortal-nav-icon"></i>

//               <span className="smartPortal-nav-label">{item.label}</span>
//             </div>
//           );
//         })}
//       </nav>
//     </div>
//   );
// }



import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./SmartPortalsidebar.css";
import DashboardInfo from "../DashboardInfo/DashboardInfo";

// All Components
export const Dashboard = () => <div><DashboardInfo/></div>;
export const AttendenceLog = () => <div>Attendence Log Component</div>;
export const Profile = () => <div>My Profile Component</div>;
export const Org = () => <div>Org Directory Component</div>;
export const Leave = () => <div>Leave Management Component</div>;
export const Timesheet = () => <div>Timesheet Submission Component</div>;
export const Approvals = () => <div>Approvals Component</div>;
export const Notifications = () => <div>Notifications Component</div>;
export const Team = () => <div>Team View Component</div>;
export const Admin = () => <div>HR Admin Backend Component</div>;
export const Updates = () => <div>Daily Updates Feed Component</div>;
export const Reports = () => <div>Reports & Analytics Component</div>;
export const Payslips = () => <div>Payslips & Documents Component</div>;

// Mapping
export const componentMap = {
  dashboard: <Dashboard />,
  attendenceLog: <AttendenceLog />,
  profile: <Profile />,
  org: <Org />,
  leave: <Leave />,
  timesheet: <Timesheet />,
  approvals: <Approvals />,
  notifications: <Notifications />,
  team: <Team />,
  admin: <Admin />,
  updates: <Updates />,
  reports: <Reports />,
  payslips: <Payslips />
};

const menuItems = [
  { section: "Foundation" },
  { name: "dashboard", label: "Dashboard" },
  { name: "attendenceLog", label: "Attendence Log" },
  { name: "profile", label: "My Profile" },
  { name: "org", label: "Org Directory" },
  { section: "Core Features" },
  { name: "leave", label: "Leave Management" },
  { name: "timesheet", label: "Timesheet Submission" },
  { name: "approvals", label: "Approvals (Manager)" },
  { name: "notifications", label: "Notifications" },
  { name: "team", label: "Team View (Manager)" },
  { name: "admin", label: "HR Admin Backend" },
  { section: "Advanced" },
  { name: "updates", label: "Daily Updates Feed" },
  { name: "reports", label: "Reports & Analytics" },
  { name: "payslips", label: "Payslips & Documents" }
];

export default function Sidebar({ active, setActive }) {
  return (
    <div className="smartPortal-sidebar">
      <nav className="smartPortal-sidebar-nav">
        {menuItems.map((item, index) => {
          if (item.section) {
            return (
              <span key={index} className="smartPortal-nav-section-label">
                {item.section}
              </span>
            );
          }
          const isActive = active === item.name;
          return (
            <div
              key={item.name}
              onClick={() => setActive(item.name)}
              className={`smartPortal-nav-item ${isActive ? "smartPortal-active" : ""}`}
            >
              <span className="smartPortal-nav-indicator"></span>
              <i className="bi bi-circle smartPortal-nav-icon"></i>
              <span className="smartPortal-nav-label">{item.label}</span>
            </div>
          );
        })}
      </nav>
    </div>
  );
}
