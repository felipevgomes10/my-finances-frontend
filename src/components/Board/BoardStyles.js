import styled, { css } from 'styled-components'

export const BoardWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 108px 281px 256px;
  gap: 32px;

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
    grid-template-rows: 108px repeat(3, 281px);
  }
`

export const wrapperStyles = css`
  background: ${props => props.theme.colors.background};
  border-radius: 8px;
  padding: 1.6rem;
`
