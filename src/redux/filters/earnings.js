const earnings = state => {
  const earnings = state.user.data?.user.entries.filter(
    entry => entry.type === 'earning'
  )
  return earnings
}

export default earnings
