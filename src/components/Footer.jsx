import React from 'react';
import styled from 'styled-components';

const FooterContainer = styled.footer`
  background: linear-gradient(to right, #0f2027, #203a43, #2c5364);
  color: #e4e6eb;
  padding: 1.2rem 2rem;
  text-align: center;
  font-size: 0.95rem;
  user-select: none;
  box-shadow: 0 -2px 8px rgba(0, 0, 0, 0.4);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.3rem;

  @media (max-width: 768px) {
    padding: 1rem 0.5rem;
    font-size: 0.85rem;
  }
`;

const FooterLogo = styled.div`
  font-weight: 700;
  font-size: 1.2rem;
  color: #ffffff;
  letter-spacing: 1px;
  margin-bottom: 0.2rem;
`;

const FooterText = styled.div`
  font-weight: 500;
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
      <FooterLogo>DSA Master Tracker</FooterLogo>
      <FooterText>
        &copy; {new Date().getFullYear()} Pratik Shedge &nbsp;|&nbsp;
        <ExternalLink
          href="https://github.com/pratik-shedge"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub
        </ExternalLink>
      </FooterText>
    </FooterContainer>
  );
}

export default Footer;
