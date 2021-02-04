import React from 'react'
import { WelcomeSign, WelcomeWrapper } from './WelcomeStyles'
import Proptypes from 'prop-types'
import { item } from '../../animations/fade'

const Welcome = ({ heading, text }) => {
  return (
    <WelcomeWrapper variants={item}>
      <WelcomeSign>
        <h1>{heading}</h1>
        <p>{text}</p>
      </WelcomeSign>
    </WelcomeWrapper>
  )
}

export default Welcome

Welcome.propTypes = {
  heading: Proptypes.string,
  text: Proptypes.string
}
