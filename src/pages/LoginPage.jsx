import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const PageWrapper = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  height: 100vh;
  padding-top: 60px;
  background: linear-gradient(to bottom, #0f2027, #203a43, #2c5364);
`;

const CardContainer = styled.div`
  perspective: 1000px;
  width: 350px;
  height: 360px;
`;

const Card = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  transition: transform 0.8s;
  transform-style: preserve-3d;
  transform: ${({ flipped }) => (flipped ? 'rotateY(180deg)' : 'none')};
`;

const Side = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
  background: linear-gradient(145deg, #1b2735, #243b55);
  color: #fff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 2rem;
  border-radius: 20px;
  box-shadow: 0 6px 16px rgba(0, 0, 0, 0.15);
`;

const Front = styled(Side)``;

const Back = styled(Side)`
  transform: rotateY(180deg);
`;

const Input = styled.input`
  margin-bottom: 1rem;
  padding: 0.7rem;
  border-radius: 8px;
  border: 1px solid #3a4a5a;
  font-size: 1rem;
  outline: none;
  background: #15202b;
  color: #eee;

  &:focus {
    border-color: #005c97;
    box-shadow: 0 0 0 2px rgba(0, 92, 151, 0.2);
  }
`;

const Button = styled.button`
  padding: 0.75rem;
  border: none;
  border-radius: 8px;
  font-size: 1rem;
  cursor: pointer;
  background: linear-gradient(to right, #005c97, #363795);
  color: white;
  transition: all 0.3s ease;
  margin-top: 0.5rem;

  &:hover {
    background: linear-gradient(to right, #363795, #005c97);
    transform: translateY(-2px);
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
  }

  &:active {
    transform: translateY(0);
  }
`;

const LoginRegister = () => {
  const [flipped, setFlipped] = useState(false);
  const [loginData, setLoginData] = useState({ email: '', password: '' });
  const [registerData, setRegisterData] = useState({ email: '', password: '', username: '' });
  const navigate = useNavigate();

  const handleLogin = () => {
    const users = JSON.parse(localStorage.getItem('users') || '[]');
    const found = users.find(
      (user) => user.email === loginData.email && user.password === loginData.password
    );
    if (found) {
      localStorage.setItem('currentUser', JSON.stringify(found));
      navigate('/dashboard');
    } else {
      alert('Invalid email or password');
    }
  };

  const handleRegister = () => {
    const users = JSON.parse(localStorage.getItem('users') || '[]');
    const exists = users.find((user) => user.email === registerData.email);
    if (exists) {
      alert('User already exists');
    } else {
      const updatedUsers = [...users, registerData];
      localStorage.setItem('users', JSON.stringify(updatedUsers));
      alert('Registered successfully!');
      setFlipped(false);
    }
  };

  return (
    <PageWrapper>
      <CardContainer>
        <Card flipped={flipped}>
          <Front>
            <h2>Login</h2>
            <Input
              type="email"
              placeholder="Email"
              value={loginData.email}
              onChange={(e) => setLoginData({ ...loginData, email: e.target.value })}
            />
            <Input
              type="password"
              placeholder="Password"
              value={loginData.password}
              onChange={(e) => setLoginData({ ...loginData, password: e.target.value })}
            />
            <Button onClick={handleLogin}>Login</Button>
            <Button onClick={() => setFlipped(true)}>Go to Register</Button>
          </Front>
          <Back>
            <h2>Register</h2>
            <Input
              type="text"
              placeholder="Username"
              value={registerData.username}
              onChange={(e) => setRegisterData({ ...registerData, username: e.target.value })}
            />
            <Input
              type="email"
              placeholder="Email"
              value={registerData.email}
              onChange={(e) => setRegisterData({ ...registerData, email: e.target.value })}
            />
            <Input
              type="password"
              placeholder="Password"
              value={registerData.password}
              onChange={(e) => setRegisterData({ ...registerData, password: e.target.value })}
            />
            <Button onClick={handleRegister}>Register</Button>
            <Button onClick={() => setFlipped(false)}>Go to Login</Button>
          </Back>
        </Card>
      </CardContainer>
    </PageWrapper>
  );
};

export default LoginRegister;
