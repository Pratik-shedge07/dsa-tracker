import React, { useState } from 'react';
import styled from 'styled-components';

const Form = styled.form`
  background-color: ${({ dark }) => (dark ? '#1e1e1e' : '#ffffff')};
  padding: 2rem;
  margin-bottom: 2rem;
  border-radius: 16px;
  box-shadow: ${({ dark }) =>
    dark ? '0 4px 18px rgba(255, 255, 255, 0.05)' : '0 4px 14px rgba(0, 0, 0, 0.08)'};
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
  gap: 1.2rem;
  transition: all 0.3s ease;
`;

const Field = styled.div`
  display: flex;
  flex-direction: column;
`;

const Label = styled.label`
  margin-bottom: 0.4rem;
  font-size: 0.92rem;
  font-weight: 500;
  color: ${({ dark }) => (dark ? '#cccccc' : '#444')};
`;

const Input = styled.input`
  padding: 0.6rem 1rem;
  font-size: 1rem;
  border-radius: 8px;
  border: 1px solid ${({ dark }) => (dark ? '#555' : '#ccc')};
  background-color: ${({ dark }) => (dark ? '#2b2b2b' : '#fff')};
  color: ${({ dark }) => (dark ? '#f0f0f0' : '#000')};
  transition: border-color 0.3s ease, background-color 0.3s ease;

  &:focus {
    outline: none;
    border-color: ${({ dark }) => (dark ? '#00bcd4' : '#3498db')};
    background-color: ${({ dark }) => (dark ? '#262626' : '#fefefe')};
  }
`;

const Select = styled.select`
  padding: 0.6rem 1rem;
  font-size: 1rem;
  border-radius: 8px;
  border: 1px solid ${({ dark }) => (dark ? '#555' : '#ccc')};
  background-color: ${({ dark }) => (dark ? '#2b2b2b' : '#fff')};
  color: ${({ dark }) => (dark ? '#f0f0f0' : '#000')};
  transition: border-color 0.3s ease, background-color 0.3s ease;

  &:focus {
    outline: none;
    border-color: ${({ dark }) => (dark ? '#00bcd4' : '#3498db')};
    background-color: ${({ dark }) => (dark ? '#262626' : '#fefefe')};
  }
`;

const ButtonWrapper = styled.div`
  grid-column: 1 / -1;
  text-align: center;
  margin-top: 1rem;
`;

const Button = styled.button`
  background-color: #27ae60;
  color: white;
  padding: 0.75rem 2rem;
  font-weight: 600;
  font-size: 1.05rem;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  transition: background-color 0.3s ease, transform 0.2s ease;

  &:hover {
    background-color: #1e8449;
    transform: scale(1.05);
  }
`;

function TrackerForm({ onAdd }) {
  const [title, setTitle] = useState('');
  const [topic, setTopic] = useState('');
  const [difficulty, setDifficulty] = useState('Easy');
  const [status, setStatus] = useState('Pending');
  const [date, setDate] = useState(new Date().toISOString().split('T')[0]);

  const darkMode = localStorage.getItem('dark-mode') === 'true';

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title || !topic) return;
    const newQuestion = {
      title,
      topic,
      difficulty,
      status,
      date
    };
    onAdd(newQuestion);
    setTitle('');
    setTopic('');
    setDifficulty('Easy');
    setStatus('Pending');
    setDate(new Date().toISOString().split('T')[0]);
  };

  return (
    <Form onSubmit={handleSubmit} dark={darkMode}>
      <Field>
        <Label dark={darkMode}>Title</Label>
        <Input
          dark={darkMode}
          type="text"
          placeholder="e.g. Two Sum"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </Field>

      <Field>
        <Label dark={darkMode}>Topic</Label>
        <Input
          dark={darkMode}
          type="text"
          placeholder="e.g. Arrays"
          value={topic}
          onChange={(e) => setTopic(e.target.value)}
        />
      </Field>

      <Field>
        <Label dark={darkMode}>Difficulty</Label>
        <Select
          dark={darkMode}
          value={difficulty}
          onChange={(e) => setDifficulty(e.target.value)}
        >
          <option value="Easy">Easy</option>
          <option value="Medium">Medium</option>
          <option value="Hard">Hard</option>
        </Select>
      </Field>

      <Field>
        <Label dark={darkMode}>Status</Label>
        <Select
          dark={darkMode}
          value={status}
          onChange={(e) => setStatus(e.target.value)}
        >
          <option value="Pending">Pending</option>
          <option value="Solved">Solved</option>
        </Select>
      </Field>

      <Field>
        <Label dark={darkMode}>Date</Label>
        <Input
          dark={darkMode}
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />
      </Field>

      <ButtonWrapper>
        <Button type="submit">Add Question</Button>
      </ButtonWrapper>
    </Form>
  );
}

export default TrackerForm;
