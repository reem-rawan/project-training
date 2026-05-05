import React from 'react';

function AddJob({ language }) {
  const t = {
    ar: { title: "إضافة فرصة تدريبية وتوظيفية جديدة", l1: "عنوان الفرصة", l2: "التخصص المطلوب", l3: "وصف المهام", btn: "نشر الفرصة الآن" },
    en: { title: "Add New Training Opportunity", l1: "Job Title", l2: "Major Required", l3: "Description", btn: "Post Now" }
  }[language];

  return (
    <div style={{ display: 'flex', justifyContent: 'center', padding: '50px' }}>
      <div style={formCard}>
        <h2 style={{ textAlign: 'center', color: '#0a4b78', fontWeight: '900', marginBottom: '30px' }}>{t.title}</h2>
        <div style={field}><label style={labelStyle}>{t.l1}</label><input style={inputStyle} /></div>
        <div style={field}><label style={labelStyle}>{t.l2}</label><input style={inputStyle} /></div>
        <div style={field}><label style={labelStyle}>{t.l3}</label><textarea style={{...inputStyle, height: '100px'}} /></div>
        <button style={btnSubmit}>{t.btn}</button>
      </div>
    </div>
  );
}

const formCard = { width: '100%', maxWidth: '600px', backgroundColor: '#fff', padding: '40px', borderRadius: '20px', borderTop: '10px solid #0a4b78', boxShadow: '0 15px 40px rgba(0,0,0,0.1)' };
const field = { marginBottom: '15px' };
const labelStyle = { display: 'block', fontWeight: 'bold', marginBottom: '5px', color: '#0a4b78' };
const inputStyle = { width: '100%', padding: '10px', borderRadius: '8px', border: '1px solid #ccc' };
const btnSubmit = { width: '100%', padding: '15px', backgroundColor: '#0a4b78', color: '#fff', border: 'none', borderRadius: '10px', fontSize: '18px', fontWeight: 'bold', cursor: 'pointer' };

export default AddJob;