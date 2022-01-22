import type { NextPage } from 'next'
import MainLayout from '@/components/layouts/MainLayout'

const Home: NextPage = () => {
  return (
    <MainLayout>
      <div className='mt-10'>
        <p className='text-5xl font-bold'>Hello World</p>
      </div>
    </MainLayout>
  )
}

export default Home
