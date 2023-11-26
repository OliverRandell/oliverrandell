import styled from 'styled-components'

export const ProfileLink = styled.li`
  margin-right: 0.5rem;
  margin-bottom: 0.5rem;
  display: inline-block;
  
`

export const HomeHero = styled.section`
  display: flex;
  align-items: center;
  margin: 0 auto;
`

export const HomeHeroWrapper = styled.section`
  // padding-right: 65px;
  // padding-left: 90px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  .content {
    //width: 560px;
    padding-right: 2rem;
  }
  .job-title {
    display: block;
  }
  .media {
    margin: 0;
    postion: relative;
    &:before {
      content: '';
      position: absolute;
      right: 0;
      top: 0;
      background-color: #aaa;
      opacity: 0.1;
      z-index: -1;
      height: 44rem;
      width: 40%;
    }
    img {
      background: #fff;
      padding: 1rem;
    }
  }
  h2 {
    text-align: left;
  }
`

export const Image = styled.img`
  margin-right: 0;
`;