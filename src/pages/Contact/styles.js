import styled from 'styled-components'

export const ContactMe = styled.div`
 display: flex;
`

export const FeatureWall = styled.div`
  
	&::before {
		content: '';
		position: absolute;
		top: 0;
		left: 0;
		background-color: #aaa;
		height: 40rem;
		width: 40vw;
		z-index: -1;
		opacity: 0.1;
	}
`