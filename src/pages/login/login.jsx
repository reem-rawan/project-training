import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import "./login.css";


export default function Login() {
  const navigate = useNavigate();
  const [userType, setUserType] = useState("student");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault(); // منع الصفحة من التحديث
    setError("");
    setLoading(true);

    try {
      // إرسال البيانات للباك اند باستخدام الرابط الذي زودتك به أريام
const response = await axios.post("https://project-training-production.up.railway.app/api/login", {
  email: email,
  password: password,
  role: userType,
});// إرسال نوع المستخدم إذا كان الباك اند يتطلب

      // في حال نجاح تسجيل الدخول (استلام Token مثلاً)
      console.log("Response:", response.data);
      
      // حفظ التوكن (اختياري حسب نظام أريام)
      // localStorage.setItem("token", response.data.token);

      // التوجيه بناءً على نوع المستخدم المختار
      if (userType === "student") {
        navigate("/student/StudentDashboard");
      } else if (userType === "company") {
        navigate("/company/applicants");
      } else if (userType === "admin") {
        navigate("/admin-dashboard");
      }

    } catch (err) {
      console.error("Login Error:", err);
      setError("فشل تسجيل الدخول، تأكد من البريد الإلكتروني أو كلمة المرور");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="login-container">
      <h2>تسجيل الدخول</h2>

      <form onSubmit={handleLogin}>
        {error && <p style={{ color: "red", fontSize: "14px" }}>{error}</p>}

        <input 
          type="email" 
          placeholder="البريد الإلكتروني" 
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        
        <input 
          type="password" 
          placeholder="كلمة المرور" 
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <select value={userType} onChange={(e) => setUserType(e.target.value)}>
          <option value="student">طالب</option>
          <option value="company">شركة</option>
          <option value="admin">أدمن</option>
        </select>

        <button 
          type="submit" 
          className="login-btn" 
          disabled={loading}
        >
          {loading ? "جاري التحقق..." : "تسجيل الدخول"}
        </button>
      </form>

      <p 
        className="forgot-pass" 
        onClick={() => navigate("/reset-password")}
        style={{ cursor: "pointer" }}
      >
        نسيت كلمة المرور!
      </p>
    </div>
  );
}