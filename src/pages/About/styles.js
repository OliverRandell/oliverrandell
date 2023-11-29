import styled from 'styled-components'

export const ProfileLink = styled.li`
  margin-right: 0.5rem;
  margin-bottom: 0.5rem;
  display: inline-block;
  
`

export const AboutMe = styled.div`
  @media (max-width: 768px) {
    flex-direction: column;
    .main-content, aside {
      flex: auto;
    }
  }
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-items: flex-start;
  width: 100%;
  max-width: 1200px; /* Optional: Add a max-width for better content readability */
  margin: 0 auto;
  .main-content {
    flex: 2; /* Takes up 2/3 of available width */
    padding-right: 15px
  }
  aside {
    flex: 1; /* Takes up 1/3 of available width */
    padding-left: 15px
  }
  h2 {
    text-align: left;
  } 
`

export const SkillList = styled.ul`
  list-style-type: none;
  padding: 0;
`