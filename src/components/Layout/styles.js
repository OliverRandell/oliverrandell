import styled from 'styled-components'
import { Content } from 'carbon-components-react'

export const StyledContent = styled(Content)`
  margin: auto;
  max-width: 1200px;
  // min-height: 100vh;
  // padding: 2rem;
  // transform: translateZ(0);
  // will-change: margin-left;
  display: block;
  box-sizing: border-box;
  // @media (max-width: 640px) {
  //   margin-left: 0 !important;
  // }
`

export const Header = styled.header`
  width: 100%;
  max-width: 1200px;
  margin: 2rem auto 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
`