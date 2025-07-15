import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const Container = styled(motion.div)`
  max-width: 800px;
  margin: 3rem auto;
  padding: 2rem;
  background-color: ${({ dark }) => (dark ? '#1a1a1a' : '#fff')};
  color: ${({ dark }) => (dark ? '#e0e0e0' : '#2c3e50')};
  border-radius: 16px;
  box-shadow: ${({ dark }) =>
    dark ? '0 0 20px rgba(255, 255, 255, 0.04)' : '0 6px 24px rgba(0, 0, 0, 0.08)'};
  transition: background-color 0.3s ease, color 0.3s ease;
  text-align: center;
`;

const Heading = styled.h1`
  font-size: 2rem;
  font-weight: 800;
  margin-top: 1rem;
`;

const Paragraph = styled.p`
  font-size: 1.05rem;
  margin: 1.2rem 0;
  line-height: 1.8;
`;

const ProfileImage = styled(motion.img)`
  width: 130px;
  height: 130px;
  border-radius: 50%;
  object-fit: cover;
  border: 4px solid #3498db;
  margin-bottom: 1rem;
  box-shadow: 0 0 10px rgba(0,0,0,0.2);
`;

const ButtonGroup = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem;
  flex-wrap: wrap;
  margin-top: 1.5rem;
`;

const ButtonLink = styled.a`
  padding: 0.6rem 1.3rem;
  border-radius: 10px;
  font-weight: 600;
  text-decoration: none;
  color: white;
  background-color: ${({ type }) =>
    type === 'github' ? '#24292e' : '#0077b5'};
  transition: transform 0.2s ease;

  &:hover {
    transform: scale(1.05);
  }
`;

const AboutPage = () => {
  const dark = localStorage.getItem('dark-mode') === 'true';

  return (
    <Container
      dark={dark}
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      <ProfileImage
        src="https://avatars.githubusercontent.com/u/184251452?v=4"
        alt="Pratik Shedge"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.2, duration: 0.6 }}
      />

      <Heading>Pratik Shedge</Heading>

      <Paragraph>
        A B.Sc. CS student from <strong>Pune University</strong> who enjoys turning ideas into useful apps.
        This tracker helps me and others stay consistent with DSA — built with React.js, and a lot of curiosity.
      </Paragraph>

      <Paragraph>
        Passionate about <strong>problem solving</strong>, <strong>clean UI</strong>, and <strong>backend systems</strong>.
      </Paragraph>

      <ButtonGroup>
        <ButtonLink
          href="https://github.com/Pratik-shedge07"
          target="_blank"
          rel="noopener noreferrer"
          type="github"
        >
          🌐 GitHub
        </ButtonLink>
        <ButtonLink
          href="https://linkedin.com/in/pratik-shedge07"
          target="_blank"
          rel="noopener noreferrer"
          type="linkedin"
        >
          💼 LinkedIn
        </ButtonLink>
      </ButtonGroup>
    </Container>
  );
};

export default AboutPage;
