// 📁 components/Footer.js
import React from 'react';
import styled from 'styled-components';
import { FiLayers, FiGithub } from 'react-icons/fi';

const FooterContainer = styled.footer`
  background-color: #0f172a;
  color: white;
  padding: 2rem;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  align-items: center;
  border-top: 1px solid #1e293b;
  box-shadow: 0 -2px 8px rgba(0, 0, 0, 0.1);

  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;
    gap: 1rem;
  }
`;

const Left = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
`;

const LogoIcon = styled(FiLayers)`
  font-size: 1.6rem;
  color: #38bdf8;
`;

const Info = styled.div`
  font-size: 0.95rem;
  color: #cbd5e1;
`;

const Tech = styled.div`
  font-size: 0.85rem;
  color: #94a3b8;
  font-weight: 500;
`;

const Right = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

const GitHubLink = styled.a`
  color: #38bdf8;
  font-size: 1.2rem;
  transition: color 0.2s ease;

  &:hover {
    color: #60a5fa;
  }
`;

const Copy = styled.div`
  font-size: 0.85rem;
  color: #64748b;
`;

function Footer() {
  return (
    <FooterContainer>
      <Left>
        <LogoIcon />
        <div>
          <Info>DSA Tracker – Smart coding dashboard to track & improve DSA daily.</Info>
          <Tech>Built with React, Styled-components, and 💙</Tech>
        </div>
      </Left>

      <Right>
        <GitHubLink href="https://github.com/pratik-shedge/dsa-tracker" target="_blank" rel="noreferrer">
          <FiGithub />
        </GitHubLink>
        <Copy>© {new Date().getFullYear()} Pratik Shedge</Copy>
      </Right>
    </FooterContainer>
  );
}

export default Footer;
