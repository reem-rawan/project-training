import Navbar from "../../components/Navbar";
import "./StudentProfile.css"; // استيراد الملف الجديد هنا

export default function StudentProfile() {
  return (
    <>
      <Navbar userType="student" />

      <div className="student-profile-wrapper">
        <div className="profile-card">
          
          <div className="card-header">
            <h1 className="main-title">البيانات الشخصية</h1>
            <p className="description">يمكنك تعديل بياناتك الشخصية وحفظ التغييرات.</p>
          </div>

          <div className="form-grid">
            
            <div className="form-group">
              <label>الاسم الكامل</label>
              <input type="text" placeholder="أدخل اسمك الكامل" />
            </div>

            <div className="form-group">
              <label>التخصص</label>
              <input type="text" placeholder="أدخل تخصصك الجامعي" />
            </div>

            <div className="form-group">
              <label>البريد الإلكتروني</label>
              <input type="email" placeholder="example@email.com" />
            </div>

            <div className="form-group">
              <label>رقم الجوال</label>
              <input type="text" placeholder="05xxxxxxxx" />
            </div>

            <div className="form-group file-upload-group">
              <label>السيرة الذاتية (PDF)</label>
              <input 
                type="file" 
                accept="application/pdf" 
                className="file-input"
              />
            </div>

          </div>

          <button className="save-btn" onClick={() => alert("تم حفظ البيانات بنجاح!")}>
            حفظ التغييرات
          </button>

        </div>
      </div>
    </>
  );
}