import React from 'react';
import styled from 'styled-components';
import { exportToCSV, exportToPDF } from '../utils/exportUtils';
import { FileText, FileDown, FileSignature } from 'lucide-react';

const Wrapper = styled.div`
  max-width: 700px;
  margin: 4rem auto;
  padding: 2rem;
  text-align: center;
  background: linear-gradient(to right, #0f2027, #203a43, #2c5364);
  color: #e4e6eb;
  border-radius: 18px;
  box-shadow: 0 12px 24px rgba(0, 0, 0, 0.2);

  @media (max-width: 700px) {
    padding: 1.2rem 0.5rem;
    margin: 2rem 0.2rem;
    max-width: 100%;
  }
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

    @media (max-width: 700px) {
      font-size: 1.3rem;
    }
  }
`;

const ExportButtons = styled.div`
  display: flex;
  justify-content: center;
  gap: 1.5rem;
  flex-wrap: wrap;
  margin-top: 2rem;

  @media (max-width: 700px) {
    flex-direction: column;
    gap: 1rem;
    align-items: stretch;
  }
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
    background-color: ${({ pdf }) => (pdf ? '#c0392b' : '#217dbb')};
  }

  @media (max-width: 700px) {
    font-size: 0.97rem;
    padding: 0.8rem 1rem;
    justify-content: center;
  }
`;

const Description = styled.p`
  font-size: 1.08rem;
  margin-bottom: 1.5rem;

  @media (max-width: 700px) {
    font-size: 0.97rem;
    margin-bottom: 1rem;
  }
`;

const ExportPage = ({ questions }) => {
  return (
    <Wrapper>
      <Logo>
        <FileText size={36} />
        <h1>DSA Export Tool</h1>
      </Logo>

      <Description>
        Download your progress and keep track offline
      </Description>

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
