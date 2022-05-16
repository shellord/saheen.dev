import type { NextPage } from 'next'
import Image from 'next/image'
import { SiInstagram, SiYoutube, SiTwitter, SiGithub } from 'react-icons/si'
import Link from 'next/link'
import BlogPostCard from '@/components/BlogPostCard'
import TechStackCard from '@/components/TechStackCard'
import techstack from 'data/techstack.json'
import { motion } from 'framer-motion'
import ProjectCard from '@/components/ProjectCard'

type SocialButtonProps = {
  href: string
  icon: any
  label: string
}

const SocialButton = ({ icon, href, label }: SocialButtonProps) => {
  return (
    <Link href={href}>
      <a target='_blank'>
        <button className='flex items-center text-sm px-3 py-2 dark:hover:bg-gray-800 rounded-lg hover:bg-gray-200 transition-all'>
          {icon}
          <span className='pl-2'>{label}</span>
        </button>
      </a>
    </Link>
  )
}

const Home: NextPage = () => {
  const listVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
  }
  return (
    <div className='mt-10'>
      <div className='flex flex-col-reverse md:flex-row'>
        <div className='flex flex-col flex-1 items-center justify-end md:items-start md:pr-10'>
          <p className='text-2xl sm:text-4xl font-bold mt-10 md:mt-0'>
            Hi 👋 , I&apos;m Saheen Shoukath
          </p>
          <p className='mt-2 text-sm'>Your friendly neighborhood developer</p>
          <p className='text-gray-500 mt-2'>
            I&apos;m a computer science engineer and a freelance full-stack
            developer. I love to build things and solve problems.
          </p>
          <div className='sm:ml-[-0.5rem] grid grid-cols-3 sm:grid-cols-none sm:grid-flow-col mt-2'>
            <SocialButton
              label='Twitter'
              href='https://twitter.com/shell0rd'
              icon={<SiTwitter />}
            />
            <SocialButton
              label='Instagram'
              href='https://www.instagram.com/saheen.dev/'
              icon={<SiInstagram />}
            />
            <SocialButton
              label='Github'
              href='https://github.com/shellord'
              icon={<SiGithub />}
            />
            <SocialButton
              label='Youtube'
              href='https://www.youtube.com/channel/UCO9nfwZE7J7GkubwmUna9tA'
              icon={<SiYoutube />}
            />
          </div>
        </div>
        <div className='flex justify-center md:justify-end items-start'>
          <Image
            src='https://avatars.githubusercontent.com/u/2632896'
            width={176}
            height={176}
            alt='Saheen'
            className='rounded-full'
            priority
          />
        </div>
      </div>
      <div className='mt-16'>
        <p className='text-2xl sm:text-4xl font-bold'>My TechStack</p>
        <motion.div
          className='mt-10 grid grid-cols-2 gap-5 sm:grid-cols-4'
          variants={listVariants}
          initial='hidden'
          whileInView='visible'
        >
          {techstack.items.map(({ id, title, image, href }: any) => (
            <TechStackCard key={id} title={title} image={image} href={href} />
          ))}
        </motion.div>
      </div>

      <div className='mt-16'>
        <p className='text-2xl sm:text-4xl font-bold'>Featured Posts</p>
        <div className='mt-5 sm:ml-[-1.25rem]'>
          <BlogPostCard
            title='Why I start to blog again?'
            description='The reason I started blogging again is because I want to share my thoughts and learnings.'
            date={'11-05-2022'}
            slug='why-i-blog-again'
            readingTime='1 min read'
          />
        </div>
        <Link href={`/blog`}>
          <a>
            <p className='mt-3 text-gray-500 dark:hover:text-gray-50 hover:text-gray-900 transition-all'>
              Read all Posts →
            </p>
          </a>
        </Link>
      </div>
    </div>
  )
}

export default Home
