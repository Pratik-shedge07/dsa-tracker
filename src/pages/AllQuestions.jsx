import React, { useState } from 'react';
import styled from 'styled-components';
import QuestionList from '../components/QuestionList';

const Page = styled.div`
  padding: 2rem;
  background-color: ${({ dark }) => (dark ? '#121212' : '#f4f6f8')};
  color: ${({ dark }) => (dark ? '#e0e0e0' : '#2c3e50')};
  min-height: 100vh;
  transition: all 0.3s ease;
`;

const Heading = styled.h2`
  font-size: 2rem;
  font-weight: bold;
  margin-bottom: 1.5rem;
  text-align: center;
`;

const Filters = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  justify-content: center;
  margin-bottom: 2rem;

  input, select {
    padding: 0.5rem 1rem;
    font-size: 1rem;
    border-radius: 6px;
    border: 1px solid #ccc;
    background-color: ${({ dark }) => (dark ? '#1e1e1e' : '#fff')};
    color: ${({ dark }) => (dark ? '#f0f0f0' : '#000')};
  }
`;

function AllQuestions({ questions, onDelete }) {
  const [search, setSearch] = useState('');
  const [filterDifficulty, setFilterDifficulty] = useState('All');
  const [filterStatus, setFilterStatus] = useState('All');
  const [sortKey, setSortKey] = useState('');
  const [sortOrder, setSortOrder] = useState('asc');

  const darkMode = localStorage.getItem('dark-mode') === 'true';

  const sorted = [...questions].sort((a, b) => {
    if (!sortKey) return 0;
    let valA = a[sortKey], valB = b[sortKey];
    if (sortKey === 'date') {
      valA = new Date(valA);
      valB = new Date(valB);
    } else {
      valA = valA.toString().toLowerCase();
      valB = valB.toString().toLowerCase();
    }
    return (valA < valB ? -1 : valA > valB ? 1 : 0) * (sortOrder === 'asc' ? 1 : -1);
  });

  const filtered = sorted.filter(q =>
    (filterDifficulty === 'All' || q.difficulty === filterDifficulty) &&
    (filterStatus === 'All' || q.status === filterStatus) &&
    q.topic.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <Page dark={darkMode}>
      <Heading>📚 All Questions</Heading>
      <Filters dark={darkMode}>
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
      </Filters>

      <QuestionList questions={filtered} onDelete={onDelete} />
    </Page>
  );
}

export default AllQuestions;
