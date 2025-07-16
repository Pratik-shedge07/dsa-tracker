import React from 'react';
import styled from 'styled-components';
import { Trash2 } from 'lucide-react'; // Optional icon, install via: npm install lucide-react

const TableWrapper = styled.div`
  width: 100%;
  overflow-x: auto;
  margin-top: 1.5rem;
  border-radius: 12px;
  box-shadow: ${({ dark }) =>
    dark ? '0 2px 10px rgba(255, 255, 255, 0.05)' : '0 2px 10px rgba(0, 0, 0, 0.1)'};
`;

const Table = styled.table`
  width: 100%;
  min-width: 800px;
  border-collapse: collapse;
  background-color: ${({ dark }) => (dark ? '#1e1e1e' : '#ffffff')};
  color: ${({ dark }) => (dark ? '#f1f1f1' : '#2c3e50')};
  transition: all 0.3s ease;
  border-radius: 12px;
`;

const Th = styled.th`
  background-color: ${({ dark }) => (dark ? '#292929' : '#2c3e50')};
  color: white;
  padding: 0.85rem 1.2rem;
  font-weight: 600;
  text-align: center;
`;

const Td = styled.td`
  padding: 0.85rem 1.2rem;
  border-bottom: 1px solid ${({ dark }) => (dark ? '#444' : '#e0e0e0')};
  text-align: center;
  word-break: break-word;
`;

const Tr = styled.tr`
  &:hover {
    background-color: ${({ dark }) => (dark ? '#2a2a2a' : '#f9f9f9')};
    transition: 0.2s ease;
  }
`;

const DeleteButton = styled.button`
  background-color: #e74c3c;
  color: white;
  padding: 0.45rem 0.9rem;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  font-weight: 500;
  display: flex;
  align-items: center;
  gap: 6px;
  justify-content: center;
  transition: all 0.2s ease;

  &:hover {
    background-color: #c0392b;
    transform: scale(1.05);
  }

  svg {
    height: 16px;
    width: 16px;
  }
`;

const EmptyMessage = styled.div`
  padding: 2rem;
  text-align: center;
  color: ${({ dark }) => (dark ? '#aaa' : '#666')};
  font-style: italic;
`;

function QuestionList({ questions, onDelete }) {
  const darkMode = localStorage.getItem('dark-mode') === 'true';

  return (
    <TableWrapper dark={darkMode}>
      {questions.length === 0 ? (
        <EmptyMessage dark={darkMode}>No questions added yet.</EmptyMessage>
      ) : (
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
              <Tr key={index} dark={darkMode}>
                <Td dark={darkMode}>{q.title}</Td>
                <Td dark={darkMode}>{q.topic}</Td>
                <Td dark={darkMode}>{q.difficulty}</Td>
                <Td dark={darkMode}>{q.status}</Td>
                <Td dark={darkMode}>{new Date(q.date).toLocaleDateString()}</Td>
                <Td dark={darkMode}>
                  <DeleteButton onClick={() => onDelete(index)}>
                    <Trash2 /> Delete
                  </DeleteButton>
                </Td>
              </Tr>
            ))}
          </tbody>
        </Table>
      )}
    </TableWrapper>
  );
}

export default QuestionList;
