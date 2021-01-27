import React from 'react'
import { WelcomeSign, WelcomeWrapper } from './WelcomeStyles'
import Proptypes from 'prop-types'

const Welcome = ({ username, text }) => {
  return (
    <WelcomeWrapper>
      <WelcomeSign>
        <h1>Bem-vindo {username || 'ao MyFinances!'}</h1>
        <p>{text}</p>
      </WelcomeSign>
    </WelcomeWrapper>
  )
}

export default Welcome

Welcome.propTypes = {
  username: Proptypes.string,
  text: Proptypes.string
}
