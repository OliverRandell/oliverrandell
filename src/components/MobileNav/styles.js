import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.div`
  display: none;

  @media (max-width: 640px) {
    display: block;
  }
`;

export const Spacer = styled.div`
  height: 48px;
`;

export const NavWrapper = styled.div`
  display: flex;
  justify-content: center;
  position: fixed;
  width: 100vw;
  top: 0;
  left: 0;
  z-index: 1;
  border-bottom: 1px solid #ccc;
  background: rgba(255, 255, 255, 0.9);
`;

export const NavLink = styled(Link)`
  width: 25%;
  text-align: center;
  text-decoration: none;
  padding: 1rem 0;
`;