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
  return { navBar, menuButton }
}

export const openMenu = () => dispatch => {
  const { navBar, menuButton } = getDomElements()
  dispatch(openMobileMenu())
  navBar.classList.add('navBarActive')
  menuButton.classList.add('mobileMenuActive')
}

export const closeMenu = () => dispatch => {
  const { navBar, menuButton } = getDomElements()
  dispatch(closeMobileMenu())
  navBar.classList.remove('navBarActive')
  menuButton.classList.remove('mobileMenuActive')
}

export default slice.reducer
