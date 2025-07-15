import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const Container = styled.div`
  max-width: 400px;
  margin: 4rem auto;
  padding: 2rem;
  background-color: ${({ dark }) => (dark ? '#1e1e1e' : '#ffffff')};
  color: ${({ dark }) => (dark ? '#f0f0f0' : '#2c3e50')};
  border-radius: 12px;
  box-shadow: 0 0 10px rgba(0,0,0,0.1);
  text-align: center;
  transition: background-color 0.3s ease, color 0.3s ease;
`;

const Title = styled.h2`
  margin-bottom: 2rem;
`;

const Input = styled.input`
  width: 100%;
  margin-bottom: 1rem;
  padding: 0.75rem;
  font-size: 1rem;
  border-radius: 8px;
  border: 1px solid #ccc;
`;

const Button = styled.button`
  padding: 0.75rem 2rem;
  font-size: 1rem;
  font-weight: 600;
  border: none;
  border-radius: 8px;
  background-color: #3498db;
  color: white;
  cursor: pointer;
  transition: background-color 0.2s ease, transform 0.2s ease;

  &:hover {
    background-color: #2c80b4;
    transform: scale(1.05);
  }
`;

const LoginPage = ({ onLogin }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = () => {
    if (username === 'admin' && password === '1234') {
      onLogin();
      navigate('/');
    } else {
      alert('Invalid credentials');
    }
  };

  const isDarkMode = localStorage.getItem('dark-mode') === 'true';

  return (
    <Container dark={isDarkMode}>
      <Title>Login</Title>
      <Input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <Input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <Button onClick={handleSubmit}>Login</Button>
    </Container>
  );
};

export default LoginPage;
