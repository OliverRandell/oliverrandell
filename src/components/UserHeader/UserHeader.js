import React from 'react';
import { useLocation } from 'react-router-dom';
// import { ArrowRight16 } from '@carbon/icons-react';
import { HeaderContainer, Header, Image, ViewResumeLink } from './styles';

const UserHeader = ({ user }) => {
  const location = useLocation();

  return (
    <HeaderContainer isHome={location.pathname === '/'}>
      <Header>
        
        <div>
          {/* <h1>Name: {user.basics.name}</h1> */}
          {/* <h4>Gitconnected User name:
            <a
              href={`https://gitconnected.com/${user.basics.username}`}
              target="_blank"
              rel="noreferrer noopener"
            >
              @{user.basics.username}
            </a>
          </h4> */}
          {/* <p>Github: {user.basics.label}</p> */}
          <p>{user.basics.yearsOfExperience} years of experience as a developer</p>
          <p>
            Blog:{' '}
            <a href={user.basics.blog} target="_blank" rel="noreferrer noopener">
              {user.basics.blog}
            </a>
          </p>
        </div>
      </Header>
      <div>
        <ViewResumeLink
          href={`https://gitconnected.com/${user.basics.username}/resume`}
          target="_blank"
          rel="noopener noreferrer"
        >
          <span>View Résumé</span>
          {/* <ArrowRight16 /> */}
        </ViewResumeLink>
      </div>
    </HeaderContainer>
  );
};

export default UserHeader;