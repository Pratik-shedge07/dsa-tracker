import React from 'react';
import styled from 'styled-components';
import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';
import { FaChartPie } from 'react-icons/fa';

const ChartWrapper = styled.div`
  width: 100%;
  max-width: 520px;
  height: 340px;
  margin: 2rem auto;
  background: linear-gradient(145deg, #1b2735, #243b55);
  border-radius: 20px;
  padding: 2rem 1.5rem;
  box-shadow: 0 6px 16px rgba(0, 0, 0, 0.2);
  color: #e0e0e0;
`;

const Title = styled.h3`
  text-align: center;
  margin-bottom: 1.5rem;
  font-size: 1.4rem;
  font-weight: 700;
  color: #e0e0e0;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.6rem;
`;

const COLORS = ['#00C49F', '#FF6B6B'];

function ProgressChart({ questions }) {
  const solved = questions.filter((q) => q.status === 'Solved').length;
  const pending = questions.length - solved;

  const data = [
    { name: 'Solved', value: solved },
    { name: 'Pending', value: pending },
  ];

  return (
    <ChartWrapper>
      <Title>
        <FaChartPie size={20} /> Completion Overview
      </Title>
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
              <Cell
                key={`cell-${index}`}
                fill={COLORS[index % COLORS.length]}
              />
            ))}
          </Pie>
          <Tooltip
            contentStyle={{
              backgroundColor: '#1f2937',
              borderColor: '#4b5563',
              color: '#f9fafb',
              borderRadius: '8px',
            }}
          />
          <Legend
            iconType="circle"
            wrapperStyle={{
              color: '#d1d5db',
              fontSize: '0.85rem',
            }}
          />
        </PieChart>
      </ResponsiveContainer>
    </ChartWrapper>
  );
}

export default ProgressChart;
