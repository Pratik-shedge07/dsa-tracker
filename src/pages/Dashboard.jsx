import React from 'react';
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

const Message = styled.p`
  font-size: 1.2rem;
  color: #bbbbbb;
  margin-top: 2rem;
`;

function Dashboard({ questions = [] }) {
  const hasQuestions = questions.length > 0;

  return (
    <PageWrapper>
      <Heading>
        <MdLeaderboard size={28} /> Your Progress
      </Heading>

      {hasQuestions ? (
        <ProgressChart questions={questions} />
      ) : (
        <Message>No data yet. Start adding DSA questions!</Message>
      )}
    </PageWrapper>
  );
}

export default Dashboard;
