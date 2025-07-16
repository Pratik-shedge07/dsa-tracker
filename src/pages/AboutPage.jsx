import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaUserGraduate } from 'react-icons/fa';

const Container = styled(motion.div)`
  max-width: 800px;
  margin: 3rem auto;
  padding: 2rem;
  background-color: ${({ dark }) => (dark ? '#1a1a1a' : '#ffffff')};
  color: ${({ dark }) => (dark ? '#e0e0e0' : '#2c3e50')};
  border-radius: 20px;
  box-shadow: ${({ dark }) =>
    dark ? '0 0 20px rgba(255, 255, 255, 0.05)' : '0 6px 20px rgba(0, 0, 0, 0.1)'};
  transition: background-color 0.3s ease, color 0.3s ease;
  text-align: center;
`;

const Heading = styled.h1`
  font-size: 2.2rem;
  font-weight: 800;
  margin-top: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
`;

const Paragraph = styled.p`
  font-size: 1.05rem;
  margin: 1.2rem 0;
  line-height: 1.8;
`;

const ProfileImage = styled(motion.img)`
  width: 140px;
  height: 140px;
  border-radius: 50%;
  object-fit: cover;
  border: 4px solid #38bdf8;
  margin-bottom: 1rem;
  box-shadow: 0 0 12px rgba(56, 189, 248, 0.5);
`;

const ButtonGroup = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem;
  flex-wrap: wrap;
  margin-top: 1.5rem;
`;

const ButtonLink = styled.a`
  display: flex;
  align-items: center;
  gap: 0.6rem;
  padding: 0.65rem 1.4rem;
  border-radius: 10px;
  font-weight: 600;
  text-decoration: none;
  font-size: 0.95rem;
  background-color: ${({ type }) =>
    type === 'github' ? '#24292e' : '#0077b5'};
  color: white;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
  transition: transform 0.2s ease, box-shadow 0.2s ease;

  &:hover {
    transform: scale(1.05);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.25);
  }
`;

const AboutPage = () => {
  const dark = localStorage.getItem('dark-mode') === 'true';

  return (
    <Container
      dark={dark}
      initial={{ opacity: 0, y: 40 }}
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

      <Heading>
        <FaUserGraduate /> Pratik Shedge
      </Heading>

      <Paragraph>
        A passionate <strong>B.Sc. CS student</strong> from <strong>Pune University</strong>, driven by the joy of building smart tools like this tracker to improve DSA consistency.
      </Paragraph>

      <Paragraph>
        I love working with <strong>React.js</strong>, designing clean UIs, and learning more about <strong>backend systems</strong>. This project reflects my passion for problem-solving and discipline.
      </Paragraph>

      <ButtonGroup>
        <ButtonLink
          href="https://github.com/Pratik-shedge07"
          target="_blank"
          rel="noopener noreferrer"
          type="github"
        >
          <FaGithub /> GitHub
        </ButtonLink>

        <ButtonLink
          href="https://linkedin.com/in/pratik-shedge07"
          target="_blank"
          rel="noopener noreferrer"
          type="linkedin"
        >
          <FaLinkedin /> LinkedIn
        </ButtonLink>
      </ButtonGroup>
    </Container>
  );
};

export default AboutPage;
