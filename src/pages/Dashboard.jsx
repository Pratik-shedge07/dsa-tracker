import React from 'react';
import ProgressChart from '../components/ProgressChart';

function Dashboard({ questions }) {
  return (
    <div className="page">
      <h2>📊 Progress Dashboard</h2>
      <ProgressChart questions={questions} />
    </div>
  );
}

export default Dashboard;
