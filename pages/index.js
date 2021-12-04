import Head from 'next/head'
import Image from 'next/image'
import 'tailwindcss/tailwind.css'

export default function Home() {
  return (
    <>
      <Head>
        <title>Saheen&apos;s Blog</title>
      </Head>
      <div className='container mx-auto text-center py-12 md:w-3/5'>
        <Image
          src='/images/profile.jpeg'
          width={144}
          height={144}
          className='rounded-full'
        />
        <h1 className='font-extrabold text-4xl py-3'>Saheen Shoukath</h1>
        <p className='md:text-2xl text-xl my-10 md:w-3/5 px-5 mx-auto md:text-center text-left '>
          Hello, I&apos;m <span className='font-bold'>Saheen</span>. I&apos;m a
          software engineer. <br /> I&apos;m currently doing Full Stack
          Development.
        </p>

        <div className='font-bold text-left mx-auto  md:w-3/5 md:px-20 px-5 text-3xl'>
          Blog
        </div>
      </div>
    </>
  )
}
