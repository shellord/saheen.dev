import Image from 'next/image'
import Link from 'next/link'

type Props = {
  title: string
  description: string
  image: string
  href: string
}

const ProjectCard = ({ title, description, image, href }: Props) => {
  return (
    <Link href={href}>
      <a>
        <div className='shadow'>
          <div className='flex relative h-44'>
            <Image
              src={image}
              layout='fill'
              alt='project'
              className='object-cover object-top'
            />
          </div>
          <div className='flex flex-col flex-1 bg-gray-100 dark:bg-gray-800 p-2 items-center h-24 '>
            <p className='text-2xl sm:text-4xl font-bold'>{title}</p>
            <p className='text-sm text-center'>{description}</p>
          </div>
        </div>
      </a>
    </Link>
  )
}

export default ProjectCard
