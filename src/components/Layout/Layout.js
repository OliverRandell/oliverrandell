import React from 'react';
import Logo from '../Logo';
import Navbar from '../Navbar';
import UserHeader from '../UserHeader';
import MobileNav from '../MobileNav';

import { StyledContent, Header } from './styles';

const Layout = ({ user, children }) => {
  return (
    <>

      <Header className='container'>
        <Logo />
        <MobileNav />
        <Navbar />
      </Header>
      

      <StyledContent className='container'>
        
        <div>{children}</div>
        <UserHeader user={user} />
      </StyledContent>
    </>
  );
};

export default Layout;