// 📁 components/Navbar.js
import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { FiLayers } from 'react-icons/fi';

const NavbarContainer = styled.nav`
  background-color: #0f172a;
  color: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  border-bottom: 1px solid #1e293b;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.3);
  position: sticky;
  top: 0;
  z-index: 10;
`;

const Logo = styled(Link)`
  display: flex;
  align-items: center;
  color: #38bdf8;
  font-size: 1.4rem;
  text-decoration: none;
  gap: 0.5rem;
`;

const Menu = styled.div`
  display: flex;
  gap: 1rem;
  align-items: center;

  a {
    color: white;
    text-decoration: none;
    font-weight: 500;

    &:hover {
      color: #60a5fa;
    }
  }
`;

function Navbar() {
  return (
    <NavbarContainer>
      <Logo to="/">
        <FiLayers />
        DSA Tracker
      </Logo>
      <Menu>
        <Link to="/dashboard">Dashboard</Link>
        <Link to="/add">Add</Link>
        <Link to="/all">All</Link>
        <Link to="/export">Export</Link>
        <Link to="/about">About</Link>
      </Menu>
    </NavbarContainer>
  );
}

export default Navbar;
