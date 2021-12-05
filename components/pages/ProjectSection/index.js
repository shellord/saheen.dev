import { motion } from 'framer-motion'
import Image from 'next/image'
import { projects } from '/data/projects.json'

export default function ProjectSection() {
  const list = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
  }
  const item = {
    hidden: { opacity: 0, x: '-50%' },
    visible: {
      opacity: 1,
      x: '0%',
    },
  }
  return (
    <div className='flex h-screen flex-col items-center snap-start bg-black md:pt-20 py-10'>
      <div className='flex flex-1 flex-col w-screen md:w-2/3 justify-center  '>
        <motion.div
          initial='hidden'
          whileInView='visible'
          transition={{ duration: 1, type: 'spring', bounce: 0.3 }}
          variants={{
            visible: { opacity: 1, scale: 1 },
            hidden: { opacity: 0, scale: 0 },
          }}
        >
          <p className='text-white font-semibold text-xl md:text-4xl  w-full text-center'>
            Project Showcase
          </p>
        </motion.div>

        <motion.ol
          className='flex flex-col md:flex-row w-full h-full md:h-1/2 items-center'
          initial='hidden'
          whileInView='visible'
          variants={list}
        >
          {projects.map((project, index) => (
            <motion.li
              className='flex flex-1 w-2/3  md:h-2/3 justify-center items-center m-2 group'
              variants={item}
              key={index}
            >
              <Image
                src='/images/test.jpeg'
                layout='fill'
                className='opacity-50'
                priority
              />
              <div className='w-full h-full absolute bg-purple-500 mix-blend-multiply group-hover:bg-purple-900 duration-500 ' />
              <p className='z-20 text-white md:text-2xl font-semibold font-mono text-center group-hover:opacity-0 duration-500'>
                {project.title}
              </p>
              <div className='flex flex-col absolute justify-center items-center text-center opacity-0 group-hover:opacity-100 duration-300 transition ease-in h-full w-full '>
                <p className='text-white z-20 text-lg md:text-2xl font-thin'>
                  {project.description}
                </p>
                <a href={project.link} target='_blank' rel='noreferrer'>
                  <button className='text-white font-thin text-sm md:text-lg mt-4 md:mt-10 p-2 border  border-green-800 border-t-20 rounded-md hover:bg-indigo-700'>
                    View Project
                  </button>
                </a>
              </div>
            </motion.li>
          ))}
        </motion.ol>
      </div>
    </div>
  )
}
