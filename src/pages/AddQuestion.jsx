import React from 'react';
import styled from 'styled-components';
import { Lightbulb } from 'lucide-react'; // Imported icon
import TrackerForm from '../components/TrackerForm';

const Page = styled.div`
  padding: 3rem 1.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${({ dark }) => (dark ? '#0f0f0f' : '#eef1f5')};
  color: ${({ dark }) => (dark ? '#e0e0e0' : '#2c3e50')};
  min-height: 100vh;
  transition: all 0.3s ease;
`;

const Heading = styled.h2`
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 1rem;
  position: relative;
  text-align: center;

  &::after {
    content: '';
    width: 60px;
    height: 4px;
    background: ${({ dark }) => (dark ? '#00bcd4' : '#2c3e50')};
    position: absolute;
    bottom: -10px;
    left: 50%;
    transform: translateX(-50%);
    border-radius: 2px;
  }
`;

const SubHeading = styled.p`
  font-size: 1.1rem;
  color: ${({ dark }) => (dark ? '#b0b0b0' : '#555')};
  margin-bottom: 2.5rem;
  max-width: 700px;
  text-align: center;
`;

const FormContainer = styled.div`
  width: 100%;
  max-width: 720px;
  background: ${({ dark }) =>
    dark ? 'rgba(30, 30, 30, 0.85)' : 'rgba(255, 255, 255, 0.85)'};
  backdrop-filter: blur(12px);
  padding: 2.5rem 2rem;
  border-radius: 18px;
  border: ${({ dark }) =>
    dark ? '1px solid rgba(255, 255, 255, 0.08)' : '1px solid rgba(0, 0, 0, 0.08)'};
  box-shadow: ${({ dark }) =>
    dark ? '0 8px 32px rgba(0, 0, 0, 0.4)' : '0 8px 24px rgba(0, 0, 0, 0.1)'};
  transition: all 0.3s ease;

  &:hover {
    box-shadow: ${({ dark }) =>
      dark ? '0 12px 36px rgba(0, 0, 0, 0.45)' : '0 12px 36px rgba(0, 0, 0, 0.15)'};
    transform: translateY(-2px);
  }
`;

const TipBox = styled.div`
  background-color: ${({ dark }) => (dark ? '#1a1a1a' : '#ffffff')};
  color: ${({ dark }) => (dark ? '#ccc' : '#333')};
  border-left: 5px solid ${({ dark }) => (dark ? '#00bcd4' : '#3498db')};
  padding: 1.2rem 1.5rem;
  margin-top: 2.5rem;
  max-width: 720px;
  border-radius: 10px;
  box-shadow: ${({ dark }) =>
    dark ? '0 4px 12px rgba(255, 255, 255, 0.03)' : '0 4px 12px rgba(0, 0, 0, 0.06)'};
  font-size: 0.95rem;
  line-height: 1.6;
  display: flex;
  align-items: flex-start;
  gap: 0.8rem;
`;

const Quote = styled.blockquote`
  font-style: italic;
  color: ${({ dark }) => (dark ? '#888' : '#666')};
  margin-top: 3rem;
  text-align: center;
  max-width: 700px;
`;

function AddQuestion({ onAdd }) {
  const darkMode = localStorage.getItem('dark-mode') === 'true';

  return (
    <Page dark={darkMode}>
      <Heading dark={darkMode}>Add New Question</Heading>
      <SubHeading dark={darkMode}>
        Keep track of your DSA progress and never lose sight of what you've solved.
        Logging each question helps reinforce your memory and spot patterns.
      </SubHeading>

      <FormContainer dark={darkMode}>
        <TrackerForm onAdd={onAdd} />
      </FormContainer>

      <TipBox dark={darkMode}>
        <Lightbulb size={24} color={darkMode ? '#00bcd4' : '#3498db'} />
        <div>
          <strong>Pro Tip:</strong> Try to add a brief note or learning after each question.
          It helps you when revising later or preparing for interviews. Also, mark the questions
          you've found difficult so you can revisit them in your revision schedule.
        </div>
      </TipBox>

      <Quote dark={darkMode}>
        "It's not about how many problems you solve, but how well you understand the ones you do."
      </Quote>
    </Page>
  );
}

export default AddQuestion;
