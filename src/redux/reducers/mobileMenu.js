import { createSlice } from '@reduxjs/toolkit'

const slice = createSlice({
  name: 'mobileMenu',
  initialState: {
    open: false
  },
  reducers: {
    openMobileMenu(state) {
      state.open = true
    },
    closeMobileMenu(state) {
      state.open = false
    }
  }
})

const { openMobileMenu, closeMobileMenu } = slice.actions

const getDomElements = () => {
  const navBar = document.querySelector('.NavBar')
  const menuButton = document.querySelector('.MobileMenu')
  const blur = document.querySelector('.NavBarBlur')
  return { navBar, menuButton, blur }
}

export const openMenu = () => dispatch => {
  const { navBar, menuButton, blur } = getDomElements()
  dispatch(openMobileMenu())
  navBar.classList.add('navBarActive')
  menuButton.classList.add('mobileMenuActive')
  blur.style.display = 'block'
}

export const closeMenu = () => dispatch => {
  const { navBar, menuButton, blur } = getDomElements()
  dispatch(closeMobileMenu())
  navBar.classList.remove('navBarActive')
  menuButton.classList.remove('mobileMenuActive')
  blur.style.display = 'none'
}

export default slice.reducer
