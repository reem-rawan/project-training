import React from "react";
import AdminNavbar from "../../components/AdminNavbar";
import "./AdminDashboard.css";

export default function AdminDashboard() {
  return (
    <div className="admin-dashboard">

      <AdminNavbar />

      <h1 className="admin-title">إحصائيات النظام</h1>

      <div className="stats-container">

        {/* عدد الفرق */}
        <div className="stat-box">
          <div className="circle">
            <div className="inner-circle"></div>
          </div>
          <h3>عدد الفرق</h3>
          <p className="stat-number">45</p>
        </div>

        {/* عدد الموظفين */}
        <div className="stat-box">
          <div className="circle">
            <div className="inner-circle"></div>
          </div>
          <h3>عدد الموظفين</h3>
          <p className="stat-number">112</p>
        </div>

        {/* عدد الفنيين */}
        <div className="stat-box">
          <div className="circle">
            <div className="inner-circle"></div>
          </div>
          <h3>عدد الفنيين</h3>
          <p className="stat-number">320</p>
        </div>

      </div>

    </div>
  );
}

