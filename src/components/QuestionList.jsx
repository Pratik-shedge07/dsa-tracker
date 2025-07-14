import React from 'react';
import styled from 'styled-components';

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  background-color: ${({ dark }) => (dark ? '#1e1e1e' : '#ffffff')};
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
  color: ${({ dark }) => (dark ? '#fff' : '#000')};
  transition: all 0.3s ease;
`;

const Th = styled.th`
  background-color: ${({ dark }) => (dark ? '#333' : '#2c3e50')};
  color: white;
  padding: 0.75rem 1rem;
  font-weight: 600;
`;

const Td = styled.td`
  padding: 0.75rem 1rem;
  border-bottom: 1px solid ${({ dark }) => (dark ? '#444' : '#eee')};
  text-align: center;
`;

const DeleteButton = styled.button`
  background-color: #e74c3c;
  color: white;
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  font-weight: 600;
  transition: background-color 0.2s ease, transform 0.2s ease;

  &:hover {
    background-color: #c0392b;
    transform: scale(1.03);
  }
`;

function QuestionList({ questions, onDelete }) {
  const darkMode = localStorage.getItem('dark-mode') === 'true';

  return (
    <Table dark={darkMode}>
      <thead>
        <tr>
          <Th dark={darkMode}>Title</Th>
          <Th dark={darkMode}>Topic</Th>
          <Th dark={darkMode}>Difficulty</Th>
          <Th dark={darkMode}>Status</Th>
          <Th dark={darkMode}>Date</Th>
          <Th dark={darkMode}>Action</Th>
        </tr>
      </thead>
      <tbody>
        {questions.map((q, index) => (
          <tr key={index}>
            <Td dark={darkMode}>{q.title}</Td>
            <Td dark={darkMode}>{q.topic}</Td>
            <Td dark={darkMode}>{q.difficulty}</Td>
            <Td dark={darkMode}>{q.status}</Td>
            <Td dark={darkMode}>{new Date(q.date).toLocaleDateString()}</Td>
            <Td dark={darkMode}>
              <DeleteButton onClick={() => onDelete(index)}>Delete</DeleteButton>
            </Td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
}

export default QuestionList;
