import React, { useState } from 'react';
import QuestionList from '../components/QuestionList';

function AllQuestions({ questions, onDelete }) {
  const [search, setSearch] = useState('');
  const [filterDifficulty, setFilterDifficulty] = useState('All');
  const [filterStatus, setFilterStatus] = useState('All');
  const [sortKey, setSortKey] = useState('');
  const [sortOrder, setSortOrder] = useState('asc');

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
    <div className="page">
      <h2>📘 All Questions</h2>

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

      <QuestionList questions={filteredQuestions} onDelete={onDelete} />
    </div>
  );
}

export default AllQuestions;
