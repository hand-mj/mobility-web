// 경로
import React from 'react';
import { Route, Routes } from 'react-router-dom';

import HomePage from './pages/home';
import LoginPage from './pages/login';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
      </Routes>
    </div>
  );
}

export default App;