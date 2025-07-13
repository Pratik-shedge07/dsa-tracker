import React, { useState, useEffect } from 'react';
import ProgressChart from './components/ProgressChart';
import { exportToCSV } from './utils/exportCSV';
import TrackerForm from './components/TrackerForm';
import QuestionList from './components/QuestionList';
import './App.css';

function App() {
  const [questions, setQuestions] = useState([]);
  const [search, setSearch] = useState('');
  const [filterDifficulty, setFilterDifficulty] = useState('All');
  const [filterStatus, setFilterStatus] = useState('All');
  const [sortKey, setSortKey] = useState('');
  const [sortOrder, setSortOrder] = useState('asc');
  const [darkMode, setDarkMode] = useState(
    localStorage.getItem('dark-mode') === 'true'
  );

  // 🔥 Daily Streak State
  const [streak, setStreak] = useState(0);
  const [lastSolvedDate, setLastSolvedDate] = useState('');

  // Load data on mount
  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem('dsa-questions')) || [];
    setQuestions(stored);

    const savedStreak = parseInt(localStorage.getItem('codingStreak')) || 0;
    const savedDate = localStorage.getItem('lastSolvedDate') || '';
    const today = new Date().toDateString();

    if (savedDate) {
      const yesterday = new Date();
      yesterday.setDate(yesterday.getDate() - 1);

      if (new Date(savedDate).toDateString() === today) {
        setStreak(savedStreak);
        setLastSolvedDate(savedDate);
      } else if (new Date(savedDate).toDateString() === yesterday.toDateString()) {
        setStreak(savedStreak);
        setLastSolvedDate(savedDate);
      } else {
        setStreak(0);
        localStorage.setItem('codingStreak', '0');
        localStorage.setItem('lastSolvedDate', '');
      }
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('dsa-questions', JSON.stringify(questions));
  }, [questions]);

  useEffect(() => {
    localStorage.setItem('dark-mode', darkMode);
    document.body.className = darkMode ? 'dark' : '';
  }, [darkMode]);

  const handleAdd = (newQuestion) => {
    setQuestions([newQuestion, ...questions]);
  };

  const handleDelete = (indexToDelete) => {
    const updated = questions.filter((_, index) => index !== indexToDelete);
    setQuestions(updated);
  };

  const markSolvedToday = () => {
    const today = new Date().toDateString();
    const lastDate = localStorage.getItem('lastSolvedDate');

    if (lastDate !== today) {
      const updatedStreak = streak + 1;
      setStreak(updatedStreak);
      setLastSolvedDate(today);
      localStorage.setItem('codingStreak', updatedStreak.toString());
      localStorage.setItem('lastSolvedDate', today);
    } else {
      alert('✅ You already marked today as solved!');
    }
  };

  const sortedQuestions = [...questions].sort((a, b) => {
    if (!sortKey) return 0;

    let valA = a[sortKey];
    let valB = b[sortKey];

    if (sortKey === 'date') {
      valA = new Date(valA);
      valB = new Date(valB);
    } else {
      valA = valA.toString().toLowerCase();
      valB = valB.toString().toLowerCase();
    }

    if (valA < valB) return sortOrder === 'asc' ? -1 : 1;
    if (valA > valB) return sortOrder === 'asc' ? 1 : -1;
    return 0;
  });

  const filteredQuestions = sortedQuestions.filter((q) => {
    return (
      (filterDifficulty === 'All' || q.difficulty === filterDifficulty) &&
      (filterStatus === 'All' || q.status === filterStatus) &&
      q.topic.toLowerCase().includes(search.toLowerCase())
    );
  });

  return (
    <div className="App">
      <h1 className="heading">🧠 DSA Master Tracker</h1>

      <button className="utility" onClick={() => setDarkMode(!darkMode)}>
  {darkMode ? '☀️ Light Mode' : '🌙 Dark Mode'}
</button>


      {/* 🔥 Daily Coding Streak Section */}
      <div className="streak-box">
        <h2 className="streak-title">🔥 Daily Coding Streak</h2>
        <p className="streak-count">
          You’ve coded for <span className="streak-number">{streak}</span> day(s) in a row!
        </p>
        <button className="primary" onClick={markSolvedToday}>
  ✅ Mark as Solved Today
</button>

        {lastSolvedDate !== new Date().toDateString() && (
          <p className="streak-warning">
            ⚠️ You haven’t marked a problem as solved today!
          </p>
        )}
      </div>

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
        <select value={sortKey} onChange={(e) => setSortKey(e.target.value)}>
          <option value="">Sort By</option>
          <option value="title">Title</option>
          <option value="difficulty">Difficulty</option>
          <option value="date">Date</option>
        </select>
        <select value={sortOrder} onChange={(e) => setSortOrder(e.target.value)}>
          <option value="asc">Asc</option>
          <option value="desc">Desc</option>
        </select>
      </div>

      <button className="utility" onClick={() => exportToCSV(filteredQuestions)}>
  📤 Export CSV
</button>


      <QuestionList questions={filteredQuestions} onDelete={handleDelete} />
      <ProgressChart questions={questions} />
    </div>
  );
}

export default App;
