import { useParams } from "react-router-dom";
import Navbar from "../../components/Navbar";
import { useState, useEffect } from "react";
import "./StudentDashboard.css";


export default function CollegePage() {
  const { collegeName } = useParams();
  const [opportunities, setOpportunities] = useState([]); // لتخزين البيانات القادمة من الباك اند
  const [loading, setLoading] = useState(true);
  const [submittedIndex, setSubmittedIndex] = useState(null);
  const [error, setError] = useState(null);

  // 1. جلب البيانات من الباك اند عند تحميل الصفحة
  useEffect(() => {
    const fetchOpportunities = async () => {
      try {
        setLoading(true);
        // استخدام الرابط الذي زودتك به أريام لجلب الفرص
        const response = await api.get('/opportunities');
        
        // تصفية البيانات (اختياري) لتعرض فقط الفرص التابعة لهذا القطاع
        // إذا كان الباك اند يرسل كل الفرص، نقوم بتصفيتها بناءً على collegeName
        const filteredData = response.data.filter(item => item.sector === collegeName || !collegeName);
        
        setOpportunities(filteredData);
      } catch (err) {
        console.error("خطأ في جلب الفرص:", err);
        setError("فشل في تحميل الفرص التدريبية");
      } finally {
        setLoading(false);
      }
    };

    fetchOpportunities();
  }, [collegeName]);

  // 2. إرسال طلب التقديم للباك اند
  const handleApply = async (opportunityId, index) => {
    try {
      // استخدام الرابط: http://127.0.0.1:8000/applications لإرسال الطلب
      await api.post('/applications', {
        opportunity_id: opportunityId,
        // يمكنك إضافة بيانات الطالب هنا إذا لزم الأمر
      });

      setSubmittedIndex(index);
    } catch (err) {
      console.error("خطأ في التقديم:", err);
      alert("حدث خطأ أثناء إرسال طلبك");
    }
  };

  const descriptions = {
    "قطاع التقنية والرقمنة": "هذا القطاع هو الأكثر طلباً نظراً للتحول الرقمي السريع.",
    "قطاع الإدارة والاقتصاد": "تخصصات تهدف لتجهيز الكوادر الإدارية والمالية.",
    "قطاع السياحة والضيافة": "تخصصات تدعم التوجهات السياحية العالمية.",
    "قطاع الهندسة والتصميم": "تركز على الجانب التقني والفني.",
  };

  return (
    <>
      <Navbar userType="student" />

      <div className="student-dashboard">
        <h1 className="main-title">{collegeName}</h1>
        <p className="description">{descriptions[collegeName] || "استكشف الفرص التدريبية المتاحة في هذا القطاع"}</p>

        {loading ? (
          <p className="loading-text">جاري تحميل الفرص التدريبية...</p>
        ) : error ? (
          <p className="error-text">{error}</p>
        ) : (
          <div className="majors-grid">
            {opportunities.length > 0 ? (
              opportunities.map((opp, index) => (
                <div key={opp.id || index} className="major-card">
                  <h3>{opp.title || opp.major}</h3>
                  <p>{opp.company_name || "اسم الشركة غير محدد"}</p>
                  
                  {submittedIndex === index ? (
                    <p style={{ color: "green", marginTop: "15px", fontWeight: "bold" }}>
                      تم التقديم بنجاح ✔
                    </p>
                  ) : (
                    <button
                      className="details-btn"
                      style={{ marginTop: "15px" }}
                      onClick={() => handleApply(opp.id, index)}
                    >
                      تقديم الآن
                    </button>
                  )}
                </div>
              ))
            ) : (
              <p>لا توجد فرص متاحة حالياً في هذا القطاع.</p>
            )}
          </div>
        )}
      </div>
    </>
  );
}