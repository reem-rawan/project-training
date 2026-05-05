import AdminNavbar from "../../components/AdminNavbar";

export default function ManageCompanies() {
  const companies = [
    { name: "شركة تقنية المستقبل", email: "info@future.com" },
    { name: "حلول الأعمال الذكية", email: "smart@biz.com" },
  ];

  return (
    <>
      <AdminNavbar />

      <div className="admin-page">
        <h1 className="title">إدارة الشركات</h1>

        <table className="admin-table">
          <thead>
            <tr>
              <th>اسم الشركة</th>
              <th>البريد</th>
              <th>إجراءات</th>
            </tr>
          </thead>

          <tbody>
            {companies.map((c, i) => (
              <tr key={i}>
                <td>{c.name}</td>
                <td>{c.email}</td>
                <td>
                  <button className="edit-btn">تعديل</button>
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
