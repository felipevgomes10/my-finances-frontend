import React, { useCallback, useEffect } from 'react'
import { DivBorder, NavBar, NavLinks } from './NavbarStyles'
import MoneyIcon from '../../../public/navbar/money.svg'
import HistoryIcon from '../../../public/navbar/history.svg'
import EarningsIcon from '../../../public/navbar/earnings.svg'
import ExpensesIcon from '../../../public/navbar/expenses.svg'
import SignInIcon from '../../../public/navbar/sign-in.svg'
import SignUpIcon from '../../../public/navbar/sign-up.svg'
import LogOutIcon from '../../../public/navbar/log-out.svg'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useDispatch, useSelector } from 'react-redux'
import { userLogout } from '../../redux/reducers/user'
import MobileMenu from '../MobileMenu/MobileMenu'
import { closeMenu } from '../../redux/reducers/mobileMenu'

const Navbar = () => {
  const router = useRouter()
  const { user } = useSelector(state => state)
  const dispatch = useDispatch()

  useEffect(() => {
    const links = document.querySelectorAll('.NavLinksWrapper a')
    links.forEach(link => {
      const path = link.getAttribute('href')
      if (path === router.pathname) link.classList.add('activeLink')
      else link.classList.remove('activeLink')
    })
    dispatch(closeMenu())
  }, [dispatch, router.pathname])

  const handleLogout = useCallback(() => {
    if (user.data) {
      dispatch(userLogout())
    }
  }, [dispatch, user.data])

  return (
    <>
      <MobileMenu />
      <NavBar className="NavBar">
        <DivBorder>
          <h4>
            <MoneyIcon /> MyFinances
          </h4>
          <NavLinks className="NavLinksWrapper">
            {user.data && (
              <div>
                <Link href="/">
                  <a>
                    <HistoryIcon /> Histórico
                  </a>
                </Link>
                <Link href="/ganhos">
                  <a>
                    <EarningsIcon /> Ganhos
                  </a>
                </Link>
                <Link href="/gastos">
                  <a>
                    <ExpensesIcon /> Gastos
                  </a>
                </Link>
              </div>
            )}
            <div>
              {!user.data ? (
                <>
                  <Link href="/entrar">
                    <a>
                      <SignInIcon /> Entrar
                    </a>
                  </Link>
                  <Link href="/cadastrar">
                    <a>
                      <SignUpIcon /> Cadastrar
                    </a>
                  </Link>
                </>
              ) : (
                <Link href="/entrar">
                  <a onClick={handleLogout}>
                    <LogOutIcon /> Sair
                  </a>
                </Link>
              )}
            </div>
          </NavLinks>
        </DivBorder>
      </NavBar>
    </>
  )
}

export default Navbar
