import React, { useState } from 'react';

const TrackerForm = ({ onAdd }) => {
  const [formData, setFormData] = useState({
    title: '',
    topic: '',
    difficulty: 'Easy',
    status: 'Pending',
    date: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onAdd(formData);
    setFormData({
      title: '',
      topic: '',
      difficulty: 'Easy',
      status: 'Pending',
      date: ''
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name="title" value={formData.title} onChange={handleChange} placeholder="Question Title" required />
      <input name="topic" value={formData.topic} onChange={handleChange} placeholder="Topic" required />
      <select name="difficulty" value={formData.difficulty} onChange={handleChange}>
        <option>Easy</option>
        <option>Medium</option>
        <option>Hard</option>
      </select>
      <select name="status" value={formData.status} onChange={handleChange}>
        <option>Pending</option>
        <option>Solved</option>
      </select>
      <input type="date" name="date" value={formData.date} onChange={handleChange} required />
      <button type="submit">Add Question</button>
    </form>
  );
};

export default TrackerForm;
