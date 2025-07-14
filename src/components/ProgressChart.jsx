import React from 'react';
import styled from 'styled-components';
import { PieChart, Pie, Cell, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const ChartWrapper = styled.div`
  width: 100%;
  max-width: 500px;
  height: 300px;
  margin: 2rem auto;
  background-color: ${({ dark }) => (dark ? '#1e1e1e' : '#ffffff')};
  border-radius: 12px;
  padding: 1rem;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
`;

const Title = styled.h3`
  text-align: center;
  margin-bottom: 1rem;
  color: ${({ dark }) => (dark ? '#f0f0f0' : '#2c3e50')};
`;

const COLORS = ['#2ecc71', '#e74c3c'];

function ProgressChart({ questions }) {
  const solved = questions.filter((q) => q.status === 'Solved').length;
  const pending = questions.length - solved;

  const data = [
    { name: 'Solved', value: solved },
    { name: 'Pending', value: pending },
  ];

  const darkMode = localStorage.getItem('dark-mode') === 'true';

  return (
    <ChartWrapper dark={darkMode}>
      <Title dark={darkMode}>Completion Overview</Title>
      <ResponsiveContainer width="100%" height="100%">
        <PieChart>
          <Pie
            data={data}
            dataKey="value"
            cx="50%"
            cy="50%"
            outerRadius={90}
            fill="#8884d8"
            label
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Tooltip />
          <Legend />
        </PieChart>
      </ResponsiveContainer>
    </ChartWrapper>
  );
}

export default ProgressChart;
