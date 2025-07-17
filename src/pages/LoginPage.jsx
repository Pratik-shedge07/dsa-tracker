import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const PageWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background: ${({ dark }) =>
    dark
      ? 'linear-gradient(to bottom, #0f2027, #203a43, #2c5364)'
      : 'linear-gradient(to bottom, #ffffff, #e0eafc)'};
`;

const CardContainer = styled.div`
  perspective: 1000px;
  width: 350px;
  height: 400px;
`;

const Card = styled.div`
  width: 100%;
  height: 100%;
  transition: transform 0.8s;
  transform-style: preserve-3d;
  position: relative;
  transform: ${({ isFlipped }) => (isFlipped ? 'rotateY(180deg)' : 'none')};
`;

const Side = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
  background: ${({ dark }) =>
    dark
      ? 'linear-gradient(145deg, #1a2a3a, #203a43)'
      : 'linear-gradient(145deg, #ffffff, #e3ecf5)'};
  color: ${({ dark }) => (dark ? '#ffffff' : '#333')};
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 2rem;
  border-radius: 20px;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.2);
`;

const Front = styled(Side)``;

const Back = styled(Side)`
  transform: rotateY(180deg);
`;

const Title = styled.h2`
  margin-bottom: 1.5rem;
  text-align: center;
  font-size: 1.8rem;
  background: linear-gradient(to right, #005c97, #363795);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

const Input = styled.input`
  margin-bottom: 1rem;
  padding: 0.75rem;
  border-radius: 8px;
  border: 1px solid ${({ dark }) => (dark ? '#444' : '#ddd')};
  font-size: 1rem;
  outline: none;
  background: ${({ dark }) => (dark ? '#1a2a3a' : '#fff')};
  color: ${({ dark }) => (dark ? '#eee' : '#333')};
  
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
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  }
  
  &:active {
    transform: translateY(0);
  }
`;

const Toggle = styled.p`
  margin-top: 1rem;
  text-align: center;
  cursor: pointer;
  font-size: 0.9rem;
  color: ${({ dark }) => (dark ? '#bbb' : '#666')};
  transition: color 0.2s;
  
  &:hover {
    color: #005c97;
    text-decoration: underline;
  }
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const ErrorMessage = styled.div`
  color: #ff3860;
  font-size: 0.85rem;
  margin-top: -0.5rem;
  margin-bottom: 0.5rem;
  text-align: left;
`;

