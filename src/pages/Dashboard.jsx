import React from 'react';
import styled from 'styled-components';
import { MdLeaderboard } from 'react-icons/md';
import ProgressChart from '../components/ProgressChart';

const PageWrapper = styled.div`
  min-height: 100vh;
  padding: 2rem;
  background: linear-gradient(to bottom, #0f2027, #203a43, #2c5364);
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #e0e0e0;
`;

const Heading = styled.h2`
  font-size: 2rem;
  font-weight: bold;
  margin-bottom: 2rem;
  display: flex;
  align-items: center;
  gap: 0.6rem;
`;

function Dashboard({ questions }) {
  return (
    <PageWrapper>
      <Heading>
        <MdLeaderboard size={28} /> Your Progress
      </Heading>
      <ProgressChart questions={questions} />
    </PageWrapper>
  );
}

export default Dashboard;
