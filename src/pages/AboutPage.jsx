import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaUserGraduate, FaDownload, FaReact, FaNodeJs } from 'react-icons/fa';
import { SiMongodb, SiStyledcomponents } from 'react-icons/si';

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
  background-color: ${({ type }) => {
    switch (type) {
      case 'github':
        return '#24292e';
      case 'linkedin':
        return '#0077b5';
      case 'resume':
        return '#38bdf8';
      default:
        return '#4b5563';
    }
  }};
  color: white;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
  transition: transform 0.2s ease, box-shadow 0.2s ease;

  &:hover {
    transform: scale(1.05);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.25);
  }
`;

const TechStack = styled.div`
  margin-top: 2.2rem;
`;

const StackTitle = styled.h3`
  font-size: 1.2rem;
  font-weight: 700;
  margin-bottom: 0.8rem;
  color: ${({ dark }) => (dark ? '#93c5fd' : '#1e3a8a')};
`;

const StackIcons = styled.div`
  display: flex;
  justify-content: center;
  gap: 1.5rem;
  flex-wrap: wrap;
  font-size: 1.8rem;

  svg {
    transition: transform 0.3s;
    &:hover {
      transform: scale(1.2);
    }
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
        A <strong>B.Sc. CS student</strong> from <strong>Pune University</strong> building practical tools like this <strong>DSA Tracker</strong> to help coders stay consistent.
      </Paragraph>

      <Paragraph>
        I enjoy working on <strong>React UIs</strong>, solving <strong>DSA problems</strong>, and diving into <strong>full-stack development</strong>. This project is a reflection of passion, patience, and progress.
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

        <ButtonLink
          href="/Pratik_Shedge_Resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          type="resume"
        >
          <FaDownload /> Resume
        </ButtonLink>
      </ButtonGroup>

      <TechStack dark={dark}>
        <StackTitle dark={dark}>Tech Stack</StackTitle>
        <StackIcons>
          <FaReact color="#61dafb" title="React" />
          <SiStyledcomponents color="#db7093" title="styled-components" />
          <FaNodeJs color="#3c873a" title="Node.js" />
          <SiMongodb color="#4db33d" title="MongoDB" />
        </StackIcons>
      </TechStack>
    </Container>
  );
};

export default AboutPage;
