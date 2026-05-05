import React, { useState } from "react"; // أضفنا useState هنا
import "./stayles/main.css"; 
import AppRouter from "./router/AppRouter";

function App() {
  // تعريف الحالات الأساسية للتحكم في اللغة وحالة التقديم
  const [language, setLanguage] = useState('ar'); 
  const [isJobClosed, setIsJobClosed] = useState(false);

  return (
    <div className="App">
      {/* تمرير القيم للـ AppRouter لكي تعمل الصفحات الجديدة بدون شاشة بيضاء */}
      <AppRouter 
        language={language} 
        isJobClosed={isJobClosed} 
        setIsJobClosed={setIsJobClosed} 
      />
    </div>
  );
}

export default App;
