import React from "react";
import "./ResetPassword.css";

const ResetPassword = () => {
  return (
    <div className="reset-container">
      <h2>إعادة تعيين كلمة المرور</h2>

      <input type="email" placeholder="أدخل بريدك الإلكتروني" />
      <button>إرسال رابط إعادة التعيين</button>
    </div>
  );
};

export default ResetPassword;
