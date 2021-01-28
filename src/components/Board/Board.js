import React from 'react'
import PropTypes from 'prop-types'
import { BoardWrapper } from './BoardStyles'

const Board = ({ children }) => {
  return <BoardWrapper>{children}</BoardWrapper>
}

export default Board

Board.propTypes = {
  children: PropTypes.any
}
