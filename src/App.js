// 📄 App.js (with routing only, styling handled in sub-components)
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Dashboard from './pages/Dashboard';
import AddQuestion from './pages/AddQuestion';
import AllQuestions from './pages/AllQuestions';
import ExportPage from './pages/ExportPage';

function App() {
  const [questions, setQuestions] = useState([]);
  const [darkMode, setDarkMode] = useState(localStorage.getItem('dark-mode') === 'true');

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

  return (
    <Router>
      <Navbar darkMode={darkMode} toggleDarkMode={() => setDarkMode(!darkMode)} />
      <Routes>
        <Route path="/" element={<Dashboard questions={questions} darkMode={darkMode} />} />
        <Route path="/add" element={<AddQuestion onAdd={handleAdd} />} />
        <Route path="/questions" element={<AllQuestions questions={questions} onDelete={handleDelete} />} />
        <Route path="/export" element={<ExportPage questions={questions} />} />
      </Routes>
    </Router>
  );
}

export default App;
