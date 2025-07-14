import React from 'react';
import styled from 'styled-components';
import TrackerForm from '../components/TrackerForm';

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

function AddQuestion({ onAdd }) {
  // Optional: If you want dark mode detection in this component
  const darkMode = localStorage.getItem('dark-mode') === 'true';

  return (
    <Page dark={darkMode}>
      <Heading>➕ Add New Question</Heading>
      <TrackerForm onAdd={onAdd} />
    </Page>
  );
}

export default AddQuestion;
