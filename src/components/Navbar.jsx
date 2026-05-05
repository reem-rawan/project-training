import { Link } from "react-router-dom";
import "./Navbar.css";

export default function Navbar({ userType }) {
  return (
    <nav className="navbar">
      {/* القوائم تظهر على اليمين في نظام RTL */}
      <div className="nav-links">
        {userType === "student" && (
          <>
            <Link to="/alumni-platform" className="alumni-btn">منصة الخريجين</Link>
            <Link to="/student/StudentDashboard">الرئيسية</Link>
            <Link to="/student/MyApplications">طلباتي</Link>
            <Link to="/student/StudentProfile">البيانات الشخصية</Link>
            <Link to="/login" className="logout-link">تسجيل الخروج</Link>
          </>
        )}
      </div>

      {/* الشعار يظهر على اليسار */}
      <div className="nav-logo-container">
        <img src="src/png/logo90.jpg" alt="logo" className="nav-logo" />
      </div>
    </nav>
  );
}