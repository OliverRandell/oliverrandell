import React from 'react';
import Layout from '../../components/Layout';
import { SectionTitle, Paragraph, Pill } from '../../styles';

import { AboutMe, SkillList } from './styles';

const About = ({ user }) => {
  return (
    <Layout user={user}>
      <AboutMe className='feature-wrapper'>
        <div className='main-content'>
          <SectionTitle>My Mission</SectionTitle>
          <Paragraph>{user.basics.summary}</Paragraph>
          <p>As I pursue further professional growth, I am seeking new challenges in a progressive organization. I am enthusiastic about applying my skills and experience in novel ways and contributing to an environment that values innovation and collaboration.</p>
        </div>
        <aside> 
          <SectionTitle>Skills</SectionTitle>
          <SkillList className='skills-list'>
            {user.skills.map(skill => (
              <Pill key={skill.name}>{skill.name}</Pill>
            ))}
          </SkillList>
        </aside>
      </AboutMe>
    </Layout>
  );
};

export default About