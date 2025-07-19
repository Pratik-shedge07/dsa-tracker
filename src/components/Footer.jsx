import React from 'react';
import styled from 'styled-components';

const FooterContainer = styled.footer`
  background: linear-gradient(to right, #0f2027, #203a43, #2c5364);
  color: #e4e6eb;
  padding: 1.2rem 1rem;
  text-align: center;
  font-size: 0.9rem;
  user-select: none;
  box-shadow: 0 -2px 8px rgba(0, 0, 0, 0.4);
`;

const ExternalLink = styled.a`
  color: #e4e6eb;
  font-weight: 500;
  text-decoration: none;
  margin-left: 0.3rem;
  transition: color 0.3s ease;

  &:hover {
    color: #ffffff;
    text-decoration: underline;
  }
`;

function Footer() {
  return (
    <FooterContainer>
      &copy; {new Date().getFullYear()} Pratik Shedge &nbsp;|&nbsp;
      <ExternalLink
        href="https://github.com/pratik-shedge"
        target="_blank"
        rel="noopener noreferrer"
      >
        GitHub
      </ExternalLink>
    </FooterContainer>
  );
}

export default Footer;
