const expenses = state => {
  const expenses = state.user.data?.user.entries.filter(
    entry => entry.type === 'expense'
  )
  return expenses
}

export default expenses
