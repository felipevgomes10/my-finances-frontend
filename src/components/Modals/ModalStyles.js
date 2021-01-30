import styled, { keyframes, css } from 'styled-components'
import { flex } from '../commonStyles'

const slideDown = keyframes`
  to {
    opacity: 1;
    pointer-events: initial;
    transform: translate(-50%, -50%);
  }
`

export const Blur = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(34, 36, 44, 0.6);
  z-index: 1;
`

export const ModalWrapper = styled.form`
  ${flex};
  flex-direction: column;
  position: absolute;
  width: 39.2rem;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -90%);
  padding: 3.2rem 1.6rem 1.6rem;
  background: ${props => props.theme.colors.background};
  box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.25);
  border-radius: 20px;
  z-index: 2;
  opacity: 0;
  pointer-events: none;
  animation: ${slideDown} 0.3s forwards;

  svg {
    position: absolute;
    top: -32px;
    left: 50%;
    transform: translateX(-50%);
  }

  h4 {
    font-weight: 500;
    font-size: 1.6rem;
    line-height: 1.9rem;
    max-width: 226px;
    text-align: center;
  }

  ${props =>
    props.h4mb &&
    css`
      h4 {
        margin-bottom: 3.2rem;
      }
    `}

  ${props =>
    props.h4mbsm &&
    css`
      h4 {
        margin-bottom: 0.8rem;
      }
    `}
`

export const InputModal = styled.input`
  width: 20.9rem;
  height: ${({ height }) => height || '2.6rem'};
  background: ${props => props.theme.colors.font};
  border-radius: 2px;
  border: 2px solid transparent;
  margin: ${({ margin }) => (margin && '.8rem 0') || '1.6rem 0'};
  padding: ${({ padding }) => padding || '1.6rem'};
  transition: 0.3s;
  color: ${props => props.theme.colors.background};

  &:focus {
    border: 2px solid ${props => props.theme.colors.fontFade};
    outline: none;
  }
`

export const ButtonWrapper = styled.div`
  ${flex};

  ${props =>
    props.mt &&
    css`
      margin-top: 2.4rem;
    `}

  button {
    ${flex};
    color: ${props => props.theme.colors.secondary};
    border: none;
    outline: none;
    width: 6.1rem;
    height: 2.9rem;
    padding: 1.6rem;
    border-radius: 10px;
    transition: 0.3s;
    cursor: pointer;

    &:hover {
      transform: scale(1.1);
    }

    &:disabled {
      cursor: wait;
      background: ${props => props.theme.colors.secondaryLight};
    }

    &[disabled]:hover {
      transform: initial;
    }
  }

  button:first-child {
    margin-right: 1.6rem;
    background: ${props => props.theme.colors.secondaryLight};
  }

  button:last-child {
    border: 1px solid ${props => props.theme.colors.secondary};
    background: none;

    &:hover {
      background: ${props => props.theme.colors.secondary};
      color: ${props => props.theme.colors.font};
    }
  }
`
