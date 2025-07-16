// 📁 App.js
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Dashboard from './pages/Dashboard';
import AddQuestion from './pages/AddQuestion';
import AllQuestions from './pages/AllQuestions';
import ExportPage from './pages/ExportPage';
import LoginPage from './pages/LoginPage';
import AboutPage from './pages/AboutPage';

function App() {
  const [questions, setQuestions] = useState([]);
  const [darkMode, setDarkMode] = useState(localStorage.getItem('dark-mode') === 'true');
  const [isLoggedIn, setIsLoggedIn] = useState(localStorage.getItem('isLoggedIn') === 'true');

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem('dsa-questions')) || [];
    setQuestions(stored);
  }, []);

  useEffect(() => {
    localStorage.setItem('dsa-questions', JSON.stringify(questions));
  }, [questions]);

  useEffect(() => {
    localStorage.setItem('dark-mode', darkMode);
    document.body.style.backgroundColor = darkMode ? '#121212' : '#f4f6f8';
    document.body.style.color = darkMode ? '#e0e0e0' : '#2c3e50';
  }, [darkMode]);

  const handleAdd = (newQuestion) => {
    setQuestions([newQuestion, ...questions]);
  };

  const handleDelete = (indexToDelete) => {
    const updated = questions.filter((_, index) => index !== indexToDelete);
    setQuestions(updated);
  };

  const handleLogin = () => {
    localStorage.setItem('isLoggedIn', 'true');
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    localStorage.removeItem('isLoggedIn');
    setIsLoggedIn(false);
  };

  return (
    <Router>
      <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
        <Navbar
          darkMode={darkMode}
          toggleDarkMode={() => setDarkMode(!darkMode)}
          isLoggedIn={isLoggedIn}
          onLogout={handleLogout}
        />

        <div style={{ flex: 1 }}>
          <Routes>
            <Route path="/login" element={<LoginPage onLogin={handleLogin} />} />
            <Route path="/about" element={<AboutPage />} />

            {isLoggedIn ? (
              <>
                <Route path="/" element={<Dashboard questions={questions} darkMode={darkMode} />} />
                <Route path="/add" element={<AddQuestion onAdd={handleAdd} />} />
                <Route path="/questions" element={<AllQuestions questions={questions} onDelete={handleDelete} />} />
                <Route path="/export" element={<ExportPage questions={questions} />} />
              </>
            ) : (
              <Route path="*" element={<Navigate to="/login" />} />
            )}
          </Routes>
        </div>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
