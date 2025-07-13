import React, { useState, useEffect } from 'react';
import ProgressChart from './components/ProgressChart';

import TrackerForm from './components/TrackerForm';
import QuestionList from './components/QuestionList';
import './App.css';

function App() {
  const [questions, setQuestions] = useState([]);
  const [search, setSearch] = useState('');
  const [filterDifficulty, setFilterDifficulty] = useState('All');
  const [filterStatus, setFilterStatus] = useState('All');

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

  const handleDelete = (indexToDelete) => {
    const updated = questions.filter((_, index) => index !== indexToDelete);
    setQuestions(updated);
  };

  const filteredQuestions = questions.filter((q) => {
    return (
      (filterDifficulty === 'All' || q.difficulty === filterDifficulty) &&
      (filterStatus === 'All' || q.status === filterStatus) &&
      q.topic.toLowerCase().includes(search.toLowerCase())
    );
  });

  return (
    <div className="App">
      <h1 className="heading">🧠 DSA Master Tracker</h1>

      <TrackerForm onAdd={handleAdd} />

      <div className="filters">
        <input
          type="text"
          placeholder="Search by topic"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <select value={filterDifficulty} onChange={(e) => setFilterDifficulty(e.target.value)}>
          <option value="All">All Difficulties</option>
          <option value="Easy">Easy</option>
          <option value="Medium">Medium</option>
          <option value="Hard">Hard</option>
        </select>
        <select value={filterStatus} onChange={(e) => setFilterStatus(e.target.value)}>
          <option value="All">All Statuses</option>
          <option value="Pending">Pending</option>
          <option value="Solved">Solved</option>
        </select>
      </div>

      <QuestionList questions={filteredQuestions} onDelete={handleDelete} />
      <ProgressChart questions={questions} />
    </div>
  );
}

export default App;
