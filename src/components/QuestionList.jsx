import React from 'react';
import styled from 'styled-components';
import { Trash2 } from 'lucide-react';

const List = styled.ul`
  max-width: 1000px;
  margin: 0 auto 3rem auto;
  padding: 0;
  list-style: none;
`;

const Item = styled.li`
  background: linear-gradient(to right, #0f2027, #203a43, #2c5364);
  color: #e4e6eb;
  border-radius: 16px;
  box-shadow: 0 4px 18px rgba(0, 0, 0, 0.15);
  margin-bottom: 1.25rem;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  padding: 1rem 1.5rem;
  transition: box-shadow 0.3s;

  &:hover {
    box-shadow: 0 8px 30px rgba(0, 0, 0, 0.25);
  }

  @media (max-width: 700px) {
    flex-direction: column;
    align-items: flex-start;
    padding: 1rem 0.8rem;
    gap: 0.5rem;
  }
`;

const Title = styled.span`
  font-weight: 700;
  flex: 2 1 300px;
  font-size: 1.1rem;
  color: #61dafb;

  @media (max-width: 700px) {
    font-size: 1rem;
    margin-bottom: 0.2rem;
  }
`;

const Topic = styled.span`
  flex: 1 1 150px;
  color: #9ecfff;

  @media (max-width: 700px) {
    font-size: 0.97rem;
  }
`;

const Difficulty = styled.span`
  flex: 1 1 100px;
  font-weight: 600;
  color: ${({ difficulty }) => {
    switch (difficulty) {
      case 'Easy':
        return '#28a745';
      case 'Medium':
        return '#ffc107';
      case 'Hard':
        return '#dc3545';
      default:
        return '#6c757d';
    }
  }};
  @media (max-width: 700px) {
    font-size: 0.97rem;
  }
`;

const Status = styled.span`
  flex: 1 1 130px;
  font-weight: 600;
  color: ${({ status }) => {
    switch (status) {
      case 'Not Started':
        return '#6c757d';
      case 'In Progress':
        return '#17a2b8';
      case 'Completed':
        return '#28a745';
      default:
        return '#6c757d';
    }
  }};
  @media (max-width: 700px) {
    font-size: 0.97rem;
  }
`;

const DateText = styled.span`
  flex: 1 1 120px;
  font-size: 0.9rem;
  color: #aaa;

  @media (max-width: 700px) {
    font-size: 0.9rem;
  }
`;

const DeleteBtn = styled.button`
  background: transparent;
  border: none;
  color: #dc3545;
  cursor: pointer;
  padding: 0.2rem 0.5rem;
  border-radius: 10px;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #dc3545;
    color: #fff;
  }
  @media (max-width: 700px) {
    align-self: flex-end;
  }
`;

function QuestionList({ questions, onDelete }) {
  if (!questions.length) {
    return <p style={{ textAlign: 'center', marginTop: '2rem' }}>No questions to display.</p>;
  }

  return (
    <List>
      {questions.map((q, idx) => (
        <Item key={idx}>
          <Title>{q.title}</Title>
          <Topic>{q.topic}</Topic>
          <Difficulty difficulty={q.difficulty}>{q.difficulty}</Difficulty>
          <Status status={q.status}>{q.status}</Status>
          <DateText>{q.date}</DateText>
          <DeleteBtn
            title="Delete question"
            aria-label={`Delete question ${q.title}`}
            onClick={() => onDelete(idx)}
          >
            <Trash2 size={20} />
          </DeleteBtn>
        </Item>
      ))}
    </List>
  );
}

export default QuestionList;
