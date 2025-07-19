import React from 'react';
import styled from 'styled-components';
import { NavLink, useNavigate } from 'react-router-dom';
import { Sun, Moon, LogOut } from 'lucide-react';

const Nav = styled.nav`
  background: linear-gradient(to right, #0f2027, #203a43, #2c5364);
  color: #e4e6eb;
  padding: 1rem 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0 1px 8px rgba(0, 0, 0, 0.6);
  position: sticky;
  top: 0;
  z-index: 100;
`;

const Logo = styled.div`
  font-weight: 700;
  font-size: 1.5rem;
  cursor: pointer;
  color: #ffffff;
  user-select: none;
`;

const NavItems = styled.div`
  display: flex;
  gap: 1rem;
  align-items: center;
`;

const StyledLink = styled(NavLink)`
  color: #e4e6eb;
  font-weight: 600;
  text-decoration: none;
  padding: 0.4rem 0.9rem;
  border-radius: 8px;
  transition: background-color 0.3s ease;

  &.active {
    background-color: #145374;
    color: #ffffff;
  }

  &:hover {
    background-color: rgba(255, 255, 255, 0.1);
  }
`;

const Button = styled.button`
  background: none;
  border: none;
  color: #e4e6eb;
  cursor: pointer;
  padding: 0.3rem 0.6rem;
  border-radius: 8px;
  font-size: 1.1rem;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: rgba(255, 255, 255, 0.1);
  }
`;

function Navbar({ darkMode, toggleDarkMode, isLoggedIn, onLogout }) {
  const navigate = useNavigate();

  const handleLogoutClick = () => {
    onLogout();
    navigate('/login');
  };

  return (
    <Nav>
      <Logo onClick={() => navigate('/')}>DSA Master Tracker</Logo>

      <NavItems>
        <StyledLink to="/" className={({ isActive }) => (isActive ? 'active' : '')}>
          Home
        </StyledLink>
        <StyledLink to="/questions" className={({ isActive }) => (isActive ? 'active' : '')}>
          Questions
        </StyledLink>
        <StyledLink to="/add" className={({ isActive }) => (isActive ? 'active' : '')}>
          Add
        </StyledLink>
        <StyledLink to="/export" className={({ isActive }) => (isActive ? 'active' : '')}>
          Export
        </StyledLink>
        <StyledLink to="/about" className={({ isActive }) => (isActive ? 'active' : '')}>
          About
        </StyledLink>

        <Button onClick={toggleDarkMode} title="Toggle Dark Mode" aria-label="Toggle Dark Mode">
          {darkMode ? <Sun size={18} /> : <Moon size={18} />}
        </Button>

        {isLoggedIn && (
          <Button onClick={handleLogoutClick} title="Logout" aria-label="Logout">
            <LogOut size={18} />
          </Button>
        )}
      </NavItems>
    </Nav>
  );
}

export default Navbar;
