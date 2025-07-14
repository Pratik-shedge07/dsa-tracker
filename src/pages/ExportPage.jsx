import React from 'react';
import { exportToCSV } from '../utils/exportCSV';

function ExportPage({ questions }) {
  return (
    <div className="page">
      <h2>⬇️ Export Questions</h2>
      <button className="primary" onClick={() => exportToCSV(questions)}>
        Download CSV
      </button>
    </div>
  );
}

export default ExportPage;
