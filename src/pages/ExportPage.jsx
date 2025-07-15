import React from 'react';
import styled from 'styled-components';
import { exportToCSV, exportToPDF } from '../utils/exportUtils';

const Wrapper = styled.div`
  max-width: 600px;
  margin: 4rem auto;
  text-align: center;
`;

const Button = styled.button`
  padding: 0.8rem 1.5rem;
  margin: 1rem;
  border: none;
  border-radius: 8px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  color: white;
  background-color: ${({ pdf }) => (pdf ? '#e74c3c' : '#3498db')};
  transition: transform 0.2s ease;

  &:hover {
    transform: scale(1.05);
  }
`;

const ExportPage = ({ questions }) => {
  return (
    <Wrapper>
      <h2>📤 Export Your DSA Data</h2>
      <Button onClick={() => exportToCSV(questions)}>📄 Export as CSV</Button>
      <Button pdf onClick={() => exportToPDF(questions)}>🧾 Export as PDF</Button>
    </Wrapper>
  );
};

export default ExportPage;
