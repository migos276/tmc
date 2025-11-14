import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Splash from './pages/Splash';
import Dashboard from './pages/Dashboard';
import Market from './pages/Market';
import Jobs from './pages/Jobs';
import Content from './pages/Content';
import Horoscope from './pages/Horoscope';
import Groups from './pages/Groups';
import AdminPanel from './pages/AdminPanel';

const App: React.FC = () => {
  useEffect(() => {
    if ('serviceWorker' in navigator) {
      navigator.serviceWorker.register('/service-worker.js').catch(err => {
        console.log('SW registration failed: ', err);
      });
    }
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Splash />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/market" element={<Market />} />
        <Route path="/jobs" element={<Jobs />} />
        <Route path="/content" element={<Content />} />
        <Route path="/horoscope" element={<Horoscope />} />
        <Route path="/groups" element={<Groups />} />
        <Route path="/admin" element={<AdminPanel />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
