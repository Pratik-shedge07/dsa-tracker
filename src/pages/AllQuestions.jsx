import React, { useState } from 'react';
import styled from 'styled-components';
import QuestionList from '../components/QuestionList';
import { FaSearch, FaSlidersH } from 'react-icons/fa';

// 🌗 Main Page
const Page = styled.div`
  padding: 2rem;
  background-color: ${({ dark }) => (dark ? '#121212' : '#f4f6f8')};
  color: ${({ dark }) => (dark ? '#e0e0e0' : '#2c3e50')};
  min-height: 100vh;
  transition: all 0.3s ease;
`;

// 📌 Heading
const Heading = styled.h2`
  font-size: 2.4rem;
  font-weight: 700;
  margin-bottom: 2rem;
  text-align: center;
`;

// 📦 Card Layout
const FilterCard = styled.div`
  background-color: ${({ dark }) => (dark ? '#1e1e1e' : '#ffffff')};
  border: 1px solid ${({ dark }) => (dark ? '#333' : '#ddd')};
  box-shadow: ${({ dark }) =>
    dark ? '0 2px 12px rgba(255, 255, 255, 0.04)' : '0 2px 12px rgba(0, 0, 0, 0.08)'};
  border-radius: 16px;
  padding: 2rem;
  margin: 0 auto 2rem auto;
  max-width: 1000px;
`;

// 🧩 Filter Heading
const FilterHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  font-size: 1.25rem;
  font-weight: 600;
  margin-bottom: 1.5rem;
  color: ${({ dark }) => (dark ? '#ccc' : '#333')};
`;

// 📱 Responsive Filter Grid
const FiltersGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
  gap: 1rem;
`;

// 🔍 Search Input Wrapper
const InputWrapper = styled.div`
  position: relative;
  width: 100%;
`;

const SearchIcon = styled(FaSearch)`
  position: absolute;
  top: 50%;
  left: 14px;
  transform: translateY(-50%);
  color: ${({ dark }) => (dark ? '#aaa' : '#555')};
  pointer-events: none;
  font-size: 0.9rem;
`;

// 🧾 Input Field
const Input = styled.input`
  width: 100%;
  padding: 0.6rem 0.75rem 0.6rem 2.2rem;
  font-size: 1rem;
  border-radius: 10px;
  border: 1px solid ${({ dark }) => (dark ? '#444' : '#ccc')};
  background-color: ${({ dark }) => (dark ? '#2b2b2b' : '#fff')};
  color: ${({ dark }) => (dark ? '#fff' : '#000')};
  transition: border 0.3s;

  &::placeholder {
    color: ${({ dark }) => (dark ? '#aaa' : '#888')};
  }

  &:focus {
    outline: none;
    border-color: ${({ dark }) => (dark ? '#00bcd4' : '#3498db')};
  }
`;

// 🔻 Select Dropdown
const Select = styled.select`
  width: 100%;
  padding: 0.6rem 1rem;
  font-size: 1rem;
  border-radius: 10px;
  border: 1px solid ${({ dark }) => (dark ? '#444' : '#ccc')};
  background-color: ${({ dark }) => (dark ? '#2b2b2b' : '#fff')};
  color: ${({ dark }) => (dark ? '#fff' : '#000')};
  transition: border 0.3s;

  &:focus {
    outline: none;
    border-color: ${({ dark }) => (dark ? '#00bcd4' : '#3498db')};
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
    let valA = a[sortKey];
    let valB = b[sortKey];

    if (sortKey === 'date') {
      valA = new Date(valA);
      valB = new Date(valB);
    } else {
      valA = valA.toString().toLowerCase();
      valB = valB.toString().toLowerCase();
    }

    return (valA < valB ? -1 : valA > valB ? 1 : 0) * (sortOrder === 'asc' ? 1 : -1);
  });

  const filtered = sorted.filter(
    (q) =>
      (filterDifficulty === 'All' || q.difficulty === filterDifficulty) &&
      (filterStatus === 'All' || q.status === filterStatus) &&
      q.topic.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <Page dark={darkMode}>
      <Heading>All Questions</Heading>

      <FilterCard dark={darkMode}>
        <FilterHeader dark={darkMode}>
          <FaSlidersH /> Filter & Sort
        </FilterHeader>

        <FiltersGrid>
          <InputWrapper dark={darkMode}>
            <SearchIcon dark={darkMode} />
            <Input
              dark={darkMode}
              type="text"
              placeholder="Search by topic"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </InputWrapper>

          <Select
            dark={darkMode}
            value={filterDifficulty}
            onChange={(e) => setFilterDifficulty(e.target.value)}
          >
            <option value="All">All Difficulties</option>
            <option value="Easy">Easy</option>
            <option value="Medium">Medium</option>
            <option value="Hard">Hard</option>
          </Select>

          <Select
            dark={darkMode}
            value={filterStatus}
            onChange={(e) => setFilterStatus(e.target.value)}
          >
            <option value="All">All Statuses</option>
            <option value="Pending">Pending</option>
            <option value="Solved">Solved</option>
          </Select>

          <Select
            dark={darkMode}
            value={sortKey}
            onChange={(e) => setSortKey(e.target.value)}
          >
            <option value="">Sort By</option>
            <option value="title">Title</option>
            <option value="difficulty">Difficulty</option>
            <option value="date">Date</option>
          </Select>

          <Select
            dark={darkMode}
            value={sortOrder}
            onChange={(e) => setSortOrder(e.target.value)}
          >
            <option value="asc">Ascending ⬆️</option>
            <option value="desc">Descending ⬇️</option>
          </Select>
        </FiltersGrid>
      </FilterCard>

      <QuestionList questions={filtered} onDelete={onDelete} />
    </Page>
  );
}

export default AllQuestions;
