import { PropsWithChildren } from 'react'
import Navbar from '@/components/Navbar'

const MainLayout = ({ children }: PropsWithChildren<{}>) => {
  return (
    <div className='min-h-[150vh] dark:bg-gray-900 bg-gray-50 text-gray-900 dark:text-gray-50 '>
      <div className='max-w-3xl min-h-screen  mx-auto px-5'>
        <Navbar />
        <main className='bg-gray-50 dark:bg-gray-900 pt-20'>{children}</main>
      </div>
    </div>
  )
}

export default MainLayout
