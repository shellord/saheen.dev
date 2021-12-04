import Typewriter from 'typewriter-effect'
import { motion } from 'framer-motion'
import { useState } from 'react'

export default function HeroSection() {
  const [isAnimationComplete, setAnimationComplete] = useState(false)

  return (
    <section className='flex flex-col items-center justify-center h-screen bg-black space-y-10 snap-start'>
      <motion.div
        animate={{ scale: 2 }}
        transition={{ duration: 1 }}
        onAnimationComplete={() => setAnimationComplete(true)}
      >
        <div className='text-white text-xl md:text-4xl font-bold font-sans'>
          Saheen <span className='text-white'>Shoukath</span>
        </div>
      </motion.div>
      <div className='text-green-100 text-2xl md:text-3xl font-light h-10 font-mono'>
        {isAnimationComplete && (
          <Typewriter
            options={{
              strings: ['Fullstack', 'UI/UX', 'Developer'],
              autoStart: true,
              loop: true,
              cursorClassName:
                'Typewriter__cursor text-green-500 font-semibold text-4xl',
            }}
          />
        )}
      </div>
    </section>
  )
}
