import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

import Navbar from './components/Navbar';
import Footer from './components/Footer';

import AboutPage from './pages/AboutPage';
import AddQuestion from './pages/AddQuestion';
import AllQuestions from './pages/AllQuestions';
import Dashboard from './pages/Dashboard';
import ExportPage from './pages/ExportPage';
import LoginPage from './pages/LoginPage';

function App() {
  const [questions, setQuestions] = useState(() => {
    const stored = localStorage.getItem('dsa-questions');
    return stored ? JSON.parse(stored) : [];
  });

  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem('dark-mode') === 'true';
  });

  const [isLoggedIn, setIsLoggedIn] = useState(() => {
    return localStorage.getItem('isLoggedIn') === 'true';
  });

  useEffect(() => {
    localStorage.setItem('dsa-questions', JSON.stringify(questions));
  }, [questions]);

  useEffect(() => {
    localStorage.setItem('dark-mode', darkMode);
    document.body.style.backgroundColor = darkMode ? '#121212' : '#f4f6f8';
    document.body.style.color = darkMode ? '#e0e0e0' : '#2c3e50';
  }, [darkMode]);

  const handleAdd = (newQuestion) => {
    setQuestions((prev) => [newQuestion, ...prev]);
  };

  const handleDelete = (indexToDelete) => {
    setQuestions((prev) => prev.filter((_, index) => index !== indexToDelete));
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
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          minHeight: '100vh',
          backgroundColor: darkMode ? '#121212' : '#f4f6f8',
          color: darkMode ? '#e0e0e0' : '#2c3e50',
          transition: 'all 0.3s ease',
        }}
      >
        <Navbar
          darkMode={darkMode}
          toggleDarkMode={() => setDarkMode(!darkMode)}
          isLoggedIn={isLoggedIn}
          onLogout={handleLogout}
        />

        <main style={{ flex: 1 }}>
          <Routes>
            <Route path="/login" element={<LoginPage onLogin={handleLogin} />} />
            <Route path="/about" element={<AboutPage />} />

            {isLoggedIn ? (
              <>
                <Route
                  path="/"
                  element={<Dashboard questions={questions} />}
                />
                <Route path="/add" element={<AddQuestion onAdd={handleAdd} />} />
                <Route
                  path="/questions"
                  element={<AllQuestions questions={questions} onDelete={handleDelete} />}
                />
                <Route path="/export" element={<ExportPage questions={questions} />} />
                <Route path="*" element={<Navigate to="/" replace />} />
              </>
            ) : (
              <Route path="*" element={<Navigate to="/login" replace />} />
            )}
          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
