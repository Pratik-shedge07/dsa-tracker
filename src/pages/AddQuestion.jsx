import React from 'react';
import TrackerForm from '../components/TrackerForm';

function AddQuestion({ onAdd }) {
  return (
    <div className="page">
      <h2>➕ Add New Question</h2>
      <TrackerForm onAdd={onAdd} />
    </div>
  );
}

export default AddQuestion;
