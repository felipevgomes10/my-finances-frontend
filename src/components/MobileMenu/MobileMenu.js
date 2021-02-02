import React, { useCallback } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { MenuButton } from './MobileMenuStyles'
import { openMenu, closeMenu } from '../../redux/reducers/mobileMenu'

const MobileMenu = () => {
  const { mobileMenu } = useSelector(state => state)
  const dispatch = useDispatch()

  const handleClick = useCallback(() => {
    if (!mobileMenu.open) {
      dispatch(openMenu())
    } else {
      dispatch(closeMenu())
    }
  }, [dispatch, mobileMenu.open])

  return (
    <MenuButton className="MobileMenu" onClick={handleClick}>
      <span></span>
    </MenuButton>
  )
}

export default MobileMenu
