import { useState } from "react";
import AdminNavbar from "../../components/AdminNavbar";
import "./ManageUsers.css";

export default function ManageUsers() {
  const [users, setUsers] = useState([
    { name: "زينب", type: "طالب", active: true },
    { name: "شركة التقنية", type: "شركة", active: false },
  ]);

  // تغيير الحالة
  const toggleStatus = (index) => {
    const updated = [...users];
    updated[index].active = !updated[index].active;
    setUsers(updated);
  };

  // حذف مستخدم
  const deleteUser = (index) => {
    const updated = users.filter((_, i) => i !== index);
    setUsers(updated);
  };

  // إضافة مستخدم جديد (مثال بسيط)
  const addUser = () => {
    const newUser = {
      name: "مستخدم جديد",
      type: "طالب",
      active: false,
    };
    setUsers([...users, newUser]);
  };

  return (
    <>
      <AdminNavbar />

      <div className="admin-page">
        <h1 className="title">إدارة المستخدمين</h1>

        {/* زر إضافة */}
        <button className="add-btn" onClick={addUser}>
          + إضافة مستخدم
        </button>

        <table className="admin-table">
          <thead>
            <tr>
              <th>الاسم</th>
              <th>النوع</th>
              <th>الحالة</th>
              <th>إجراءات</th>
            </tr>
          </thead>

          <tbody>
            {users.map((u, i) => (
              <tr key={i}>
                <td>{u.name}</td>
                <td>{u.type}</td>

                <td>
                  <span className={u.active ? "active-status" : "inactive-status"}>
                    {u.active ? "مفعل" : "غير مفعل"}
                  </span>
                </td>
                 
                <td>
                  <button className="edit-btn">تعديل</button>
            
                  <button
                    className="delete-btn"
                    onClick={() => deleteUser(i)}
                  >
                    حذف
                  </button>

                  <button
                    className="toggle-btn"
                    onClick={() => toggleStatus(i)}
                  >
                    {u.active ? "إيقاف" : "تفعيل"}
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}


