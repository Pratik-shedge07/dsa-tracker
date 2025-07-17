import React from 'react';
import styled from 'styled-components';
import { NavLink, useNavigate } from 'react-router-dom';
import { Sun, Moon, LogOut, Home } from 'lucide-react';

const Nav = styled.nav`
  background-color: ${({ dark }) => (dark ? '#0d1117' : '#f4f6f8')};
  color: ${({ dark }) => (dark ? '#c9d1d9' : '#2c3e50')};
  padding: 1rem 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: ${({ dark }) =>
    dark ? '0 1px 8px rgba(255, 255, 255, 0.05)' : '0 1px 8px rgba(0, 0, 0, 0.1)'};
  position: sticky;
  top: 0;
  z-index: 100;
`;

const Logo = styled.div`
  font-weight: 700;
  font-size: 1.4rem;
  cursor: pointer;
  color: ${({ dark }) => (dark ? '#58a6ff' : '#2c3e50')};
  user-select: none;
`;

const NavItems = styled.div`
  display: flex;
  gap: 1rem;
  align-items: center;
`;

const StyledLink = styled(NavLink)`
  color: inherit;
  font-weight: 600;
  text-decoration: none;
  padding: 0.4rem 0.8rem;
  border-radius: 8px;
  transition: background-color 0.3s ease;

  &.active {
    background-color: ${({ dark }) => (dark ? '#238636' : '#a5d6ff')};
    color: ${({ dark }) => (dark ? '#d2f8d2' : '#034078')};
  }

  &:hover {
    background-color: ${({ dark }) => (dark ? '#30363d' : '#d0e7ff')};
  }
`;

const Button = styled.button`
  background: none;
  border: none;
  color: inherit;
  cursor: pointer;
  padding: 0.3rem 0.6rem;
  border-radius: 8px;
  font-size: 1.1rem;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: ${({ dark }) => (dark ? '#30363d' : '#d0e7ff')};
  }
`;

function Navbar({ darkMode, toggleDarkMode, isLoggedIn, onLogout }) {
  const navigate = useNavigate();

  const handleLogoutClick = () => {
    onLogout();
    navigate('/login');
  };

  return (
    <Nav dark={darkMode}>
      <Logo dark={darkMode} onClick={() => navigate('/')}>
        DSA Master Tracker
      </Logo>

      <NavItems>
        <StyledLink to="/" dark={darkMode}>
          Home
        </StyledLink>
        <StyledLink to="/questions" dark={darkMode}>
          Questions
        </StyledLink>
        <StyledLink to="/add" dark={darkMode}>
          Add
        </StyledLink>
        <StyledLink to="/export" dark={darkMode}>
          Export
        </StyledLink>
        <StyledLink to="/about" dark={darkMode}>
          About
        </StyledLink>

        <Button onClick={toggleDarkMode} dark={darkMode} title="Toggle Dark Mode" aria-label="Toggle Dark Mode">
          {darkMode ? <Sun size={18} /> : <Moon size={18} />}
        </Button>

        {isLoggedIn && (
          <Button onClick={handleLogoutClick} dark={darkMode} title="Logout" aria-label="Logout">
            <LogOut size={18} />
          </Button>
        )}
      </NavItems>
    </Nav>
  );
}

export default Navbar;
