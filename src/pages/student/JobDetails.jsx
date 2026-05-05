import { useState } from "react";
import "./JobDetails.css";

export default function JobDetails() {
  const [applied, setApplied] = useState(false);

  const handleApply = () => {
    setApplied(true);
  };

  return (
    <div className="job-details-page">

      <div className="job-card-details">

        <h1 className="job-title">مطور واجهات أمامية</h1>
        <p className="company">شركة تقنية المستقبل - الرياض</p>

        <h2 className="section-title">وصف الوظيفة</h2>
        <p className="text">
          نبحث عن مطور واجهات أمامية لديه خبرة في React و JavaScript لبناء واجهات
          تفاعلية عالية الجودة، والعمل ضمن فريق تقني متكامل.
        </p>

        <h2 className="section-title">المتطلبات</h2>
        <ul className="requirements">
          <li>إجادة HTML / CSS / JavaScript</li>
          <li>خبرة في React</li>
          <li>القدرة على العمل ضمن فريق</li>
          <li>حل المشكلات والتفكير التحليلي</li>
        </ul>

        {!applied ? (
          <button className="apply-btn" onClick={handleApply}>
            التقديم على الوظيفة
          </button>
        ) : (
          <p className="success-message">تم إرسال طلبك بنجاح</p>
        )}

      </div>

      <footer className="footer">
        <p>+966 55 555 5555</p>
        <p>info@example.com</p>
      </footer>

    </div>
  );
}
