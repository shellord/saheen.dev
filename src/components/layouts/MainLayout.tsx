import { PropsWithChildren } from 'react'
import Navbar from '@/components/Navbar'

const MainLayout = ({ children }: PropsWithChildren<{}>) => {
  return (
    <div className='min-h-screen dark:bg-gray-900 bg-neutral-50 text-gray-900 dark:text-gray-50'>
      <div className='max-w-2xl min-h-screen mx-auto pt-10 px-5'>
        <Navbar />
        <main className='flex flex-col justify-center bg-gray-50 dark:bg-gray-900'>
          {children}
        </main>
      </div>
    </div>
  )
}

export default MainLayout
