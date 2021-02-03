import styled, { css } from 'styled-components'
import { flex } from '../../commonStyles'
import { wrapperStyles } from '../BoardStyles'

export const TableItemsWrapper = styled.div`
  ${flex};
  justify-content: flex-start;
  align-items: flex-start;
  flex-direction: column;
  ${wrapperStyles};
  overflow-y: auto;
  position: relative;

  & > button {
    position: absolute;
    top: 1.6rem;
    right: 1.6rem;
    border: none;
    outline: none;
    background: none;
    cursor: pointer;
  }

  h4 {
    font-weight: 700;
    font-size: 1.6rem;
    line-height: 2.1rem;
    margin-bottom: 1.6rem;
  }

  @media (max-width: 900px) {
    grid-column: 1/-1;
  }

  ${props =>
    props.first &&
    css`
      grid-column: 2/3;
      grid-row: 1/3;

      @media (max-width: 900px) {
        grid-row: 2/3;
      }

      h4 {
        color: ${props => props.theme.colors.error};
      }
    `}

  ${props =>
    props.second &&
    css`
      grid-column: 1/2;
      grid-row: 2/3;

      @media (max-width: 900px) {
        grid-row: 3/4;
      }

      h4 {
        color: ${props => props.theme.colors.positive};
      }
    `}

  ${props =>
    props.third &&
    css`
      grid-column: 1/-1;
      grid-row: 3/4;

      @media (max-width: 900px) {
        grid-row: 4/5;
      }

      h4 {
        color: ${props => props.theme.colors.font};
      }
    `}
  
  &::-webkit-scrollbar {
    width: 4px;
    height: 8.2rem;
    border-radius: 10px;
  }

  &::-webkit-scrollbar-thumb {
    background: ${props => props.theme.colors.secondary};
  }

  & + p {
    margin: 1.6rem;
  }
`
