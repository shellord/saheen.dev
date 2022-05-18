import Link from 'next/link'
import { useRouter } from 'next/router'
import { HiOutlineSun, HiOutlineMoon } from 'react-icons/hi'
import { useTheme } from 'next-themes'
import MobileMenu from '@/components/MobileMenu'

type NavProps = {
  href: string
  label: string
}

const Navbar = () => {
  const { theme, setTheme } = useTheme()
  const router = useRouter()
  const sound = typeof Audio !== 'undefined' && new Audio()

  const isActive = (path: string) => {
    return router.pathname === path ? 'font-semibold' : 'text-gray-500'
  }

  const darkModeSwitchHandler = () => {
    if (!sound) {
      return
    }
    setTheme(theme === 'light' ? 'dark' : 'light')
    sound.src = '/sounds/click.mp3'
    sound.play()
  }

  const navClickHandler = () => {
    if (!sound) {
      return
    }
    sound.src = '/sounds/click2.mp3'
    sound.play()
  }

  const NavItem = ({ href, label }: NavProps) => {
    return (
      <button onClick={navClickHandler}>
        <Link href={href}>
          <a
            className={`${isActive(
              href
            )} rounded-lg transition-all sm:px-3 sm:py-2 hidden md:inline dark:hover:bg-gray-800 hover:bg-gray-200 `}
          >
            {label}
          </a>
        </Link>
      </button>
    )
  }

  return (
    <div className='dark:bg-gray-900 dark:bg-opacity-30 bg-gray-50/30  fixed top-0 left-0 right-0 max-w-3xl  z-50 mx-auto  px-5 pt-5 backdrop-filter backdrop-blur-lg pb-1'>
      <nav className=' flex justify-between items-center '>
        <MobileMenu />
        <div className='ml-[-0.60rem]'>
          <NavItem href='/' label='Home' />
          <NavItem href='/blog' label='Blog' />
          <NavItem href='/projects' label='Projects' />
          <NavItem href='/contact' label='Contact' />
        </div>
        <div>
          <button
            className='w-9 h-9 bg-gray-200 rounded-lg dark:bg-gray-800 flex items-center justify-center  hover:ring-2 ring-zinc-300 transition-all'
            onClick={darkModeSwitchHandler}
          >
            {theme === 'dark' ? (
              <HiOutlineSun size={20} />
            ) : (
              <HiOutlineMoon size={20} />
            )}
          </button>
        </div>
      </nav>
    </div>
  )
}

export default Navbar
