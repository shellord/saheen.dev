import { NextPage } from 'next'
import { motion } from 'framer-motion'
const Test: NextPage = () => {
  const list = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 }, zIndex: 1 },
  }
  const item = {
    hidden: { opacity: 0, x: '-50%', z: 0 },
    visible: {
      opacity: 1,
      x: '0%',
      delay: 1,
      z: 0,
    },
  }
  return (
    <div>
      <motion.div variants={list} initial='hidden' whileInView='visible'>
        Hello World
      </motion.div>
    </div>
  )
}

export default Test
