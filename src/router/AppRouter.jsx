import React from "react";
import { Routes, Route, Navigate, Outlet } from "react-router-dom";

// --- المكونات المشتركة ---
import Navbar from "../components/Navbar"; 
import CompanyNavbar from "../components/CompanyNavbar.jsx";

// --- تسجيل الدخول ---
import Login from "../pages/login/login"; 
import ResetPassword from "../pages/ResetPassword";

// --- صفحات الطالب (المسارات المعدلة حسب ترتيب مجلدك) ---
import StudentDashboard from "../pages/student/StudentDashboard";
import JobDetails from "../pages/student/JobDetails";
import MyApplications from "../pages/student/MyApplications";
import StudentProfile from "../pages/student/StudentProfile";
import CollegePage from "../pages/student/CollegePage";

// --- صفحات الشركة ---
import AddJob from "../pages/company/AddJob";
import Applicants from "../pages/company/Applicants";
import Statistics from "../pages/company/Statistics";

// --- صفحات الأدمن ---
import AdminDashboard from "../pages/admin/AdminDashboard";
import ManageCompanies from "../pages/admin/ManageCompanies";
import ManageJobs from "../pages/admin/ManageJobs";
import ManageApplications from "../pages/admin/ManageApplications";
import ManageUsers from "../pages/admin/ManageUsers";

// --- تصميم الـ Layout (يضمن بقاء النيف بار ثابت) ---
const StudentLayout = ({ language }) => (
  <>
    <Navbar userType="student" language={language} />
    <Outlet /> 
  </>
);

const CompanyLayout = ({ language, toggleLanguage }) => (
  <>
    <CompanyNavbar language={language} toggleLanguage={toggleLanguage} />
    <Outlet />
  </>
);

const AppRouter = ({ language, toggleLanguage, isJobClosed, setIsJobClosed }) => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/login" />} />
      <Route path="/login" element={<Login language={language} />} />
      <Route path="/reset-password" element={<ResetPassword language={language} />} />

   {/* {/ *login*/}
    Route::post('/login', [AuthController::class, 'login']);

      {/* مسارات الطالب - تبدأ بـ /student */}
      <Route path="/student" element={<StudentLayout language={language} />}>
        <Route index element={<Navigate to="home" />} />
        <Route path="/student/StudentDashboard" element={<StudentDashboard language={language} />} />
        <Route path="/student/JobDetails" element={<JobDetails language={language} />} />
        <Route path="/student/MyApplications" element={<MyApplications language={language} />} />
        <Route path="/student/StudentProfile" element={<StudentProfile language={language} />} />
        <Route path="/student/CollegePage" element={<CollegePage language={language} />} />
      </Route>

      {/* مسارات الشركة - تبدأ بـ /company */}
      <Route path="/company" element={<CompanyLayout language={language} toggleLanguage={toggleLanguage} />}>
        <Route index element={<Navigate to="applicants" />} />
        <Route path="applicants" element={<Applicants language={language} isJobClosed={isJobClosed} setIsJobClosed={setIsJobClosed} />} />
        <Route path="add-job" element={<AddJob language={language} />} />
        <Route path="statistics" element={<Statistics language={language} />} />
      </Route>

      {/* مسارات الأدمن */}
      <Route path="/admin-dashboard" element={<AdminDashboard language={language} />} />
      <Route path="/manage-companies" element={<ManageCompanies language={language} />} />
      <Route path="/manage-jobs" element={<ManageJobs language={language} />} />
      <Route path="/manage-applications" element={<ManageApplications language={language} />} />
      <Route path="/manage-users" element={<ManageUsers language={language} />} />

      <Route path="*" element={<Navigate to="/login" />} />
    </Routes>
  );
};

export default AppRouter;