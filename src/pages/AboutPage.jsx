import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  max-width: 900px;
  margin: 3rem auto;
  padding: 2.5rem;
  background-color: ${({ dark }) => (dark ? '#181818' : '#ffffff')};
  color: ${({ dark }) => (dark ? '#e0e0e0' : '#2c3e50')};
  border-radius: 20px;
  box-shadow: ${({ dark }) =>
    dark
      ? '0 0 20px rgba(255, 255, 255, 0.04)'
      : '0 8px 30px rgba(0, 0, 0, 0.08)'};
  font-size: 1.1rem;
  line-height: 1.8;
  transition: background-color 0.3s ease, color 0.3s ease;
`;

const Header = styled.h1`
  font-size: 2.2rem;
  text-align: center;
  margin-bottom: 2rem;
  font-weight: 800;
`;

const Paragraph = styled.p`
  margin-bottom: 1.5rem;
`;

const Highlight = styled.span`
  color: #3498db;
  font-weight: bold;
`;

const BadgeRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
  margin: 2rem 0;
`;

const Badge = styled.span`
  background-color: ${({ dark }) => (dark ? '#2c3e50' : '#f0f0f0')};
  color: ${({ dark }) => (dark ? '#ffffff' : '#2c3e50')};
  padding: 0.5rem 1rem;
  border-radius: 20px;
  font-size: 0.9rem;
  font-weight: 600;
`;

const SocialLinks = styled.div`
  margin-top: 2.5rem;
`;

const ButtonLink = styled.a`
  display: inline-block;
  margin-right: 1rem;
  padding: 0.6rem 1.4rem;
  font-weight: 600;
  border-radius: 8px;
  background-color: ${({ type }) =>
    type === 'github' ? '#24292e' : type === 'linkedin' ? '#0077b5' : '#555'};
  color: white;
  text-decoration: none;
  transition: transform 0.2s ease;

  &:hover {
    transform: scale(1.05);
  }
`;

const AboutPage = () => {
  const dark = localStorage.getItem('dark-mode') === 'true';

  return (
    <Container dark={dark}>
      <Header>👋 Meet the Developer</Header>

      <Paragraph>
        Hey there! I’m <Highlight>Pratik Shedge</Highlight>, currently pursuing my B.Sc. in Computer Science from
        <Highlight> Savitribai Phule Pune University</Highlight>. I’m a self-taught full stack developer
        who loves building clean, useful, and intelligent software.
      </Paragraph>

      <Paragraph>
        This project — <strong>DSA Master Tracker</strong> — isn’t just another coding dashboard. I built it because
        I know how hard it is to stay consistent when learning Data Structures & Algorithms. I wanted something
        minimal yet powerful to track progress, reflect on past problems, set coding goals, and prepare smartly for tech interviews.
      </Paragraph>

      <Paragraph>
        It’s built using <Highlight>React.js</Highlight>, with features like smart filters, dark mode, CSV export,
        revision scheduling, and daily streaks — everything I wish I had when I started solving problems.
      </Paragraph>

      <Paragraph>
        I’m passionate about <strong>problem-solving</strong>, <strong>clean UI</strong>, and <strong>systems design</strong>.
        I enjoy turning ideas into reality through code and learning something new every single day.
      </Paragraph>

      <BadgeRow dark={dark}>
        <Badge dark={dark}>Java</Badge>
        <Badge dark={dark}>React.js</Badge>
        <Badge dark={dark}>MongoDB</Badge>
        <Badge dark={dark}>Spring Boot</Badge>
        <Badge dark={dark}>GitHub</Badge>
        <Badge dark={dark}>Frontend Dev</Badge>
        <Badge dark={dark}>DSA</Badge>
        <Badge dark={dark}>Problem Solving</Badge>
      </BadgeRow>

      <Paragraph>
        Whether I’m debugging a tricky algorithm, designing a tracker like this, or preparing for interviews —
        I try to stay grounded, consistent, and creative. I’m open to collaboration, internships, and learning opportunities.
      </Paragraph>

      <SocialLinks>
        <ButtonLink
          href="https://github.com/Pratik-shedge07"
          target="_blank"
          rel="noopener noreferrer"
          type="github"
        >
          🌐 GitHub
        </ButtonLink>
        <ButtonLink
          href="https://www.linkedin.com/in/pratik-shedge07/"
          target="_blank"
          rel="noopener noreferrer"
          type="linkedin"
        >
          💼 LinkedIn
        </ButtonLink>
      </SocialLinks>
    </Container>
  );
};

export default AboutPage;
