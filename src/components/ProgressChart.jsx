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

const ChartCard = styled.div`
  background: linear-gradient(to right, #0f2027, #203a43, #2c5364);
  color: #e4e6eb;
  border-radius: 18px;
  box-shadow: 0 2px 16px rgba(0, 0, 0, 0.35);
  padding: 2rem 2.5rem 1.5rem 2.5rem;
  margin: 2rem auto;
  max-width: 700px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (max-width: 768px) {
    padding: 1rem 0.5rem 1rem 0.5rem;
    margin: 1rem 0.2rem;
    max-width: 100%;
  }
`;

const ChartTitle = styled.div`
  font-weight: 700;
  font-size: 1.3rem;
  color: #fff;
  letter-spacing: 1px;
  margin-bottom: 1.2rem;
  text-align: center;
`;

const ChartWrapper = styled.div`
  width: 100%;
  height: 350px;

  @media (max-width: 768px) {
    height: 230px;
  }
`;

const COLORS = ['#28a745', '#ffc107', '#dc3545'];

const ProgressChart = ({ questions }) => {
  const total = questions.length;
  const completed = questions.filter((q) => q.status === 'Completed').length;
  const inProgress = questions.filter((q) => q.status === 'In Progress').length;
  const notStarted = questions.filter((q) => q.status === 'Not Started').length;

  const data = [
    { name: 'Completed', value: completed },
    { name: 'In Progress', value: inProgress },
    { name: 'Not Started', value: notStarted },
  ];

  return (
    <ChartCard>
      <ChartTitle>Progress Overview</ChartTitle>
      <ChartWrapper>
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={data}
              dataKey="value"
              nameKey="name"
              cx="50%"
              cy="50%"
              outerRadius={110}
              label={(entry) =>
                total > 0
                  ? `${entry.name}: ${((entry.value / total) * 100).toFixed(1)}%`
                  : `${entry.name}: 0%`
              }
            >
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index]} />
              ))}
            </Pie>
            <Tooltip />
            <Legend verticalAlign="bottom" height={36} />
          </PieChart>
        </ResponsiveContainer>
      </ChartWrapper>
    </ChartCard>
  );
};

export default ProgressChart;
