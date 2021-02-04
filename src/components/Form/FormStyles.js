import { motion } from 'framer-motion'
import styled from 'styled-components'

export const FormPage = styled(motion.form)`
  width: 100%;
  background: ${props => props.theme.colors.background};
  border-radius: 20px;
  padding: 3.2rem;

  h1 {
    font-size: 3.2rem;
    line-height: 4.2rem;
    margin-bottom: 3.2rem;
  }

  @media (max-width: 800px) {
    padding: 2.2rem;

    h1 {
      font-size: 2.2rem;
    }
  }
`
