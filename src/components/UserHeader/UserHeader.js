import React from 'react';
import { useLocation } from 'react-router-dom';
// import { ArrowRight16 } from '@carbon/icons-react';
import { HeaderContainer, Header, ViewResumeLink } from './styles';

const UserHeader = ({ user }) => {
  const location = useLocation();

  return (
    <HeaderContainer isHome={location.pathname === '/'}>
      <Header>
        
        <div>
          <ViewResumeLink
            href={`https://gitconnected.com/${user.basics.username}/resume`}
            target="_blank"
            rel="noopener noreferrer"
            className='btn'
          >
            View Résumé
            {/* <ArrowRight16 /> */}
          </ViewResumeLink>
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
          {/* <p>
            Blog:{' '}
            <a href={user.basics.blog} target="_blank" rel="noreferrer noopener">
              {user.basics.blog}
            </a>
          </p> */}
          {/* <p>{user.basics.yearsOfExperience} years of experience creating Digital Solutions</p> */}
        </div>
      </Header>
      <div>
       
      </div>
    </HeaderContainer>
  );
};

export default UserHeader;