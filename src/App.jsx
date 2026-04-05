import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import MainLayout from './components/MainLayout';
import Dashboard from './pages/Dashboard';
import Analytics from './pages/Analytics';
import Diagnostics from './pages/Diagnostics';

import './App.css';
import './index.css';

function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={< MainLayout/>} />

          <Route path='/dashboard' element={< Dashboard/>} />
          <Route path='/analytics' element={< Analytics/>} />
          <Route path='/diagnostics' element={< Diagnostics/>} />

        </Routes>
      </Router>
    </>
  )
}

export default App
