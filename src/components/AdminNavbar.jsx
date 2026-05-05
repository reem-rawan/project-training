import { Link } from "react-router-dom";
import "./Navbar.css";

export default function AdminNavbar() {
  return (
    <nav className="navbar">
      <div className="nav-logo-container">
        <img src="src/png/logo90.jpg" className="nav-logo" />
      </div>

      <div className="nav-links">
        <Link to="/admin/dashboard">لوحة التحكم</Link>
        <Link to="/admin/companies">إدارة الشركات</Link>
        <Link to="/admin/jobs">إدارة الوظائف</Link>
        <Link to="/admin/applications">إدارة الطلبات</Link>
        <Link to="/admin/users">إدارة المستخدمين</Link>
        <Link to="/login">تسجيل الخروج</Link>
      </div>
    </nav>
  );
}
