import React from 'react';
import styled from 'styled-components';

const FooterContainer = styled.footer`
  background-color: ${({ dark }) => (dark ? '#0d1117' : '#f4f6f8')};
  color: ${({ dark }) => (dark ? '#8b949e' : '#4b5563')};
  padding: 1rem 2rem;
  text-align: center;
  font-size: 0.9rem;
  user-select: none;
  box-shadow: ${({ dark }) =>
    dark ? '0 -1px 8px rgba(255, 255, 255, 0.05)' : '0 -1px 8px rgba(0, 0, 0, 0.05)'};
`;

function Footer() {
  const darkMode = localStorage.getItem('dark-mode') === 'true';

  return (
    <FooterContainer dark={darkMode}>
      &copy; {new Date().getFullYear()} Pratik Shedge &nbsp;|&nbsp; DSA Master Tracker. All rights reserved.
    </FooterContainer>
  );
}

export default Footer;
