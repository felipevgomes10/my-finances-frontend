import styled, { css } from 'styled-components'
import { flex } from '../commonStyles'

const flexColumn = css`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  flex-direction: column;
`

export const NavBar = styled.nav`
  width: 25.6rem;
  height: 100vh;
  background: ${props => props.theme.colors.primary};
  padding: 6rem 0 6rem 3rem;
  position: fixed;
  left: 0;
  top: 0;
`

export const DivBorder = styled.div`
  ${flexColumn};
  width: 100%;
  height: 100%;
  border-right: 2px solid ${props => props.theme.colors.border};

  h4 {
    ${flex};
    font-size: 1.4rem;
    line-height: 1.8rem;
    font-weight: 400;
    margin-bottom: 4.4rem;

    svg {
      margin-right: 0.4rem;
    }
  }
`

export const NavLinks = styled.div`
  ${flexColumn};
  width: 90%;

  div {
    ${flexColumn};
    width: 100%;

    a {
      ${flex};
      justify-content: flex-start;
      color: ${props => props.theme.colors.font};
      width: 13.2rem;
      height: 4.8rem;
      background: none;
      border-radius: 10px;
      font-size: 1.4rem;
      line-height: 1.8rem;
      padding: 1.6rem;
      transition: 0.3s;

      &:not(:last-child) {
        margin-bottom: 1.3rem;
      }

      &:hover,
      &.activeLink {
        background: ${props => props.theme.colors.background};
      }

      svg {
        margin-right: 0.4rem;
      }
    }
  }

  div:first-child {
    border-bottom: 2px solid ${props => props.theme.colors.border};
    padding-bottom: 3.2rem;
  }

  div:last-child {
    margin-top: 3.2rem;
  }
`
