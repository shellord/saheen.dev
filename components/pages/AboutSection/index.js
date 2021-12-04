import Image from 'next/image'
import { motion } from 'framer-motion'

export default function AboutSection() {
  return (
    <section className='flex flex-col h-screen items-center justify-center snap-start bg-black px-10'>
      <motion.div
        initial='hidden'
        whileInView='visible'
        // viewport={{ once: true }}
        transition={{ duration: 0.3 }}
        variants={{
          visible: { opacity: 1, scale: 1 },
          hidden: { opacity: 0, scale: 0 },
        }}
      >
        <Image
          src='/images/profile.jpeg'
          width={'200'}
          height={'200'}
          className='rounded-full'
          priority={true}
        />
      </motion.div>
      <motion.div
        initial='hidden'
        whileInView='visible'
        transition={{ duration: 1, type: 'spring', bounce: 0.3 }}
        variants={{
          visible: { opacity: 1, scale: 1 },
          hidden: { opacity: 0, scale: 0 },
        }}
      >
        <p className='text-white py-10 text-2xl font-light text-left'>
          Hello, I&apos;m{' '}
          <span className='font-semibold text-green-500'>Saheen</span>. <br />
          I&apos;m a software engineer and a full-stack developer. <br />
        </p>
      </motion.div>
    </section>
  )
}
