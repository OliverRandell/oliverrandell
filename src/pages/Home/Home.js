import React from 'react';
import Layout from '../../components/Layout';
import Timeline from '../../components/Timeline';
import { SectionHeader, SectionTitle } from '../../styles';
import { Image, HomeHero, HomeHeroWrapper } from './styles';
import { ProfileLink } from './styles';

const Me = ({ user }) => {
  return (
    <Layout user={user}>
      <HomeHero className='feature-wrapper'>
        <HomeHeroWrapper>
          <div className='content'>
            <h1>{user.basics.name}</h1>
            <SectionTitle>{user.basics.region} based <span className='job-title'>Product manager</span></SectionTitle>
            <p>{user.basics.yearsOfExperience} years experience designing, developing and managing digital products. {user.basics.headline}</p>
          </div>
          <figure className="media">
            <Image src={user.basics.picture} />
          </figure>
        </HomeHeroWrapper>
      </HomeHero>
      <div className='feature-wrapper'>
        <div>
          <SectionHeader>
            <SectionTitle>Timeline</SectionTitle>
            <p>Browse timeline of key career and lifetime events.</p>
          </SectionHeader>
        
          <Timeline />
        </div>
      </div>
      <div>
        <SectionTitle>Profiles</SectionTitle>
        <ul>
          {user.basics.profiles.map((profile, i) => (
            <ProfileLink key={profile.network}>
              {i !== 0 && ' | '}
              <a href={profile.url} target="_blank" rel="noreferrer noopener">
                {profile.network}
              </a>
            </ProfileLink>
          ))}
        </ul>
      </div>
    </Layout>
  );
};

export default Me;