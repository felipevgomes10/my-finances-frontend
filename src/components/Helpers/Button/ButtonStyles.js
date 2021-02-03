import styled from 'styled-components'
import { flex } from '../../commonStyles'

export const ButtonForm = styled.button`
  ${flex};
  width: 12.2rem;
  height: 4.3rem;
  background: ${props => props.theme.colors.secondary};
  border: none;
  outline: none;
  border-radius: 10px;
  padding: 1.6rem 3.2rem;
  transition: 0.3s;
  cursor: pointer;

  &:hover {
    transform: scale(1.05);
  }

  &:disabled {
    cursor: wait;
    background: ${props => props.theme.colors.secondaryLight};
  }

  &[disabled]:hover {
    transform: initial;
  }

  @media (max-width: 800px) {
    width: 100%;
  }
`
