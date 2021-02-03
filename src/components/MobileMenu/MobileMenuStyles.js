import styled from 'styled-components'
import { flex } from '../commonStyles'

export const MenuButton = styled.button`
  ${flex};
  width: 4.2rem;
  height: 4.2rem;
  border: 2px solid #ffffff;
  border-radius: 3px;
  background: none;
  outline: none;
  position: fixed;
  top: 1.6rem;
  left: 0.7rem;
  z-index: 10;
  transition: 0.3s;
  cursor: pointer;

  @media (min-width: 700px) {
    display: none;
  }

  @media (max-width: 370px) {
    width: 2.6rem;
    height: 2.6rem;
    left: 0.54rem;
  }

  span {
    display: inline-block;
    width: 20px;
    height: 2px;
    background: #ffffff;
    box-shadow: 0 6px 0 0 #ffffff, 0 -6px 0 0 #ffffff;
    transition: 0.3s;

    @media (max-width: 370px) {
      width: 15px;
      height: 1.5px;
    }
  }

  &.mobileMenuActive {
    left: 19.45rem;
    border: 2px solid ${props => props.theme.colors.secondary};

    span {
      width: 4px;
      height: 4px;
      transform: rotate(90deg);
      border-radius: 50%;
      background: ${props => props.theme.colors.secondary};
      box-shadow: 0 6px 0 0 ${props => props.theme.colors.secondary},
        0 -6px 0 0 ${props => props.theme.colors.secondary};
    }
  }
`
