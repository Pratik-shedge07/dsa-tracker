import React from 'react';
import styled from 'styled-components';
import { exportToCSV, exportToPDF } from '../utils/exportUtils';
import { FileText, FileDown, FileSignature } from 'lucide-react';

const Wrapper = styled.div`
  max-width: 700px;
  margin: 4rem auto;
  padding: 2rem;
  text-align: center;
  background-color: ${({ theme }) => theme?.background || '#1e1e1e'};
  color: ${({ theme }) => theme?.text || '#f5f5f5'};
  border-radius: 16px;
  box-shadow: 0 12px 24px rgba(0, 0, 0, 0.2);
`;

const Logo = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 2rem;

  svg {
    margin-right: 10px;
    color: #00c896;
  }

  h1 {
    font-size: 2rem;
    font-weight: bold;
    letter-spacing: 1px;
  }
`;

const ExportButtons = styled.div`
  display: flex;
  justify-content: center;
  gap: 1.5rem;
  flex-wrap: wrap;
  margin-top: 2rem;
`;

const Button = styled.button`
  padding: 1rem 1.5rem;
  display: flex;
  align-items: center;
  gap: 0.6rem;
  border: none;
  border-radius: 10px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  background-color: ${({ pdf }) => (pdf ? '#e74c3c' : '#3498db')};
  color: white;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  transition: all 0.2s ease;

  &:hover {
    transform: translateY(-3px) scale(1.05);
  }
`;

const ExportPage = ({ questions }) => {
  return (
    <Wrapper>
      <Logo>
        <FileText size={36} />
        <h1>DSA Export Tool</h1>
      </Logo>

      <p>Download your progress and keep track offline</p>

      <ExportButtons>
        <Button onClick={() => exportToCSV(questions)}>
          <FileDown size={20} />
          Export as CSV
        </Button>

        <Button pdf onClick={() => exportToPDF(questions)}>
          <FileSignature size={20} />
          Export as PDF
        </Button>
      </ExportButtons>
    </Wrapper>
  );
};

export default ExportPage;
