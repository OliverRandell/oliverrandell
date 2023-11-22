import React from 'react';
import Logo from '../Logo';
import Navbar from '../Navbar';
import UserHeader from '../UserHeader';
import MobileNav from '../MobileNav';

import { StyledContent, Header } from './styles';

const Layout = ({ user, children }) => {
  return (
    <>

      <Header>
        <Logo />
        <MobileNav />
        <Navbar />
      </Header>
      

      <StyledContent>
        
        <div>{children}</div>
        <UserHeader user={user} />
      </StyledContent>
    </>
  );
};

export default Layout;