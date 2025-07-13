import React, { useState } from 'react';

function TrackerForm({ onAdd }) {
  const [title, setTitle] = useState('');
  const [topic, setTopic] = useState('');
  const [difficulty, setDifficulty] = useState('Easy');
  const [status, setStatus] = useState('Pending');
  const [date, setDate] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title || !topic || !date) return alert('Please fill all fields!');
    onAdd({ title, topic, difficulty, status, date });
    setTitle('');
    setTopic('');
    setDifficulty('Easy');
    setStatus('Pending');
    setDate('');
  };

  return (
    <form className="question-form" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Question Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <input
        type="text"
        placeholder="Topic (e.g. Array, Graph)"
        value={topic}
        onChange={(e) => setTopic(e.target.value)}
      />
      <select value={difficulty} onChange={(e) => setDifficulty(e.target.value)}>
        <option value="Easy">Easy</option>
        <option value="Medium">Medium</option>
        <option value="Hard">Hard</option>
      </select>
      <select value={status} onChange={(e) => setStatus(e.target.value)}>
        <option value="Pending">Pending</option>
        <option value="Solved">Solved</option>
      </select>
      <input
        type="date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
      />
      <button type="submit" className="primary">➕ Add Question</button>
    </form>
  );
}

export default TrackerForm;
