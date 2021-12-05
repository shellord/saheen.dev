import { SiInstagram, SiYoutube, SiTwitter } from 'react-icons/si'
import { motion } from 'framer-motion'

export default function ContatSection() {
  const list = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
  }
  const item = {
    hidden: { opacity: 0, x: '-80%' },
    visible: {
      opacity: 1,
      x: '0%',
    },
  }

  return (
    <section className='flex h-screen bg-black snap-start items-center justify-center'>
      <motion.div
        initial='hidden'
        whileInView='visible'
        variants={list}
        className='text-white text-center text-xl md:flex  '
      >
        <motion.a
          href='https://www.instagram.com/saheen.dev/'
          target='_blank'
          rel='noreferrer'
          variants={item}
        >
          <SiInstagram
            size={100}
            className='mx-10 md:opacity-80 md:hover:opacity-100 cursor-pointer'
          />
        </motion.a>
        <motion.a
          href='https://www.youtube.com/channel/UCO9nfwZE7J7GkubwmUna9tA'
          target='_blank'
          rel='noreferrer'
          variants={item}
        >
          <SiYoutube
            size={100}
            className='mx-10 mt-10 md:mt-0 md:opacity-80 md:hover:opacity-100 '
          />
        </motion.a>
        <motion.a
          href='https://twitter.com/N3ckr0s'
          target='_blank'
          rel='noreferrer'
          variants={item}
        >
          <SiTwitter
            size={100}
            className='mx-10 mt-10 md:mt-0 md:opacity-80 md:hover:opacity-100 '
          />
        </motion.a>
      </motion.div>
    </section>
  )
}
