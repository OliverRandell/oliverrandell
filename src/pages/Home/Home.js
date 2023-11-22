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
            <SectionTitle>{user.basics.headline} {user.basics.region}</SectionTitle>
          </div>
          <figure className="media">
            <Image src={user.basics.picture} />
          </figure>
        </HomeHeroWrapper>
      </HomeHero>
      <div className='feature-wrapper'>
        <SectionHeader>
          <SectionTitle>Timeline</SectionTitle>
          <p>Browse timeline of key career and lifetime events.</p>
        </SectionHeader>
        
        <Timeline />
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