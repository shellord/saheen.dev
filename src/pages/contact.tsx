import { NextPage } from 'next'

const Contact: NextPage = () => {
  return (
    <div>
      <p className='text-2xl sm:text-4xl font-bold'>Contact</p>
      <div className='mt-10 '>
        <a
          href='mailto:saheenshoukath@gmail.com'
          className='flex items-center space-x-2'
        >
          <span className='text-xl'>✉️</span>
          <span>saheenshoukath@gmail.com</span>
        </a>
      </div>
    </div>
  )
}

export default Contact
