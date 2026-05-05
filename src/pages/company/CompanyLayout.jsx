import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../../components/CompanyNavbar"; // لاحظ المسار (نخرج مجلدين للوصول لـ components)

const CompanyLayout = ({ language, toggleLanguage }) => {
  return (
    <>
      {/* هذا هو النيف بار الذي سيظهر في كل صفحات الشركة */}
      <Navbar language={language} toggleLanguage={toggleLanguage} />
      
      <main style={{ padding: "20px" }}>
        {/* هنا سيتم عرض محتوى الصفحات (المتقدمين، إضافة وظيفة، الإحصائيات) */}
        <Outlet />
      </main>
    </>
  );
};

export default CompanyLayout;