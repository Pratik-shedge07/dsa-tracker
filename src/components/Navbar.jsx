import React from 'react';
import styled from 'styled-components';
import { NavLink as RouterNavLink, useNavigate } from 'react-router-dom';
import { FiLayers, FiMoon, FiSun, FiLogOut } from 'react-icons/fi';

const Nav = styled.nav`
  background-color: #0f172a;
  color: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.1rem 2rem;
  margin-bottom: 2rem;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  border-radius: 0;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 1rem;
    padding: 1rem;
  }
`;

const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

const LogoIcon = styled(FiLayers)`
  font-size: 1.8rem;
  color: #38bdf8;
`;

const Title = styled.h1`
  font-size: 1.4rem;
  font-weight: 800;
  margin: 0;
`;

const Actions = styled.div`
  display: flex;
  gap: 0.75rem;
  align-items: center;
  flex-wrap: wrap;
`;

const NavLink = styled(RouterNavLink)`
  text-decoration: none;
  font-weight: 600;
  color: white;
  padding: 0.5rem 0.9rem;
  transition: all 0.2s ease;

  &.active {
    color: #38bdf8;
    border-bottom: 2px solid #38bdf8;
  }

  &:hover {
    color: #38bdf8;
  }
`;

const IconButton = styled.button`
  background-color: transparent;
  border: 2px solid #38bdf8;
  color: white;
  display: flex;
  align-items: center;
  gap: 0.4rem;
  font-size: 0.95rem;
  font-weight: 600;
  padding: 0.45rem 0.9rem;
  cursor: pointer;
  border-radius: 6px;
  transition: all 0.2s ease;

  &:hover {
    background-color: #38bdf8;
    color: #0f172a;
    transform: scale(1.05);
  }

  &.logout {
    border-color: #ef4444;

    &:hover {
      background-color: #ef4444;
      color: white;
    }
  }
`;

function Navbar({ darkMode, toggleDarkMode, isLoggedIn, onLogout }) {
  const navigate = useNavigate();

  const handleLogout = () => {
    onLogout();
    navigate('/login');
  };

  return (
    <Nav>
      <LogoContainer>
        <LogoIcon />
        <Title>DSA Tracker</Title>
      </LogoContainer>

      <Actions>
        <NavLink to="/" className={({ isActive }) => (isActive ? 'active' : '')}>
          Dashboard
        </NavLink>
        <NavLink to="/add" className={({ isActive }) => (isActive ? 'active' : '')}>
          Add
        </NavLink>
        <NavLink to="/questions" className={({ isActive }) => (isActive ? 'active' : '')}>
          All
        </NavLink>
        <NavLink to="/export" className={({ isActive }) => (isActive ? 'active' : '')}>
          Export
        </NavLink>
        <NavLink to="/about" className={({ isActive }) => (isActive ? 'active' : '')}>
          About
        </NavLink>

        <IconButton onClick={toggleDarkMode}>
          {darkMode ? <FiSun size={18} /> : <FiMoon size={18} />}
          {darkMode ? 'Light' : 'Dark'}
        </IconButton>

        {isLoggedIn && (
          <IconButton className="logout" onClick={handleLogout}>
            <FiLogOut size={18} />
            Logout
          </IconButton>
        )}
      </Actions>
    </Nav>
  );
}

export default Navbar;
