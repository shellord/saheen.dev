import { SiInstagram, SiYoutube, SiTwitter } from 'react-icons/si'

export default function ContatSection() {
  return (
    <section className='flex h-screen bg-black snap-start items-center justify-center'>
      <p className='text-white text-center text-xl md:flex  '>
        <a
          href='https://www.instagram.com/saheen.dev/'
          target='_blank'
          rel='noreferrer'
        >
          <SiInstagram
            size={100}
            className='mx-10 md:opacity-80 md:hover:opacity-100 cursor-pointer'
          />
        </a>
        <a
          href='https://www.youtube.com/channel/UCO9nfwZE7J7GkubwmUna9tA'
          target='_blank'
          rel='noreferrer'
        >
          <SiYoutube
            size={100}
            className='mx-10 mt-10 md:mt-0 md:opacity-80 md:hover:opacity-100 '
          />
        </a>
        <a href='https://twitter.com/N3ckr0s' target='_blank' rel='noreferrer'>
          <SiTwitter
            size={100}
            className='mx-10 mt-10 md:mt-0 md:opacity-80 md:hover:opacity-100 '
          />
        </a>
      </p>
    </section>
  )
}
