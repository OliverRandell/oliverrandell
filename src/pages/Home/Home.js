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
            <p>A natural problem solver, I am passionate about creating impactful products that make a positive difference in the world.</p>
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
            <p>Hello! I’m a seasoned Product Lead at Sesimi and a startup founder with fifteen years of experience in web-based environments, specializing in Frontend Development and UX Design. With seven years as a Senior Product Manager, I currently manage product solutions for a leading brand management software company.</p>
            <p>My journey began with a 2:1 degree in Motorsports Engineering, starting my career as a race-car engineer. However, my passion for technology and design led me to self-learn Photoshop and HTML & CSS, pivoting into web design and development. This blend of engineering precision and creative flair has been the cornerstone of my career.</p>
            <p>My dual expertise in frontend engineering and UX design empowers me to bridge the gap between stakeholder expectations and technical realities, ensuring seamless project execution. I thrive on problem-solving and innovation, consistently delivering high-quality products that make a positive impact.</p>
            <p>In my current role, I leverage my technical, managerial, and creative skills to unite and lead the product team, driving success through collaboration and excellence. As I look to the future, I am eager to embrace new challenges in a forward-thinking organisation that values innovation and teamwork. Let’s create something extraordinary together!</p>
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