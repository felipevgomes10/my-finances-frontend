import styled, { css } from 'styled-components'
import { flex } from '../../commonStyles'
import { wrapperStyles } from '../BoardStyles'

export const BudgetWrapper = styled.div`
  ${wrapperStyles};

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
