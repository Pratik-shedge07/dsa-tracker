import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Nav = styled.nav`
  background-color: ${({ dark }) => (dark ? '#1e1e1e' : '#ffffff')};
  color: ${({ dark }) => (dark ? '#f0f0f0' : '#2c3e50')};
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  margin-bottom: 2rem;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.08);
  border-radius: 12px;
  transition: background-color 0.3s ease, color 0.3s ease;
`;

const Title = styled.h1`
  font-size: 1.5rem;
  font-weight: 700;
`;

const Actions = styled.div`
  display: flex;
  gap: 1rem;
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
`;

const NavLink = styled(Link)`
  text-decoration: none;
  font-weight: 600;
  color: inherit;

  &:hover {
    text-decoration: underline;
  }
`;

function Navbar({ darkMode, toggleDarkMode }) {
  return (
    <Nav dark={darkMode}>
      <Title>DSA Master Tracker</Title>
      <Actions>
        <NavLink to="/">Dashboard</NavLink>
        <NavLink to="/add">Add</NavLink>
        <NavLink to="/questions">All</NavLink>
        <NavLink to="/export">Export</NavLink>
        <Button className="utility" onClick={toggleDarkMode}>
          {darkMode ? '🌞 Light Mode' : '🌙 Dark Mode'}
        </Button>
      </Actions>
    </Nav>
  );
}

export default Navbar;
