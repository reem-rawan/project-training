import React, { useState } from 'react';

function Applicants({ language, isJobClosed, setIsJobClosed }) {
  // نصوص اللغة (عربي/إنجليزي)
  const t = {
    ar: {
      welcomeMsg: "أهلاً بكم في منصة التدريب والتوظيف",
      welcome: "إدارة المتقدمين للفرصة الحالية",
      jobStatus: "حالة الفرصة:",
      statusOpen: "مفتوحة لاستقبال الطلبات",
      statusClosed: "التقديم مغلق حالياً",
      btnClose: "إغلاق التقديم على هذه الفرصة",
      btnOpen: "إعادة فتح التقديم",
      tName: "اسم المتدرب/ـة", tStatus: "الحالة", tAction: "الإجراء",
      btnOk: "قبول", btnNo: "رفض",
      statusWait: "قيد المراجعة", statusOk: "مقبول ✅", statusNo: "مرفوض ❌",
    },
    en: {
      welcomeMsg: "Welcome to the Training and Recruitment Platform",
      welcome: "Managing Applicants for Current Opportunity",
      jobStatus: "Opportunity Status:",
      statusOpen: "Open for Applications",
      statusClosed: "Applications are currently closed",
      btnClose: "Close Applications for this Job",
      btnOpen: "Re-open Applications",
      tName: "Trainee Name", tStatus: "Status", tAction: "Action",
      btnOk: "Accept", btnNo: "Reject",
      statusWait: "Pending", statusOk: "Accepted ✅", statusNo: "Rejected ❌",
    }
  }[language || 'ar'];

  const [students, setStudents] = useState([
    { id: 1, nameAr: "لينا الحربي", nameEn: "Lina Al-Harbi", status: 'wait', gender: 'female' },
    { id: 2, nameAr: "هاجر الحربي", nameEn: "Hajar Al-Harbi", status: 'wait', gender: 'female' },
    { id: 3, nameAr: "ليان الشمري", nameEn: "Layan Al-Shammari", status: 'wait', gender: 'female' },
    { id: 4, nameAr: "فهد العتيبي", nameEn: "Fahad Al-Otaibi", status: 'wait', gender: 'male' },
    { id: 5, nameAr: "محمد الفهد", nameEn: "Mohammed Al-Fahad", status: 'wait', gender: 'male' },
  ]);

  const handleStatus = (id, newStatus) => {
    if (!isJobClosed) {
      setStudents(students.map(s => s.id === id ? { ...s, status: newStatus } : s));
    }
  };

  return (
    <div style={{ padding: '40px', direction: language === 'ar' ? 'rtl' : 'ltr' }}>
      
      {/* العبارة الترحيبية */}
      <div style={{ textAlign: 'center', marginBottom: '40px' }}>
        <h1 style={{ color: '#0a4b78', fontSize: '32px', fontWeight: '900' }}>
          {t.welcomeMsg}
        </h1>
      </div>

      {/* الحالة والعنوان */}
      <div style={headerContainer}>
        <h2 style={{ color: '#0a4b78', fontWeight: 'bold' }}>{t.welcome}</h2>
        <div style={statusBadge(isJobClosed)}>
          {t.jobStatus} {isJobClosed ? t.statusClosed : t.statusOpen}
        </div>
      </div>

      {/* زر إغلاق التقديم (تم تصغيره وتوسيطه) */}
      <div style={{ textAlign: 'center', marginBottom: '30px' }}>
        <button 
          onClick={() => setIsJobClosed(!isJobClosed)} 
          style={isJobClosed ? btnOpenStyle : btnCloseStyle}
        >
          {isJobClosed ? t.btnOpen : t.btnClose}
        </button>
      </div>

      {!isJobClosed ? (
        <div style={tableContainer}>
          <div style={tableHeader}>
            <div style={{ flex: 1.5 }}>{t.tName}</div>
            <div style={{ flex: 1, textAlign: 'center' }}>{t.tStatus}</div>
            <div style={{ flex: 2, textAlign: 'center' }}>{t.tAction}</div>
          </div>
          {students.map(s => (
            <div key={s.id} style={rowStyle}>
              <div style={{ flex: 1.5, display: 'flex', alignItems: 'center' }}>
                <img 
                  src={s.gender === 'female' ? "/src/png/girl.jpg" : "/src/png/boy.jpeg"} 
                  style={avatarStyle} 
                  alt="avatar" 
                />
                <span>{language === 'ar' ? s.nameAr : s.nameEn}</span>
              </div>
              <div style={{ flex: 1, textAlign: 'center' }}>
                {s.status === 'ok' ? t.statusOk : s.status === 'no' ? t.statusNo : t.statusWait}
              </div>
              <div style={{ flex: 2, display: 'flex', justifyContent: 'center', gap: '8px' }}>
                <button style={btnOkStyle} onClick={() => handleStatus(s.id, 'ok')}>{t.btnOk}</button>
                <button style={btnNoStyle} onClick={() => handleStatus(s.id, 'no')}>{t.btnNo}</button>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div style={closedMessageStyle}>
          <h3 style={{ color: '#856404' }}>⚠️ {t.statusClosed}</h3>
          <p>لم تعد هذه الفرصة تستقبل متقدمين جدد.</p>
        </div>
      )}
    </div>
  );
}

// --- التنسيقات (Styles) ---

const headerContainer = { 
  display: 'flex', 
  justifyContent: 'space-between', 
  alignItems: 'center', 
  marginBottom: '20px' 
};

const statusBadge = (closed) => ({
  padding: '8px 15px',
  borderRadius: '20px',
  backgroundColor: closed ? '#f8d7da' : '#d4edda',
  color: closed ? '#721c24' : '#155724',
  fontWeight: 'bold',
  fontSize: '14px',
  border: closed ? '1px solid #f5c6cb' : '1px solid #c3e6cb'
});

// ستايل الزر المصغر (الذي طلبته)
const commonBtnAction = {
  padding: '8px 20px', // تقليل الـ Padding
  borderRadius: '8px',
  cursor: 'pointer',
  fontWeight: 'bold',
  fontSize: '14px',
  border: 'none',
  width: 'fit-content', // يخليه على قد الكلمة
  margin: '0 auto',
  display: 'block',
  transition: '0.3s'
};

const btnCloseStyle = { ...commonBtnAction, backgroundColor: '#e67e22', color: '#fff' };
const btnOpenStyle = { ...commonBtnAction, backgroundColor: '#28a745', color: '#fff' };

const tableContainer = { backgroundColor: '#fff', borderRadius: '15px', overflow: 'hidden', boxShadow: '0 4px 15px rgba(0,0,0,0.05)' };
const tableHeader = { display: 'flex', backgroundColor: '#0a4b78', color: '#fff', padding: '15px 25px', fontWeight: 'bold' };
const rowStyle = { display: 'flex', padding: '12px 25px', borderBottom: '1px solid #eee', alignItems: 'center' };
const avatarStyle = { width: '35px', height: '35px', borderRadius: '50%', marginLeft: '10px', marginRight: '10px' };

const btnOkStyle = { backgroundColor: '#27ae60', color: '#fff', border: 'none', padding: '6px 12px', borderRadius: '5px', cursor: 'pointer' };
const btnNoStyle = { backgroundColor: '#e74c3c', color: '#fff', border: 'none', padding: '6px 12px', borderRadius: '5px', cursor: 'pointer' };

const closedMessageStyle = { padding: '40px', textAlign: 'center', backgroundColor: '#fff3cd', borderRadius: '15px', border: '1px solid #ffeeba' };

export default Applicants;