import styled, { css } from 'styled-components'
import { flex } from '../../commonStyles'
import { wrapperStyles } from '../BoardStyles'

export const BudgetWrapper = styled.div`
  ${wrapperStyles};
  position: relative;

  @media (max-width: 900px) {
    grid-column: 1/-1;
    grid-row: 1/2;
  }

  div {
    position: absolute;
    top: 16px;
    right: 16px;

    button {
      background: none;
      outline: none;
      border: none;
      cursor: pointer;
    }

    button:first-child {
      margin-right: 16px;
    }
  }

  p,
  span {
    font-size: 1.4rem;
    font-weight: 400;

    @media (max-width: 370px) {
      font-size: 1.2rem;
    }
  }

  p:nth-of-type(1) span {
    color: ${props => props.theme.colors.secondary};
  }

  p:nth-of-type(2) span,
  p:nth-of-type(3) span {
    color: ${props => props.theme.colors.positive};
  }

  ${props =>
    props.red &&
    css`
      p:nth-of-type(2) span {
        color: ${props => props.theme.colors.error};
      }
    `}

  p:nth-of-type(4) span {
    color: ${props => props.theme.colors.error};
  }

  ${props =>
    props.addNew &&
    css`
      ${flex};
      flex-direction: column;

      h4 {
        font-size: 1.4rem;
        font-weight: 400;
        margin-bottom: 1.6rem;
      }

      button {
        background: none;
        border: none;
        outline: none;
        transition: 0.3s;
        cursor: pointer;

        &:hover {
          transform: scale(1.1);
        }
      }

      svg {
        height: 30px;
        width: 30px;
      }
    `}
`
