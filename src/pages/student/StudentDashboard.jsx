import "./StudentDashboard.css";
import Navbar from "../../components/Navbar";
import { useNavigate } from "react-router-dom";
import { useState } from "react"; // استيراد useState للتحكم في البيانات مستقبلاً

export default function StudentDashboard() {
  const navigate = useNavigate();

  // مصفوفة تجريبية للإعلانات (في المستقبل ستأتي هذه البيانات من قاعدة بيانات MySQL عبر Laravel)
  const [ads, setAds] = useState([
    {
      id: 1,
      title: "مطور واجهات أمامية",
      company: "شركة تقنية المستقبل",
      location: "الرياض",
      type: "دوام كامل",
      isActive: true, // الإعلان متاح
    },
    {
      id: 2,
      title: "محلل بيانات",
      company: "حلول الأعمال الذكية",
      location: "جدة",
      type: "تدريب",
      isActive: true, 
    },
    {
      id: 3,
      title: "مسؤولة دعم فني",
      company: "شركة الخدمات الرقمية",
      location: "الدمام",
      type: "عمل جزئي",
      isActive: false, // هذا الإعلان مغلق (لن يظهر للطالب)
    },
    {
      id: 4,
      title: "أخصائية تسويق رقمي",
      company: "إبداع للتسويق",
      location: "الرياض",
      type: "دوام كامل",
      isActive: true,
    },
  ]);

  return (
    <>
      <Navbar userType="student" />

      <div className="student-dashboard">
        <h1 className="main-title">مرحباً بكم في صفحة التدريب الميداني</h1>
        <p className="description">
          يهدف المشروع إلى تصميم وتطوير نظام ويب متكامل لإدارة ومتابعة بيانات الخريجين والتدريب الميداني...
        </p>

        {/* قسم الإعلانات الوظيفية */}
        <div className="jobs-section">
          <h2 className="section-title">الإعلانات الوظيفية </h2>

          <div className="jobs-list">
            {/* نقوم بعمل فلترة للإعلانات بحيث تظهر النشطة فقط (isActive === true) */}
            {ads.filter(ad => ad.isActive).map((ad) => (
              <div className="job-card" key={ad.id}>
                <div className="ad-badge">إعلان نشط</div>
                <h3>{ad.title}</h3>
                <p>{ad.company}</p>
                <p>{ad.location} • {ad.type}</p>
                <button 
                  className="details-btn"
                  onClick={() => navigate(`/ad-details/${ad.id}`)}
                >
                  عرض تفاصيل الإعلان
                </button>
              </div>
            ))}
            
            {/* في حال عدم وجود إعلانات نشطة */}
            {ads.filter(ad => ad.isActive).length === 0 && (
              <p className="no-ads">لا توجد إعلانات نشطة حالياً.</p>
            )}
          </div>
        </div>

        {/* قسم الكليات (يبقى كما هو) */}
        <div className="colleges-section">
          <h2 className="section-title">الكلية التطبيقية</h2>
          <div className="colleges-buttons">
            <button className="college-btn" onClick={() => navigate("/student/college/قطاع الإدارة والاقتصاد")}>
              قطاع الإدارة والاقتصاد
            </button>
            <button className="college-btn" onClick={() => navigate("/student/college/قطاع التقنية والرقمنة")}>
              قطاع التقنية والرقمنة
            </button>
            <button className="college-btn" onClick={() => navigate("/student/college/قطاع السياحة والضيافة")}>
              قطاع السياحة والضيافة
            </button>
            <button className="college-btn" onClick={() => navigate("/student/college/قطاع الهندسة والتصميم")}>
              قطاع الهندسة والتصميم
            </button>
          </div>
        </div>

        <footer className="footer">
          <p>+966 55 555 5555</p>
          <p>info@example.com</p>
        </footer>
      </div>
    </>
  );
}