import Image from 'next/image'
import Link from 'next/link'

type TechStackCardProps = {
  title: string
  image: string
  width: number
  height: number
  href: string
}

const TechStackCard = ({
  title,
  image,
  width,
  height,
  href,
}: TechStackCardProps) => {
  return (
    <Link href={href}>
      <a target='_blank'>
        <div className='bg-gray-500 flex flex-col rounded-lg overflow-hidden shadow-lg hover:scale-110 transition-all duration-300'>
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
      </a>
    </Link>
  )
}

export default TechStackCard
