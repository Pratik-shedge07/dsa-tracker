import React from 'react';

const QuestionList = ({ questions, onDelete }) => {
  if (questions.length === 0) return <p>No questions added yet.</p>;

  return (
    <table>
      <thead>
        <tr>
          <th>Title</th>
          <th>Topic</th>
          <th>Difficulty</th>
          <th>Status</th>
          <th>Date</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {questions.map((q, index) => (
          <tr key={index}>
            <td>{q.title}</td>
            <td>{q.topic}</td>
            <td>{q.difficulty}</td>
            <td>{q.status}</td>
            <td>{q.date}</td>
            <td>
              <button onClick={() => onDelete(index)}>❌ Delete</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default QuestionList;