const LoginRegister = ({ dark }) => {
  const [isFlipped, setIsFlipped] = useState(false);
  const [loginData, setLoginData] = useState({ email: '', password: '' });
  const [registerData, setRegisterData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  });
  const [errors, setErrors] = useState({});
  const [success, setSuccess] = useState('');
  const navigate = useNavigate();

  const validateLogin = () => {
    const newErrors = {};
    if (!loginData.email) newErrors.email = 'Email is required';
    if (!loginData.password) newErrors.password = 'Password is required';
    return newErrors;
  };

  const validateRegister = () => {
    const newErrors = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    
    if (!registerData.name) newErrors.name = 'Name is required';
    if (!registerData.email) newErrors.email = 'Email is required';
    else if (!emailRegex.test(registerData.email)) newErrors.email = 'Invalid email format';
    if (!registerData.password) newErrors.password = 'Password is required';
    else if (registerData.password.length < 6) newErrors.password = 'Password must be at least 6 characters';
    if (!registerData.confirmPassword) newErrors.confirmPassword = 'Please confirm password';
    else if (registerData.password !== registerData.confirmPassword) newErrors.confirmPassword = 'Passwords do not match';
    
    return newErrors;
  };

  const handleLogin = (e) => {
    e.preventDefault();
    const validationErrors = validateLogin();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    
    const users = JSON.parse(localStorage.getItem('users') || '[]');
    const foundUser = users.find(
      (user) =>
        user.email === loginData.email &&
        user.password === loginData.password
    );

    if (foundUser) {
      localStorage.setItem('currentUser', JSON.stringify(foundUser));
      navigate('/dashboard');
    } else {
      setErrors({ login: 'Invalid email or password' });
    }
  };

  const handleRegister = (e) => {
    e.preventDefault();
    const validationErrors = validateRegister();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    
    const users = JSON.parse(localStorage.getItem('users') || '[]');
    const existing = users.find((user) => user.email === registerData.email);

    if (existing) {
      setErrors({ register: 'User with this email already exists' });
      return;
    }

    const userData = {
      name: registerData.name,
      email: registerData.email,
      password: registerData.password
    };

    const updatedUsers = [...users, userData];
    localStorage.setItem('users', JSON.stringify(updatedUsers));
    setSuccess('Registration successful! Please login');
    
    // Reset form and flip back to login
    setRegisterData({
      name: '',
      email: '',
      password: '',
      confirmPassword: ''
    });
    setErrors({});
    setTimeout(() => {
      setIsFlipped(false);
      setSuccess('');
    }, 2000);
  };

  return (
    <PageWrapper dark={dark}>
      <CardContainer>
        <Card isFlipped={isFlipped}>
          <Front dark={dark}>
            <Title>Login</Title>
            <Form onSubmit={handleLogin}>
              <Input
                type="email"
                placeholder="Email"
                value={loginData.email}
                onChange={(e) =>
                  setLoginData({ ...loginData, email: e.target.value })
                }
                dark={dark}
              />
              {errors.email && <ErrorMessage>{errors.email}</ErrorMessage>}
              
              <Input
                type="password"
                placeholder="Password"
                value={loginData.password}
                onChange={(e) =>
                  setLoginData({ ...loginData, password: e.target.value })
                }
                dark={dark}
              />
              {errors.password && <ErrorMessage>{errors.password}</ErrorMessage>}
              
              {errors.login && <ErrorMessage>{errors.login}</ErrorMessage>}
              
              <Button type="submit">Login</Button>
            </Form>
            <Toggle dark={dark} onClick={() => setIsFlipped(true)}>
              Don't have an account? Register
            </Toggle>
          </Front>
          
          <Back dark={dark}>
            <Title>Register</Title>
            {success && <div style={{ color: '#23d160', marginBottom: '1rem' }}>{success}</div>}
            <Form onSubmit={handleRegister}>
              <Input
                type="text"
                placeholder="Name"
                value={registerData.name}
                onChange={(e) =>
                  setRegisterData({ ...registerData, name: e.target.value })
                }
                dark={dark}
              />
              {errors.name && <ErrorMessage>{errors.name}</ErrorMessage>}
              
              <Input
                type="email"
                placeholder="Email"
                value={registerData.email}
                onChange={(e) =>
                  setRegisterData({ ...registerData, email: e.target.value })
                }
                dark={dark}
              />
              {errors.email && <ErrorMessage>{errors.email}</ErrorMessage>}
              
              <Input
                type="password"
                placeholder="Password"
                value={registerData.password}
                onChange={(e) =>
                  setRegisterData({ ...registerData, password: e.target.value })
                }
                dark={dark}
              />
              {errors.password && <ErrorMessage>{errors.password}</ErrorMessage>}
              
              <Input
                type="password"
                placeholder="Confirm Password"
                value={registerData.confirmPassword}
                onChange={(e) =>
                  setRegisterData({ ...registerData, confirmPassword: e.target.value })
                }
                dark={dark}
              />
              {errors.confirmPassword && <ErrorMessage>{errors.confirmPassword}</ErrorMessage>}
              
              {errors.register && <ErrorMessage>{errors.register}</ErrorMessage>}
              
              <Button type="submit">Register</Button>
            </Form>
            <Toggle dark={dark} onClick={() => setIsFlipped(false)}>
              Already have an account? Login
            </Toggle>
          </Back>
        </Card>
      </CardContainer>
    </PageWrapper>
  );
};

export default LoginRegister;