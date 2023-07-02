import React from 'react'

import { Container, Spacer, NavWrapper, NavLink } from './styles'

const MobileNav = () => {
  return (
    <Container>
      <Spacer />
      <NavWrapper>
        <NavLink to="/">
          Me
        </NavLink>
        <NavLink to="/projects">
          Projects
        </NavLink>
        <NavLink to="/work">
          Work
        </NavLink>
        <NavLink to="/education">
          Education
        </NavLink>
      </NavWrapper>
    </Container>
  )
}

export default MobileNav