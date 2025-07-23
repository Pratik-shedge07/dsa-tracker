import React, { useState } from 'react';
import styled from 'styled-components';
import { NavLink, useNavigate } from 'react-router-dom';
import { Sun, Moon, LogOut, Menu } from 'lucide-react';

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

  @media (max-width: 768px) {
    position: absolute;
    top: 64px;
    right: 0;
    background: linear-gradient(to right, #0f2027, #203a43, #2c5364);
    flex-direction: column;
    align-items: flex-start;
    width: 200px;
    padding: 1rem;
    box-shadow: -2px 2px 12px rgba(0, 0, 0, 0.3);
    transition: transform 0.3s ease;
    transform: ${({ open }) => (open ? 'translateX(0)' : 'translateX(110%)')};
    pointer-events: ${({ open }) => (open ? 'auto' : 'none')};
    opacity: ${({ open }) => (open ? 1 : 0)};
    z-index: 200;
  }
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

  @media (max-width: 768px) {
    width: 100%;
    padding: 0.7rem 0.9rem;
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

const Hamburger = styled.button`
  display: none;
  background: none;
  border: none;
  color: #e4e6eb;
  cursor: pointer;
  padding: 0.3rem 0.6rem;
  border-radius: 8px;
  font-size: 1.5rem;
  margin-left: 1rem;

  @media (max-width: 768px) {
    display: block;
  }
`;

function Navbar({ darkMode, toggleDarkMode, isLoggedIn, onLogout }) {
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);

  const handleLogoutClick = () => {
    onLogout();
    navigate('/login');
    setMenuOpen(false);
  };

  const handleNavClick = (to) => {
    navigate(to);
    setMenuOpen(false);
  };

  return (
    <Nav>
      <Logo onClick={() => handleNavClick('/')}>DSA Master Tracker</Logo>
      <Hamburger
        aria-label={menuOpen ? 'Close menu' : 'Open menu'}
        aria-expanded={menuOpen}
        aria-controls="navbar-menu"
        onClick={() => setMenuOpen((open) => !open)}
      >
        <Menu size={28} />
      </Hamburger>
      <NavItems id="navbar-menu" open={menuOpen}>
        <StyledLink to="/" end onClick={() => setMenuOpen(false)}>
          Home
        </StyledLink>
        <StyledLink to="/questions" onClick={() => setMenuOpen(false)}>
          Questions
        </StyledLink>
        <StyledLink to="/add" onClick={() => setMenuOpen(false)}>
          Add
        </StyledLink>
        <StyledLink to="/export" onClick={() => setMenuOpen(false)}>
          Export
        </StyledLink>
        <StyledLink to="/about" onClick={() => setMenuOpen(false)}>
          About
        </StyledLink>
      
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
