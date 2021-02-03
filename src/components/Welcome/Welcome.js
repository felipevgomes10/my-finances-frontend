import React from 'react'
import { WelcomeSign, WelcomeWrapper } from './WelcomeStyles'
import Proptypes from 'prop-types'
import { useSelector } from 'react-redux'

const Welcome = ({ text }) => {
  const username = useSelector(state => state.user.data?.user.username)

  return (
    <WelcomeWrapper>
      <WelcomeSign>
        <h1>Olá, {username || 'ao MyFinances'}!</h1>
        <p>{text}</p>
      </WelcomeSign>
    </WelcomeWrapper>
  )
}

export default Welcome

Welcome.propTypes = {
  text: Proptypes.string
}
