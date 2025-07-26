import React, { useMemo, useState } from 'react';
import styled from 'styled-components';
import { MdLeaderboard } from 'react-icons/md';
import ProgressChart from '../components/ProgressChart';

const PageWrapper = styled.div`
  min-height: 100vh;
  padding: 3rem 1.5rem;
  background: linear-gradient(to bottom, #0f2027, #203a43, #2c5364);
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #e0e0e0;

  @media (max-width: 768px) {
    padding: 2rem 1rem;
  }
`;

const Heading = styled.h2`
  font-size: 2.2rem;
  font-weight: bold;
  margin-bottom: 2rem;
  display: flex;
  align-items: center;
  gap: 0.6rem;

  svg {
    color: #4fc3f7;
  }

  @media (max-width: 768px) {
    font-size: 1.6rem;
  }
`;

const StatsBox = styled.div`
  display: flex;
  gap: 2rem;
  flex-wrap: wrap;
  justify-content: center;
  margin-bottom: 2rem;
`;

const StatCard = styled.div`
  background: #1c2b34;
  padding: 1rem 1.5rem;
  border-radius: 10px;
  box-shadow: 0 0 10px #00000040;
  text-align: center;
`;

const StatNumber = styled.h3`
  font-size: 1.6rem;
  color: #4fc3f7;
`;

const StatLabel = styled.p`
  font-size: 0.95rem;
  color: #aaa;
`;

const FilterWrapper = styled.div`
  margin-bottom: 1.5rem;
`;

const Select = styled.select`
  background: #1e2f3b;
  border: none;
  padding: 0.6rem 1rem;
  border-radius: 6px;
  color: #ffffff;
  font-size: 1rem;
  outline: none;

  option {
    background: #1e2f3b;
  }
`;

const Message = styled.p`
  font-size: 1.2rem;
  color: #bbbbbb;
  margin-top: 2rem;
`;

function Dashboard({ questions = [] }) {
  const [filter, setFilter] = useState('all');

  const filteredQuestions = useMemo(() => {
    if (filter === 'all') return questions;
    return questions.filter((q) => q.difficulty.toLowerCase() === filter);
  }, [filter, questions]);

  const total = questions.length;
  const solved = questions.filter((q) => q.status === 'solved').length;
  const pending = total - solved;

  const progress = total ? ((solved / total) * 100).toFixed(1) : 0;

  return (
    <PageWrapper>
      <Heading>
        <MdLeaderboard size={28} /> Your Progress
      </Heading>

      <StatsBox>
        <StatCard>
          <StatNumber>{total}</StatNumber>
          <StatLabel>Total Questions</StatLabel>
        </StatCard>
        <StatCard>
          <StatNumber>{solved}</StatNumber>
          <StatLabel>Solved</StatLabel>
        </StatCard>
        <StatCard>
          <StatNumber>{pending}</StatNumber>
          <StatLabel>Pending</StatLabel>
        </StatCard>
        <StatCard>
          <StatNumber>{progress}%</StatNumber>
          <StatLabel>Completion</StatLabel>
        </StatCard>
      </StatsBox>

      <FilterWrapper>
        <Select value={filter} onChange={(e) => setFilter(e.target.value)}>
          <option value="all">All</option>
          <option value="easy">Easy</option>
          <option value="medium">Medium</option>
          <option value="hard">Hard</option>
        </Select>
      </FilterWrapper>

      {filteredQuestions.length > 0 ? (
        <ProgressChart questions={filteredQuestions} />
      ) : (
        <Message>No data found for selected filter.</Message>
      )}
    </PageWrapper>
  );
}

export default Dashboard;
