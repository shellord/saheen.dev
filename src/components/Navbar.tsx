import Link from 'next/link'
import { useRouter } from 'next/router'
import { HiOutlineSun, HiOutlineMoon } from 'react-icons/hi'
import { useTheme } from 'next-themes'

type NavProps = {
  href: string
  label: string
}

const Navbar = () => {
  const { theme, setTheme } = useTheme()
  const router = useRouter()

  const isActive = (path: string) => {
    return router.pathname === path ? 'font-semibold' : 'text-gray-500'
  }

  const NavItem = ({ href, label }: NavProps) => {
    return (
      <Link href={href}>
        <a
          className={`${isActive(
            href
          )} dark:hover:bg-gray-900 hover:bg-gray-200 rounded-lg transition-all sm:px-3 sm:py-2 hidden md:inline`}
        >
          {label}
        </a>
      </Link>
    )
  }

  return (
    <nav className='ml-[-0.60rem] flex justify-between items-center'>
      <div>
        <NavItem href='/' label='Home' />
        <NavItem href='/blog' label='Blog' />
        <NavItem href='/projects' label='Projects' />
        <NavItem href='/contact' label='Contact' />
      </div>
      <div className=''>
        <button
          type='button'
          className='w-9 h-9 bg-gray-200 rounded-lg dark:bg-gray-800 flex items-center justify-center  hover:ring-2 ring-zinc-300 transition-all'
          onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
        >
          {theme === 'dark' ? (
            <HiOutlineSun size={20} />
          ) : (
            <HiOutlineMoon size={20} />
          )}
        </button>
      </div>
    </nav>
  )
}

export default Navbar
