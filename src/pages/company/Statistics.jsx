import React from 'react';

function Statistics({ language }) {
  const t = {
    ar: {
      title: "لوحة مؤشرات الإحصائيات",
      training: "قسم التدريب", // تم تعديلها هنا من "التدريب التعاوني" إلى "التدريب"
      hiring: "قسم التوظيف المباشر",
      major: "التخصص",
      orders: "الطلبات",
      applicants: "المتقدمين",
      accepted: "المقبولين",
      majors: ["علوم حاسب", "نظم معلومات", "هندسة برمجيات", "أمن سيبراني"]
    },
    en: {
      title: "Statistics Dashboard",
      training: "Training Section", // تم تعديلها أيضاً في النسخة الإنجليزية لتكون متناسقة
      hiring: "Direct Hiring Section",
      major: "Major",
      orders: "Orders",
      applicants: "Applicants",
      accepted: "Accepted",
      majors: ["Computer Science", "Information Systems", "Software Engineering", "Cyber Security"]
    }
  }[language];

  const trainingData = [
    { major: t.majors[0], orders: 5, apps: 42, acc: 10 },
    { major: t.majors[1], orders: 3, apps: 28, acc: 7 },
    { major: t.majors[2], orders: 4, apps: 35, acc: 12 },
  ];

  const hiringData = [
    { major: t.majors[0], orders: 2, apps: 90, acc: 4 },
    { major: t.majors[3], orders: 6, apps: 130, acc: 15 },
  ];

  const renderTable = (data) => (
    <div style={tableContainer}>
      <div style={tableHeader}>
        <div style={{ flex: 1.5 }}>{t.major}</div>
        <div style={{ flex: 1, textAlign: 'center' }}>{t.orders}</div>
        <div style={{ flex: 1, textAlign: 'center' }}>{t.applicants}</div>
        <div style={{ flex: 1, textAlign: 'center' }}>{t.accepted}</div>
      </div>
      {data.map((item, index) => (
        <div key={index} style={rowStyle}>
          <div style={{ flex: 1.5, fontWeight: 'bold' }}>{item.major}</div>
          <div style={{ flex: 1, textAlign: 'center' }}>{item.orders}</div>
          <div style={{ flex: 1, textAlign: 'center' }}>{item.apps}</div>
          <div style={{ flex: 1, textAlign: 'center', color: '#28a745', fontWeight: 'bold' }}>{item.acc}</div>
        </div>
      ))}
    </div>
  );

  return (
    <div style={{ padding: '40px' }}>
      <h2 style={{ textAlign: 'center', color: '#0a4b78', fontWeight: '900', marginBottom: '40px' }}>{t.title}</h2>
      <div style={{ marginBottom: '50px' }}>
        <h3 style={sectionTitle}>📘 {t.training}</h3>
        {renderTable(trainingData)}
      </div>
      <div>
        <h3 style={sectionTitle}>💼 {t.hiring}</h3>
        {renderTable(hiringData)}
      </div>
    </div>
  );
}

const sectionTitle = { color: '#0a4b78', borderBottom: '3px solid #0a4b78', display: 'inline-block', marginBottom: '20px', paddingBottom: '5px' };
const tableContainer = { backgroundColor: '#fff', borderRadius: '15px', overflow: 'hidden', boxShadow: '0 4px 15px rgba(0,0,0,0.05)' };
const tableHeader = { display: 'flex', backgroundColor: '#0a4b78', color: '#fff', padding: '15px 25px' };
const rowStyle = { display: 'flex', padding: '15px 25px', borderBottom: '1px solid #eee', alignItems: 'center' };

export default Statistics;