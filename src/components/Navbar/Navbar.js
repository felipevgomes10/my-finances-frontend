import React, { useEffect } from 'react'
import { DivBorder, NavBar, NavLinks } from './NavbarStyles'
import MoneyIcon from '../../../public/navbar/money.svg'
import HistoryIcon from '../../../public/navbar/history.svg'
import EarningsIcon from '../../../public/navbar/earnings.svg'
import ExpensesIcon from '../../../public/navbar/expenses.svg'
import SignInIcon from '../../../public/navbar/sign-in.svg'
import SignUpIcon from '../../../public/navbar/sign-up.svg'
import Link from 'next/link'
import { useRouter } from 'next/router'

const Navbar = () => {
  const router = useRouter()

  useEffect(() => {
    const links = document.querySelectorAll('.NavLinksWrapper a')
    links.forEach(link => {
      const path = link.dataset.link
      if (path === router.pathname) link.classList.add('activeLink')
      else link.classList.remove('activeLink')
    })
  }, [router.pathname])

  return (
    <NavBar>
      <DivBorder>
        <h4>
          <MoneyIcon /> MyFinances
        </h4>
        <NavLinks className="NavLinksWrapper">
          <div>
            <Link href="/">
              <a data-link="/">
                <HistoryIcon /> Histórico
              </a>
            </Link>
            <Link href="/ganhos">
              <a data-link="/ganhos">
                <EarningsIcon /> Ganhos
              </a>
            </Link>
            <Link href="/gastos">
              <a data-link="/gastos">
                <ExpensesIcon /> Gastos
              </a>
            </Link>
          </div>
          <div>
            <Link href="/entrar">
              <a data-link="/entrar">
                <SignInIcon /> Entrar
              </a>
            </Link>
            <Link href="/cadastrar">
              <a data-link="/cadastrar">
                <SignUpIcon /> Cadastrar
              </a>
            </Link>
          </div>
        </NavLinks>
      </DivBorder>
    </NavBar>
  )
}

export default Navbar
