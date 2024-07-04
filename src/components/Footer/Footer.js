import React from 'react';
import { FooterContainer } from './styles'; // Adjust the path as needed
import { SectionHeader, SectionTitle } from '../../styles';

const Footer = () => {
  return (
    <FooterContainer>
      <div className='feature-wrapper'>
        <div className='thirds'>
          <aside>
            <SectionHeader>
              <SectionTitle>Connect with me</SectionTitle>
            </SectionHeader>
          </aside>
          <div className='main-content'>
            <h3>Oliver Randell</h3>
            <a href="mailto:oliverrandell@gmail.com">oliverrandell@gmail.com</a>
            <p>0451 029 748</p>
            <p>Socials</p>
            <ul>
              <li>
                <a href="">Instagram</a>
              </li>
              <li>
                <a href="">Linked In</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </FooterContainer>
  );
}

export default Footer;