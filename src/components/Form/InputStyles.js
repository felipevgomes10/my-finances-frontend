import styled from 'styled-components'

export const LabelForm = styled.label`
  display: block;
  margin-bottom: 1.6rem;
`

export const InputForm = styled.input`
  width: 29.1rem;
  height: 4.5rem;
  background: ${props => props.theme.colors.font};
  border-radius: 10px;
  padding: 1.6rem;
  border: 2px solid transparent;
  margin-bottom: 1.6rem;
  transition: 0.3s;
  color: ${props => props.theme.colors.background};

  @media (max-width: 800px) {
    width: 100%;
  }

  &:focus {
    border: 2px solid ${props => props.theme.colors.fontFade};
    outline: none;
  }
`
