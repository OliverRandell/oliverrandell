import React from 'react';
import Layout from '../../components/Layout';
import Timeline from '../../components/Timeline';
import { SectionHeader, SectionTitle } from '../../styles';
import { Image, HomeHero, HomeHeroWrapper } from './styles';

const Me = ({ user }) => {
  return (
    <Layout user={user}>
      <HomeHero className='feature-wrapper'>
        <HomeHeroWrapper>
          <div className='content'>
            <h1>{user.basics.name}</h1>
            <SectionTitle><span className='position'>Product Manager</span> based in Melbourne</SectionTitle>
            <p>Currently, I’m a Product Lead for Sesimi and startup founder. Fifteen years experience in web based environment including a background in Frontend Development and UX Design.</p>
            <p>A problem solver at my core, my passion lies in building impactful products that make a positive dent in the world.</p>
          </div>
          <figure className="media">
            <Image src={user.basics.picture} />
          </figure>
        </HomeHeroWrapper>
      </HomeHero>

      <div className='feature-wrapper'>
        <div className='thirds'>
          <aside>
            <SectionHeader>
              <SectionTitle>About Me</SectionTitle>
            </SectionHeader>
          </aside>
          <div className='main-content'>
            <p>With 7 years of experience as a Senior Product Manager, I am currently managing product solutions for a brand management software company. My unique combination of frontend engineering and UX design expertise enables me to effectively handle both stakeholder management and technical discussions.</p>
            <p>I graduated from university with a 2:1 in Motorsports Engineering and started as a race-car engineer. However, my interest in technology and design led me to transition into web design and development.</p>
            <p>I taught myself Photoshop and HTML & CSS using resources like Sitepoint. The joy I experience in designing and creating is unparalleled and has greatly influenced my career path.</p>
            <p>Over time, I've grown into a managerial role. I bring my technical, managerial, and creative skills to my current position, acting as a unifying force within the product team and ensuring high-quality output.</p>
            <p>As I pursue further professional growth, I am seeking new challenges in a progressive organization. I am enthusiastic about applying my skills and experience in novel ways and contributing to an environment that values innovation and collaboration.</p>
          </div>
        </div>
      </div>

      <div className='feature-wrapper'>
        <div>
          <SectionHeader>
            <SectionTitle>Experiences &amp; Skills</SectionTitle>
            <p>Timeline of key career and lifetime events.</p>
          </SectionHeader>

          <Timeline />
        </div>
      </div>
    </Layout>
  );
};

export default Me;