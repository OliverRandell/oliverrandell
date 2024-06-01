import styled from 'styled-components';

export const HeaderContainer = styled.div`
  display: block;
  border: 1px solid red;
  background-color: #ccc;
  left: 0;
  top: 50vh;
  position: absolute;
  @media (max-width: 640px) {
    display: ${({ isHome }) => (!isHome ? 'none' : 'flex')};
    flex-direction: column;
  }
`;

export const Header = styled.div`
  display: flex;
  h1 {
    font-size: 48px;
    margin: 0;
  }
  @media (max-width: 640px) {
    flex-direction: column;
  }
`;

// export const Header = styled.h1`
//   font-size: 48px;
//   margin: 0;
// `;

export const Image = styled.img`
  width: 200px;
  height: 200px;
  margin-right: 1rem;
  border-radius: 50%;
`;

export const ViewResumeLink = styled.a`
  // display: flex;
  // text-decoration: none;
  // padding: 0.75rem 1.5rem;
  // font-weight: bold;
  // align-items: center;
  // margin-top: 1rem;
  // border: 2px solid #2ecc40;
  // background-color: rgba(46, 204, 64, 0.3);
  // transition: background-color 250ms ease;

  // &:hover {
  //   background-color: #2ecc40;
  // }

  // svg {
  //   fill: white;
  //   margin-left: 8px;
  // }
`;