import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useRouter } from 'next/router'

const Earnings = () => {
  const { user } = useSelector(state => state)
  const router = useRouter()

  useEffect(() => {
    if (!user.data) {
      router.push('/entrar')
    }
  }, [router, user.data])

  return <div>Ganhos</div>
}

export default Earnings
