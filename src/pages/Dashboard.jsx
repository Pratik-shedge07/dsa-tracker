import React from 'react';
import styled from 'styled-components';
import ProgressChart from '../components/ProgressChart';

const Page = styled.div`
  padding: 2rem;
  text-align: center;
  background-color: ${({ dark }) => (dark ? '#121212' : '#f4f6f8')};
  color: ${({ dark }) => (dark ? '#e0e0e0' : '#2c3e50')};
  min-height: 100vh;
  transition: all 0.3s ease;
`;

const Heading = styled.h2`
  font-size: 2rem;
  font-weight: bold;
  margin-bottom: 1.5rem;
`;

function Dashboard({ questions, darkMode }) {
  return (
    <Page dark={darkMode}>
      <Heading>📊 Your Progress</Heading>
      <ProgressChart questions={questions} />
    </Page>
  );
}

export default Dashboard;
