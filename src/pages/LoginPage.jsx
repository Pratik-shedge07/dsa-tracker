import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

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
  transform-style: preserve-3d;
  transition: transform 0.8s;
  transform: ${({ flipped }) => (flipped ? 'rotateY(180deg)' : 'none')};
`;

const Side = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
  background: linear-gradient(145deg, #1b2735, #243b55);
  color: #ffffff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 2rem;
  border-radius: 20px;
  box-shadow: 0 6px 16px rgba(0, 0, 0, 0.15);
`;

const BackSide = styled(Side)`
  transform: rotateY(180deg);
`;

const Title = styled.h2`
  margin-bottom: 1rem;
  text-align: center;
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

// ✅ Make sure you accept the `onLogin` prop
const LoginRegister = ({ onLogin }) => {
  const [flipped, setFlipped] = useState(false);
  const [loginEmail, setLoginEmail] = useState('');
  const [loginPassword, setLoginPassword] = useState('');
  const [registerName, setRegisterName] = useState('');
  const [registerEmail, setRegisterEmail] = useState('');
  const [registerPassword, setRegisterPassword] = useState('');
  const navigate = useNavigate();

  const handleFlip = () => setFlipped(!flipped);

  const handleLogin = () => {
    const users = JSON.parse(localStorage.getItem('users') || '[]');
    const user = users.find(
      (u) => u.email === loginEmail && u.password === loginPassword
    );

    if (user) {
      toast.success('Login successful!');
      localStorage.setItem('isLoggedIn', 'true');
      if (onLogin) onLogin(); // ✅ Call the onLogin function from App.js
      setTimeout(() => navigate('/'), 1500);
    } else {
      toast.error('Invalid email or password');
    }
  };

  const handleRegister = () => {
    const users = JSON.parse(localStorage.getItem('users') || '[]');
    const existingUser = users.find((u) => u.email === registerEmail);

    if (existingUser) {
      toast.error('User already exists');
    } else {
      users.push({
        name: registerName,
        email: registerEmail,
        password: registerPassword,
      });
      localStorage.setItem('users', JSON.stringify(users));
      toast.success('Registered successfully!');
      setFlipped(false);
    }
  };

  return (
    <PageWrapper>
      <CardContainer>
        <Card flipped={flipped}>
          <Side>
            <Title>Login</Title>
            <Input
              type="email"
              placeholder="Email"
              value={loginEmail}
              onChange={(e) => setLoginEmail(e.target.value)}
            />
            <Input
              type="password"
              placeholder="Password"
              value={loginPassword}
              onChange={(e) => setLoginPassword(e.target.value)}
            />
            <Button onClick={handleLogin}>Login</Button>
            <Button onClick={handleFlip}>Go to Register</Button>
          </Side>

          <BackSide>
            <Title>Register</Title>
            <Input
              type="text"
              placeholder="Name"
              value={registerName}
              onChange={(e) => setRegisterName(e.target.value)}
            />
            <Input
              type="email"
              placeholder="Email"
              value={registerEmail}
              onChange={(e) => setRegisterEmail(e.target.value)}
            />
            <Input
              type="password"
              placeholder="Password"
              value={registerPassword}
              onChange={(e) => setRegisterPassword(e.target.value)}
            />
            <Button onClick={handleRegister}>Register</Button>
            <Button onClick={handleFlip}>Go to Login</Button>
          </BackSide>
        </Card>
      </CardContainer>
      <ToastContainer position="top-right" autoClose={3000} />
    </PageWrapper>
  );
};

export default LoginRegister;
