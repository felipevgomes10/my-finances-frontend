import styled from 'styled-components'

export const WelcomeWrapper = styled.section`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  flex-direction: column;
  margin-bottom: 6.4rem;
`

export const WelcomeSign = styled.div`
  width: 100%;
  min-height: 15.5rem;
  background: linear-gradient(93.06deg, #383a41 1.87%, #1d1f26 98.66%);
  border-radius: 20px;
  padding: 3.2rem;

  h1 {
    font-size: 3.2rem;
    line-height: 4.2rem;
    margin-bottom: 0.8rem;
  }

  p {
    font-size: 1.4rem;
    line-height: 1.8rem;
    color: ${props => props.theme.colors.fontFade};
  }
`
