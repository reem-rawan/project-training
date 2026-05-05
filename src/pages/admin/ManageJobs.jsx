import AdminNavbar from "../../components/AdminNavbar";
import "./ManageJobs.css";

export default function ManageJobs() {
  const jobs = [
    { title: "مبرمج واجهات", company: "تقنية المستقبل", status: "نشط" },
    { title: "محلل نظم", company: "حلول الأعمال", status: "مغلق" },
  ];

  return (
    <>
      <AdminNavbar />

      <div className="admin-page">
        <h1 className="title">إدارة الوظائف</h1>

        <table className="admin-table">
          <thead>
            <tr>
              <th>عنوان الوظيفة</th>
              <th>الشركة</th>
              <th>الحالة</th>
              <th>إجراءات</th>
            </tr>
          </thead>

          <tbody>
            {jobs.map((job, i) => (
              <tr key={i}>
                <td>{job.title}</td>
                <td>{job.company}</td>
                <td>{job.status}</td>
                <td>
                  <button className="edit-btn">اضافه</button>
                  <button className="delete-btn">حذف</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}
