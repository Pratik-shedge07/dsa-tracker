import React from 'react';
import styled from 'styled-components';
import { Github } from 'lucide-react';

const FooterContainer = styled.footer`
  background: linear-gradient(to right, #0f2027, #203a43, #2c5364);
  color: #e4e6eb;
  padding: 1.5rem 2rem;
  text-align: center;
  font-size: 0.95rem;
  user-select: none;
  box-shadow: 0 -2px 12px rgba(0, 0, 0, 0.5);
  border-top: 1px solid rgba(255, 255, 255, 0.05);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.4rem;

  @media (max-width: 768px) {
    padding: 1.2rem 1rem;
    font-size: 0.85rem;
  }
`;

const FooterLogo = styled.div`
  font-weight: 800;
  font-size: 1.3rem;
  color: #ffffff;
  letter-spacing: 1.2px;
  text-shadow: 0 0 6px rgba(255, 255, 255, 0.2);
  transition: text-shadow 0.3s ease;

  &:hover {
    text-shadow: 0 0 12px rgba(255, 255, 255, 0.4);
  }
`;

const FooterText = styled.div`
  font-weight: 500;
  display: flex;
  align-items: center;
  gap: 0.4rem;
  flex-wrap: wrap;
`;

const ExternalLink = styled.a`
  color: #ffffff;
  display: inline-flex;
  align-items: center;
  background-color: rgba(255, 255, 255, 0.1);
  padding: 6px 12px;
  border-radius: 6px;
  font-weight: 500;
  text-decoration: none;
  transition: all 0.3s ease;

  &:hover {
    background-color: rgba(255, 255, 255, 0.2);
    transform: translateY(-2px);
  }

  svg {
    margin-right: 6px;
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
          <Github size={18} />
          GitHub Profile
        </ExternalLink>
      </FooterText>
    </FooterContainer>
  );
}
export default Footer;