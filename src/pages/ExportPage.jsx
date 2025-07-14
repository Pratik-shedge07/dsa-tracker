import React from 'react';
import styled from 'styled-components';
import { exportToCSV } from '../utils/exportCSV';

const Page = styled.div`
  padding: 2rem;
  min-height: 100vh;
  background-color: ${({ dark }) => (dark ? '#121212' : '#f4f6f8')};
  color: ${({ dark }) => (dark ? '#e0e0e0' : '#2c3e50')};
  display: flex;
  flex-direction: column;
  align-items: center;
  transition: all 0.3s ease;
`;

const Heading = styled.h2`
  font-size: 2rem;
  font-weight: bold;
  margin-bottom: 2rem;
`;

const ExportButton = styled.button`
  background-color: #3498db;
  color: white;
  padding: 0.75rem 1.5rem;
  border: none;
  border-radius: 8px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: background-color 0.3s ease, transform 0.2s ease;

  &:hover {
    background-color: #2c80b4;
    transform: scale(1.05);
  }
`;

const Info = styled.p`
  margin-top: 1rem;
  font-size: 0.95rem;
  color: ${({ dark }) => (dark ? '#ccc' : '#555')};
`;

function ExportPage({ questions }) {
  const darkMode = localStorage.getItem('dark-mode') === 'true';

  return (
    <Page dark={darkMode}>
      <Heading>📤 Export Questions to CSV</Heading>
      <ExportButton onClick={() => exportToCSV(questions)}>
        Export CSV
      </ExportButton>
      <Info dark={darkMode}>
        This will download all your tracked questions as a .csv file.
      </Info>
    </Page>
  );
}

export default ExportPage;
