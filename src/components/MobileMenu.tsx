import { useEffect, useState } from 'react'
import Link from 'next/link'
import { HiOutlineMenuAlt4, HiOutlineX } from 'react-icons/hi'
import { motion } from 'framer-motion'

type MenuProps = {
  href: string
  label: string
}

const MobileMenu = () => {
  const [isOpen, setIsOpen] = useState(false)
  const sound = typeof Audio !== 'undefined' && new Audio()

  const list = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
  }
  const item = {
    hidden: { opacity: 0, x: '-50%' },
    visible: {
      opacity: 1,
      x: '0%',
    },
  }
  useEffect(() => {
    isOpen
      ? document.body.classList.add('overflow-hidden')
      : document !== undefined &&
        document.body.classList.remove('overflow-hidden')
    return () => {
      document.body.classList.remove('overflow-hidden')
    }
  }, [isOpen])
  const navClickHandler = () => {
    if (!sound) {
      return
    }
    sound.src = '/sounds/click2.mp3'
    sound.play()
    setIsOpen(false)
  }
  const MenuItem = ({ href, label }: MenuProps) => {
    return (
      <Link href={href}>
        <a>
          <motion.div variants={item}>
            <button
              onClick={navClickHandler}
              className='mb-5 w-full text-left py-3 border-b-2 border-gray-800'
            >
              {label}
            </button>
          </motion.div>
        </a>
      </Link>
    )
  }
  return (
    <div className='md:hidden'>
      <button onClick={() => setIsOpen(!isOpen)}>
        <div className='flex items-center justify-center h-9'>
          {isOpen ? <HiOutlineX size={20} /> : <HiOutlineMenuAlt4 size={20} />}
        </div>
      </button>
      {isOpen && (
        <motion.div
          className='dark:bg-gray-900 bg-gray-50 absolute w-full h-screen pt-6 pr-10 '
          initial='hidden'
          animate='visible'
          variants={list}
        >
          <MenuItem href='/' label='Home' />
          <MenuItem href='/blog' label='Blog' />
          <MenuItem href='/projects' label='Project' />
          <MenuItem href='/contact' label='Contact' />
        </motion.div>
      )}
    </div>
  )
}

export default MobileMenu
