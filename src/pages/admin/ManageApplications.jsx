import AdminNavbar from "../../components/AdminNavbar";

export default function ManageApplications() {
  const applications = [
    { student: "زينب", major: "تقنية المعلومات", status: "تحت المراجعة" },
    { student: "أحمد", major: "إدارة الأعمال", status: "مقبول" },
  ];

  return (
    <>
      <AdminNavbar />

      <div className="admin-page">
        <h1 className="title">إدارة الطلبات</h1>

        <table className="admin-table">
          <thead>
            <tr>
              <th>اسم الطالب</th>
              <th>التخصص</th>
              <th>الحالة</th>
              <th>إجراءات</th>
            </tr>
          </thead>

          <tbody>
            {applications.map((app, i) => (
              <tr key={i}>
                <td>{app.student}</td>
                <td>{app.major}</td>
                <td>{app.status}</td>
                <td>
                  <button className="edit-btn">تغيير الحالة</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}
