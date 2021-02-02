import styled, { css } from 'styled-components'
import { flex } from '../commonStyles'

export const EntryWrapper = styled.div`
  ${flex};
  justify-content: flex-start;
  width: 100%;
  height: 3.6rem;
  background: ${props => props.theme.colors.fontFade};
  border-radius: 10px;
  margin-bottom: 1.6rem;
  margin-bottom: 1.6rem;
  padding: 1rem;

  span {
    font-size: 1.4rem;
    line-height: 1.8rem;
    margin-right: 1rem;

    @media (max-width: 370px) {
      font-size: 1.2rem;
    }
  }

  span:nth-of-type(2) {
    color: ${props => props.theme.colors.positive};
    margin-right: auto;
  }

  ${props =>
    props.red &&
    css`
      span:nth-of-type(2) {
        color: ${props => props.theme.colors.error};
      }
    `}
`

export const EntryButtonsWrapper = styled.div`
  ${flex};

  button {
    border: none;
    background: none;
    outline: none;
    cursor: pointer;
  }

  button:not(:last-child) {
    margin-right: 1.6rem;

    @media (max-width: 370px) {
      margin-right: 1rem;
    }
  }

  button svg path {
    fill: ${props => props.theme.colors.background};
  }
`
