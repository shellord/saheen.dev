export const ease: [number, number, number, number] = [0.2, 0.7, 0.2, 1]

export const reveal = (index = 0) => ({
  initial: { opacity: 0, y: 14 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, delay: index * 0.05, ease },
})
