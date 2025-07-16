import React from 'react';
import styled from 'styled-components';
import { PieChart, Pie, Cell, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const ChartWrapper = styled.div`
  width: 100%;
  max-width: 500px;
  height: 320px;
  margin: 2rem auto;
  background-color: ${({ dark }) => (dark ? '#1a1a1a' : '#ffffff')};
  color: ${({ dark }) => (dark ? '#f5f5f5' : '#2c3e50')};
  border-radius: 16px;
  padding: 1rem 1.5rem;
  box-shadow: ${({ dark }) =>
    dark ? '0 0 15px rgba(255, 255, 255, 0.05)' : '0 2px 12px rgba(0, 0, 0, 0.1)'};
  transition: all 0.3s ease;
`;

const Title = styled.h3`
  text-align: center;
  margin-bottom: 1.2rem;
  font-size: 1.3rem;
  font-weight: 700;
  color: ${({ dark }) => (dark ? '#e0e0e0' : '#2c3e50')};
`;

const COLORS = ['#00C49F', '#FF6B6B'];

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
      <Title dark={darkMode}>📊 Completion Overview</Title>
      <ResponsiveContainer width="100%" height="90%">
        <PieChart>
          <Pie
            data={data}
            dataKey="value"
            cx="50%"
            cy="50%"
            outerRadius={90}
            label={({ name, percent }) =>
              `${name} (${(percent * 100).toFixed(0)}%)`
            }
            labelLine={false}
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Tooltip
            contentStyle={{
              backgroundColor: darkMode ? '#333' : '#fff',
              borderColor: darkMode ? '#555' : '#ccc',
              color: darkMode ? '#fff' : '#000',
            }}
          />
          <Legend
            iconType="circle"
            wrapperStyle={{
              color: darkMode ? '#ccc' : '#444',
              fontSize: '0.85rem',
            }}
          />
        </PieChart>
      </ResponsiveContainer>
    </ChartWrapper>
  );
}

export default ProgressChart;
