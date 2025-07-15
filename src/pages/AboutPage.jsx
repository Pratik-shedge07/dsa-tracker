import React from 'react';

const AboutPage = () => {
  return (
    <div style={{
      padding: '2rem',
      maxWidth: '800px',
      margin: 'auto',
      lineHeight: '1.6',
      fontSize: '1.1rem'
    }}>
      <h1 style={{ marginBottom: '1rem' }}>👨‍💻 About the Developer</h1>

      <p>
        Hi, I'm <strong>Pratik Shedge</strong>, a passionate B.Sc. Computer Science student at
        <strong> Savitribai Phule Pune University</strong>.
      </p>

      <p>
        This <strong>DSA Progress Tracker</strong> is a personal project I built to help learners like me
        track their Data Structures & Algorithms journey. It’s designed with features like
        filtering, dark mode, progress tracking, and CSV export.
      </p>

      <p>
        I believe consistency is the key to cracking coding interviews and building strong fundamentals.
      </p>

      <p>
        🔗 Connect with me:<br />
        GitHub: <a href="https://github.com/pratikshedge" target="_blank" rel="noopener noreferrer">github.com/pratikshedge</a><br />
        LinkedIn: <a href="https://linkedin.com/in/pratik-shedge" target="_blank" rel="noopener noreferrer">linkedin.com/in/pratik-shedge</a>
      </p>
    </div>
  );
};

export default AboutPage;
