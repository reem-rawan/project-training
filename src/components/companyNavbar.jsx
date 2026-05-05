import React from 'react';
import { NavLink } from 'react-router-dom';

function Navbar({ language, toggleLanguage }) {
  const t = {
    ar: { home: "المتقدمين", add: "إضافة وظيفة", stats: "الإحصائيات", title: "منصة التدريب والتوظيف", langBtn: "English" },
    en: { home: "Applicants", add: "Add Job", stats: "Statistics", title: "Training Platform", langBtn: "عربي" }
  }[language || 'ar'];

  const getLinkStyle = ({ isActive }) => (isActive ? activeLink : linkStyle);

  return (
    <nav style={navbarStyle}>
      <div style={navLinks}>
        <NavLink to="/company/applicants" style={getLinkStyle}>{t.home}</NavLink>
        <NavLink to="/company/add-job" style={getLinkStyle}>{t.add}</NavLink>
        <NavLink to="/company/statistics" style={getLinkStyle}>{t.stats}</NavLink>
      </div>

      <div style={logoSection}>
        {/* زر تغيير اللغة بلون متناسق مع الخلفية الجديدة */}
        <button onClick={toggleLanguage} style={langBtnStyle}>{t.langBtn}</button>
        <span style={logoText}>{t.title}</span>
        <img src="/src/png/logo90.jpg" alt="Logo" style={logoImage} />
      </div>
    </nav>
  );
}

// --- الستايلات المحدثة باللون الجديد #0a4b78 ---

const navbarStyle = { 
  display: 'flex', 
  justifyContent: 'space-between', 
  alignItems: 'center', 
  padding: '12px 50px', 
  backgroundColor: '#0a4b78', // اللون المطلوب
  color: 'white',
  boxShadow: '0 2px 10px rgba(0,0,0,0.1)' // إضافة ظل خفيف للتميز
};

const navLinks = { display: 'flex', gap: '30px' };

const linkStyle = { 
  textDecoration: 'none', 
  color: 'white', 
  fontSize: '16px', 
  fontWeight: 'bold', 
  cursor: 'pointer',
  paddingBottom: '5px',
  opacity: '0.9',
  transition: '0.3s'
};

// ستايل الرابط النشط
const activeLink = { 
  ...linkStyle, 
  opacity: '1',
  borderBottom: '2px solid white' 
};

const logoSection = { display: 'flex', alignItems: 'center', gap: '15px' };

const logoText = { 
  fontSize: '18px', 
  fontWeight: '900',
  color: 'white'
};

const logoImage = { width: '70px', height: '70px', objectFit: 'contain', borderRadius: '7px' };

const langBtnStyle = { 
  backgroundColor: '#fff', 
  color: '#0a4b78', // جعل لون الخط نفس لون النافبار للتناسق
  border: 'none', 
  padding: '6px 15px', 
  borderRadius: '5px', 
  cursor: 'pointer', 
  fontWeight: 'bold',
  transition: '0.3s'
};

export default Navbar;