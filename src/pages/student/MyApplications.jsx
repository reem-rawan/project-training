import Navbar from "../../components/Navbar";
import "./MyApplications.css";
import { useEffect, useState } from "react";

export default function MyApplications() {
  const [applications, setApplications] = useState([]);

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("applications")) || [
      { job: "الأمن السيبراني", company: "قطاع التقنية والرقمنة", date: "2026-04-20", status: "تحت المراجعة" },
      { job: "المحاسبة المالية", company: "قطاع الإدارة والاقتصاد", date: "2026-04-21", status: "تحت المراجعة" }
    ];
    setApplications(saved);
  }, []);

  return (
    <div className="page-layout">
      <Navbar userType="student" />
      
      <main className="applications-main">
        <div className="container-box">
          <h1 className="table-title">طلباتي</h1>
          
          <div className="table-wrapper">
            {applications.length === 0 ? (
              <p className="no-data-msg">لا توجد طلبات حتى الآن.</p>
            ) : (
              <table className="custom-table">
                <thead>
                  <tr>
                    <th>اسم التخصص</th>
                    <th>الكلية / القطاع</th>
                    <th>تاريخ التقديم</th>
                    <th>الحالة</th>
                  </tr>
                </thead>
                <tbody>
                  {applications.map((app, index) => (
                    <tr key={index}>
                      <td className="highlight-text">{app.job}</td>
                      <td>{app.company}</td>
                      <td>{app.date}</td>
                      <td>
                        <span className={`status-tag ${app.status === 'تحت المراجعة' ? 'pending' : ''}`}>
                          {app.status}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            )}
          </div>
        </div>
      </main>
    </div>
  );
}