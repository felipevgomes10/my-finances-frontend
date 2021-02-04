export const wrapper = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.5,
      delayChildren: 0.5,
      staggerChildren: 0.3
    }
  }
}

export const item = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
  transition: { duration: 0.5 }
}
