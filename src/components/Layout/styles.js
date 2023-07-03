import styled from 'styled-components'
import { Content } from 'carbon-components-react'

export const StyledContent = styled(Content)`
  margin-left: 16rem;
  min-height: 100vh;
  padding: 2rem;
  transform: translateZ(0);
  will-change: margin-left;
  display: block;
  box-sizing: border-box;
  @media (max-width: 640px) {
    margin-left: 0 !important;
  }
`