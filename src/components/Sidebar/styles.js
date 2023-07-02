import styled from 'styled-components'
import { SideNav } from 'carbon-components-react'

export const StyledSideNav = styled(SideNav)`
a {
  color: #000;
  text-decoration: none;
}
  @media (max-width: 640px) {
    display: none;
  }
  @media (min-width: 641px) {
    display: flex;
    flex-direction: column;
    height: 100%;
    width: 16rem;
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    max-width: 16rem;
    border: 0;
    border-right: 1px solid #ccc;
    color: #525252;
    will-change: width;
    transition: width .11s cubic-bezier(.2,0,1,.9);
    overflow: hidden;
    ul {
      // display: flex;
      list-style-type: none;
      &:hover a {
        color: rgba(61,61,62,.28);
        transition: color .25s ease;
      }
    }
    ul a {
      padding: 1rem 0;
      display: block;
      text-transform: uppercase;
      &:hover {
        color: rgba(61,61,62,.7);
      }
    }
  }
`