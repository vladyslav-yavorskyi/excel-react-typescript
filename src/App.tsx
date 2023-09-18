import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Dashboard from './pages/dashboard/Dashboard';
import Excel from './pages/Excel';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/excel/:id" element={<Excel />} />
      </Routes>
    </>
  );
}

export default App;
