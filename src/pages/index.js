import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useRouter } from 'next/router'

const Home = () => {
  const { user } = useSelector(state => state)
  const router = useRouter()

  useEffect(() => {
    if (!user.data) {
      router.push('/entrar')
    }
  }, [router, user.data])

  return <h1>My Finances</h1>
}

export default Home
