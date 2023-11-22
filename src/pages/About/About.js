import React from 'react';
import Layout from '../../components/Layout';
import { SectionTitle, Paragraph, Pill } from '../../styles';

import { AboutMe } from './styles';

const About = ({ user }) => {
  return (
    <Layout user={user}>
      <AboutMe className='feature-wrapper'>
        <div className='main-content'>
          <SectionTitle>My Mission</SectionTitle>
          <Paragraph>{user.basics.summary}</Paragraph>
        </div>
        <aside> 
          <SectionTitle>Skills</SectionTitle>
          <ul>
            {user.skills.map(skill => (
              <Pill key={skill.name}>{skill.name}</Pill>
            ))}
          </ul>
        </aside>
      </AboutMe>
    </Layout>
  );
};

export default About