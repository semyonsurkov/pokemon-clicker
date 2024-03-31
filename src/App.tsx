import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import './App.css';
import StartPage from './components/StartPage/StartPage';
import MainPage from './components/MainPage/MainPage';

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<StartPage />} />
        <Route path="/main" element={<MainPage />} />
      </Routes>
    </Router>
  );
};

export default App;
