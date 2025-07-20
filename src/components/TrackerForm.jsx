import React, { useState } from 'react';
import styled from 'styled-components';

const FormCard = styled.div`
  background: linear-gradient(to right, #0f2027, #203a43, #2c5364);
  color: #e4e6eb;
  border-radius: 18px;
  box-shadow: 0 2px 16px rgba(0, 0, 0, 0.35);
  padding: 2.2rem 2.5rem 2rem 2.5rem;
  margin: 2rem auto 2.5rem auto;
  max-width: 600px;
  width: 100%;

  @media (max-width: 700px) {
    padding: 1.2rem 0.7rem 1.2rem 0.7rem;
    margin: 1rem 0.2rem 1.5rem 0.2rem;
    max-width: 100%;
  }
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const Label = styled.label`
  font-weight: 600;
  font-size: 1rem;
  color: ${({ dark }) => (dark ? '#ddd' : '#e4e6eb')};
`;

const Input = styled.input`
  padding: 0.55rem 0.8rem;
  border-radius: 10px;
  border: 1px solid ${({ dark }) => (dark ? '#444' : '#ccc')};
  background-color: ${({ dark }) => (dark ? '#222' : '#fff')};
  color: ${({ dark }) => (dark ? '#eee' : '#222')};
  font-size: 1rem;

  &:focus {
    outline: none;
    border-color: ${({ dark }) => (dark ? '#00bcd4' : '#3498db')};
    box-shadow: 0 0 8px ${({ dark }) => (dark ? '#00bcd4' : '#3498db')};
  }

  @media (max-width: 700px) {
    font-size: 0.97rem;
    padding: 0.45rem 0.7rem;
  }
`;

const Select = styled.select`
  padding: 0.55rem 0.8rem;
  border-radius: 10px;
  border: 1px solid ${({ dark }) => (dark ? '#444' : '#ccc')};
  background-color: ${({ dark }) => (dark ? '#222' : '#fff')};
  color: ${({ dark }) => (dark ? '#eee' : '#222')};
  font-size: 1rem;

  &:focus {
    outline: none;
    border-color: ${({ dark }) => (dark ? '#00bcd4' : '#3498db')};
    box-shadow: 0 0 8px ${({ dark }) => (dark ? '#00bcd4' : '#3498db')};
  }

  @media (max-width: 700px) {
    font-size: 0.97rem;
    padding: 0.45rem 0.7rem;
  }
`;

const Button = styled.button`
  padding: 0.8rem 1rem;
  background-color: #00bcd4;
  color: #fff;
  font-weight: 700;
  font-size: 1.05rem;
  border: none;
  border-radius: 12px;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #0097a7;
  }

  @media (max-width: 700px) {
    font-size: 1rem;
    padding: 0.7rem 0.8rem;
  }
`;

const ErrorText = styled.p`
  color: #ff5252;
  font-weight: 600;
  margin: 0;
`;

function TrackerForm({ onAdd }) {
  const dark = localStorage.getItem('dark-mode') === 'true';

  const [title, setTitle] = useState('');
  const [topic, setTopic] = useState('');
  const [difficulty, setDifficulty] = useState('Easy');
  const [status, setStatus] = useState('Not Started');
  const [date, setDate] = useState(new Date().toISOString().slice(0, 10)); // yyyy-mm-dd
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!title.trim() || !topic.trim()) {
      setError('Title and Topic are required.');
      return;
    }

    const newQuestion = {
      title: title.trim(),
      topic: topic.trim(),
      difficulty,
      status,
      date,
    };

    onAdd(newQuestion);

    setTitle('');
    setTopic('');
    setDifficulty('Easy');
    setStatus('Not Started');
    setDate(new Date().toISOString().slice(0, 10));
    setError('');
  };

  return (
    <FormCard>
      <Form onSubmit={handleSubmit} dark={dark}>
        <Label dark={dark} htmlFor="title">
          Question Title
        </Label>
        <Input
          dark={dark}
          id="title"
          type="text"
          placeholder="e.g. Two Sum"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />

        <Label dark={dark} htmlFor="topic">
          Topic
        </Label>
        <Input
          dark={dark}
          id="topic"
          type="text"
          placeholder="e.g. Arrays, Trees"
          value={topic}
          onChange={(e) => setTopic(e.target.value)}
          required
        />

        <Label dark={dark} htmlFor="difficulty">
          Difficulty
        </Label>
        <Select
          dark={dark}
          id="difficulty"
          value={difficulty}
          onChange={(e) => setDifficulty(e.target.value)}
        >
          <option>Easy</option>
          <option>Medium</option>
          <option>Hard</option>
        </Select>

        <Label dark={dark} htmlFor="status">
          Status
        </Label>
        <Select
          dark={dark}
          id="status"
          value={status}
          onChange={(e) => setStatus(e.target.value)}
        >
          <option>Not Started</option>
          <option>In Progress</option>
          <option>Completed</option>
        </Select>

        <Label dark={dark} htmlFor="date">
          Date
        </Label>
        <Input
          dark={dark}
          id="date"
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />

        {error && <ErrorText>{error}</ErrorText>}

        <Button type="submit">Add Question</Button>
      </Form>
    </FormCard>
  );
}

export default TrackerForm;
