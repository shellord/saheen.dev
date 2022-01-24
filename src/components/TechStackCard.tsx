import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'

type TechStackCardProps = {
  title: string
  image: string
  href: string
}

const TechStackCard = ({ title, image, href }: TechStackCardProps) => {
  const itemVariant = {
    hidden: { opacity: 0, y: '-50%' },
    visible: {
      opacity: 1,
      y: '0%',
    },
  }
  return (
    <Link href={href}>
      <a target='_blank'>
        <motion.div variants={itemVariant}>
          <div className='bg-gray-800 flex flex-col rounded-lg overflow-hidden shadow-lg hover:scale-110 transition-all duration-300'>
            <div className='flex align-center justify-center py-7 px-7 flex-1'>
              <div className='relative flex flex-1 h-[3rem]'>
                <Image
                  src={image}
                  layout='fill'
                  alt={title}
                  className='object-contain'
                />
              </div>
            </div>
            <p className='text-gray-50 flex justify-center bg-black p-1'>
              {title}
            </p>
          </div>
        </motion.div>
      </a>
    </Link>
  )
}

export default TechStackCard
