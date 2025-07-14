import React, { useState } from 'react';
import styled from 'styled-components';

const Form = styled.form`
  background-color: ${({ dark }) => (dark ? '#1e1e1e' : '#ffffff')};
  padding: 1.5rem;
  margin-bottom: 2rem;
  border-radius: 12px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.08);
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  justify-content: center;
  transition: all 0.3s ease;
`;

const Input = styled.input`
  padding: 0.6rem 1rem;
  font-size: 1rem;
  border-radius: 8px;
  border: 1px solid ${({ dark }) => (dark ? '#444' : '#ccc')};
  background-color: ${({ dark }) => (dark ? '#1e1e1e' : '#fff')};
  color: ${({ dark }) => (dark ? '#f0f0f0' : '#000')};
  flex: 1 1 180px;
`;

const Select = styled.select`
  padding: 0.6rem 1rem;
  font-size: 1rem;
  border-radius: 8px;
  border: 1px solid ${({ dark }) => (dark ? '#444' : '#ccc')};
  background-color: ${({ dark }) => (dark ? '#1e1e1e' : '#fff')};
  color: ${({ dark }) => (dark ? '#f0f0f0' : '#000')};
  flex: 1 1 180px;
`;

const Button = styled.button`
  background-color: #27ae60;
  color: white;
  padding: 0.6rem 1.2rem;
  font-weight: 600;
  font-size: 1rem;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: background-color 0.3s ease, transform 0.2s ease;

  &:hover {
    background-color: #1e8449;
    transform: scale(1.03);
  }
`;

function TrackerForm({ onAdd }) {
  const [title, setTitle] = useState('');
  const [topic, setTopic] = useState('');
  const [difficulty, setDifficulty] = useState('Easy');
  const [status, setStatus] = useState('Pending');

  const darkMode = localStorage.getItem('dark-mode') === 'true';

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title || !topic) return;
    const newQuestion = {
      title,
      topic,
      difficulty,
      status,
      date: new Date().toISOString()
    };
    onAdd(newQuestion);
    setTitle('');
    setTopic('');
    setDifficulty('Easy');
    setStatus('Pending');
  };

  return (
    <Form onSubmit={handleSubmit} dark={darkMode}>
      <Input
        dark={darkMode}
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <Input
        dark={darkMode}
        type="text"
        placeholder="Topic"
        value={topic}
        onChange={(e) => setTopic(e.target.value)}
      />
      <Select
        dark={darkMode}
        value={difficulty}
        onChange={(e) => setDifficulty(e.target.value)}
      >
        <option value="Easy">Easy</option>
        <option value="Medium">Medium</option>
        <option value="Hard">Hard</option>
      </Select>
      <Select
        dark={darkMode}
        value={status}
        onChange={(e) => setStatus(e.target.value)}
      >
        <option value="Pending">Pending</option>
        <option value="Solved">Solved</option>
      </Select>
      <Button type="submit">Add</Button>
    </Form>
  );
}

export default TrackerForm;
