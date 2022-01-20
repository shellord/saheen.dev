import type { NextPage } from 'next'
import MainLayout from '@/components/layouts/MainLayout'

const Home: NextPage = () => {
  return (
    <div>
      <MainLayout />
      <p className='text-red-500 text-2xl'>Hello World</p>
    </div>
  )
}

export default Home
