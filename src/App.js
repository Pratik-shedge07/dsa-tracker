import React, { useState, useEffect } from 'react';
import TrackerForm from './components/TrackerForm';
import QuestionList from './components/QuestionList';
import './App.css';

function App() {
  const [questions, setQuestions] = useState([]);

  // Load from localStorage
  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem('dsa-questions')) || [];
    setQuestions(stored);
  }, []);

  // Save to localStorage
  useEffect(() => {
    localStorage.setItem('dsa-questions', JSON.stringify(questions));
  }, [questions]);

  const handleAdd = (newQuestion) => {
    setQuestions([newQuestion, ...questions]);
  };

  return (
    <div className="App">
      <h1 className="heading">🧠 DSA Master Tracker</h1>
      <TrackerForm onAdd={handleAdd} />
      <QuestionList questions={questions} />
    </div>
  );
}

export default App;
