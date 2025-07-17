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

const ChartWrapper = styled.div`
  width: 100%;
  max-width: 700px;
  height: 350px;
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
              `${entry.name}: ${((entry.value / total) * 100).toFixed(1)}%`
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
  );
};

export default ProgressChart;
