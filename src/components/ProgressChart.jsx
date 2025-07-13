import React from 'react';
import { PieChart, Pie, Cell, Tooltip, Legend } from 'recharts';

const COLORS = ['#27ae60', '#e74c3c'];

const ProgressChart = ({ questions }) => {
  const solved = questions.filter((q) => q.status === 'Solved').length;
  const pending = questions.length - solved;

  const data = [
    { name: 'Solved', value: solved },
    { name: 'Pending', value: pending }
  ];

  return (
    <div style={{ marginTop: '2rem' }}>
      <h2>📊 Progress Chart</h2>
      <PieChart width={300} height={300}>
        <Pie
          data={data}
          cx="50%"
          cy="50%"
          labelLine={false}
          outerRadius={100}
          fill="#8884d8"
          dataKey="value"
          label
        >
          {data.map((entry, index) => (
            <Cell key={index} fill={COLORS[index]} />
          ))}
        </Pie>
        <Tooltip />
        <Legend />
      </PieChart>
    </div>
  );
};

export default ProgressChart;

