import React, { useState } from 'react';
import styled from 'styled-components';
import { FaSearch, FaSlidersH } from 'react-icons/fa';
import QuestionList from '../components/QuestionList';

const Page = styled.div`
  padding: 2rem;
  min-height: 100vh;
  background: linear-gradient(to bottom right, #0f2027, #203a43, #2c5364);
  color: #e0e0e0;
  transition: all 0.3s ease;
`;

const Heading = styled.h2`
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 2rem;
  text-align: center;
  color: #ffffff;
`;

const FilterCard = styled.div`
  background: rgba(32, 58, 67, 0.4);
  backdrop-filter: blur(12px);
  border-radius: 20px;
  padding: 2rem;
  margin: 0 auto 2rem auto;
  max-width: 1000px;
  border: 1px solid rgba(255, 255, 255, 0.08);
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.3);
`;

const FilterHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  font-size: 1.25rem;
  font-weight: 600;
  margin-bottom: 1.5rem;
  color: #ffffff;
`;

const FiltersGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
  gap: 1.2rem;
`;

const InputWrapper = styled.div`
  position: relative;
  width: 100%;
`;

const SearchIcon = styled(FaSearch)`
  position: absolute;
  top: 50%;
  left: 14px;
  transform: translateY(-50%);
  color: #aaa;
  pointer-events: none;
  font-size: 0.9rem;
`;

const Input = styled.input`
  width: 100%;
  padding: 0.6rem 0.75rem 0.6rem 2.2rem;
  font-size: 1rem;
  border-radius: 12px;
  border: none;
  background-color: rgba(255, 255, 255, 0.08);
  color: #fff;

  &::placeholder {
    color: #bbb;
  }

  &:focus {
    outline: none;
    border: 1px solid #00bcd4;
    background-color: rgba(255, 255, 255, 0.12);
  }
`;

const Select = styled.select`
  width: 100%;
  padding: 0.6rem 1rem;
  font-size: 1rem;
  border-radius: 12px;
  border: none;
  background-color: rgba(255, 255, 255, 0.08);
  color: #fff;

  &:focus {
    outline: none;
    border: 1px solid #00bcd4;
    background-color: rgba(255, 255, 255, 0.12);
  }
`;

function AllQuestions({ questions, onDelete }) {
  const [search, setSearch] = useState('');
  const [filterDifficulty, setFilterDifficulty] = useState('All');
  const [filterStatus, setFilterStatus] = useState('All');
  const [sortKey, setSortKey] = useState('');
  const [sortOrder, setSortOrder] = useState('asc');

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
    <Page>
      <Heading>All Questions</Heading>

      <FilterCard>
        <FilterHeader>
          <FaSlidersH /> Filter & Sort
        </FilterHeader>

        <FiltersGrid>
          <InputWrapper>
            <SearchIcon />
            <Input
              type="text"
              placeholder="Search by topic"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </InputWrapper>

          <Select value={filterDifficulty} onChange={(e) => setFilterDifficulty(e.target.value)}>
            <option value="All">All Difficulties</option>
            <option value="Easy">Easy</option>
            <option value="Medium">Medium</option>
            <option value="Hard">Hard</option>
          </Select>

          <Select value={filterStatus} onChange={(e) => setFilterStatus(e.target.value)}>
            <option value="All">All Status</option>
            <option value="Not Started">Not Started</option>
            <option value="In Progress">In Progress</option>
            <option value="Completed">Completed</option>
          </Select>

          <Select value={sortKey} onChange={(e) => setSortKey(e.target.value)}>
            <option value="">Sort By</option>
            <option value="title">Title</option>
            <option value="difficulty">Difficulty</option>
            <option value="date">Date</option>
          </Select>

          <Select
            value={sortOrder}
            onChange={(e) => setSortOrder(e.target.value)}
            disabled={!sortKey}
          >
            <option value="asc">Ascending</option>
            <option value="desc">Descending</option>
          </Select>
        </FiltersGrid>
      </FilterCard>

      <QuestionList questions={filtered} onDelete={onDelete} darkMode={true} />
    </Page>
  );
}

export default AllQuestions;
