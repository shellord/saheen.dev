import { useEffect, useState } from 'react'
import Link from 'next/link'
import { HiOutlineMenuAlt4, HiOutlineX } from 'react-icons/hi'

type MenuProps = {
  href: string
  label: string
}

const MobileMenu = () => {
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    isOpen
      ? document.body.classList.add('overflow-hidden')
      : document !== undefined &&
        document.body.classList.remove('overflow-hidden')
    return () => {
      document.body.classList.remove('overflow-hidden')
    }
  }, [isOpen])

  const MenuItem = ({ href, label }: MenuProps) => {
    return (
      <Link href={href}>
        <a>
          <button onClick={() => setIsOpen(false)}>{label}</button>
        </a>
      </Link>
    )
  }
  return (
    <div className='md:hidden'>
      <button onClick={() => setIsOpen(!isOpen)}>
        <div className='h-9'>
          {isOpen ? <HiOutlineX size={20} /> : <HiOutlineMenuAlt4 size={20} />}
        </div>
      </button>
      {isOpen && (
        <div className='dark:bg-gray-900 bg-gray-50 absolute w-full h-screen pt-6 px-5 z-99 flex flex-col'>
          <MenuItem href='/' label='Home' />
          <MenuItem href='/blog' label='Blog' />
          <MenuItem href='/projects' label='Project' />
          <MenuItem href='/contact' label='Contact' />
        </div>
      )}
    </div>
  )
}

export default MobileMenu
