import React from 'react';
import styled from 'styled-components';
import { NavLink as RouterNavLink, useNavigate } from 'react-router-dom';

const Nav = styled.nav`
  background-color: ${({ dark }) => (dark ? '#1a1a1a' : '#ffffff')};
  color: ${({ dark }) => (dark ? '#f0f0f0' : '#2c3e50')};
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  margin-bottom: 2rem;
  border-radius: 16px;
  box-shadow: ${({ dark }) =>
    dark ? '0 0 10px rgba(255,255,255,0.05)' : '0 2px 12px rgba(0,0,0,0.1)'};
  transition: background-color 0.3s ease, color 0.3s ease;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 1rem;
  }
`;

const Title = styled.h1`
  font-size: 1.6rem;
  font-weight: 800;
  letter-spacing: -0.5px;
`;

const Actions = styled.div`
  display: flex;
  gap: 1rem;
  align-items: center;
  flex-wrap: wrap;
`;

const NavLink = styled(RouterNavLink)`
  text-decoration: none;
  font-weight: 600;
  color: inherit;
  padding: 0.4rem 0.75rem;
  border-radius: 8px;
  transition: background-color 0.2s ease;

  &.active {
    background-color: ${({ dark }) => (dark ? '#333' : '#e0e0e0')};
  }

  &:hover {
    background-color: ${({ dark }) => (dark ? '#2a2a2a' : '#f0f0f0')};
  }
`;

const Button = styled.button`
  padding: 0.6rem 1.2rem;
  font-size: 1rem;
  font-weight: 600;
  border-radius: 8px;
  cursor: pointer;
  border: none;
  transition: background-color 0.2s ease, transform 0.2s ease;

  &.utility {
    background-color: #3498db;
    color: white;
  }

  &.utility:hover {
    background-color: #2c80b4;
    transform: scale(1.05);
  }

  &.logout {
    background-color: #e74c3c;
    color: white;
  }

  &.logout:hover {
    background-color: #c0392b;
    transform: scale(1.05);
  }
`;

function Navbar({ darkMode, toggleDarkMode, isLoggedIn, onLogout }) {
  const navigate = useNavigate();

  const handleLogout = () => {
    onLogout();
    navigate('/login');
  };

  return (
    <Nav dark={darkMode}>
      <Title>⚡ DSA Master Tracker</Title>
      <Actions>
        <NavLink to="/" dark={darkMode} className={({ isActive }) => (isActive ? 'active' : '')}>
          Dashboard
        </NavLink>
        <NavLink to="/add" dark={darkMode} className={({ isActive }) => (isActive ? 'active' : '')}>
          Add
        </NavLink>
        <NavLink to="/questions" dark={darkMode} className={({ isActive }) => (isActive ? 'active' : '')}>
          All
        </NavLink>
        <NavLink to="/export" dark={darkMode} className={({ isActive }) => (isActive ? 'active' : '')}>
          Export
        </NavLink>
        <NavLink to="/about" dark={darkMode} className={({ isActive }) => (isActive ? 'active' : '')}>
          About
        </NavLink>

        <Button className="utility" onClick={toggleDarkMode}>
          {darkMode ? '🌞 Light' : '🌙 Dark'}
        </Button>

        {isLoggedIn && (
          <Button className="logout" onClick={handleLogout}>
            🔓 Logout
          </Button>
        )}
      </Actions>
    </Nav>
  );
}

export default Navbar;
