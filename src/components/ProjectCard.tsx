import Image from 'next/image'

type Props = {
  title: string
  description: string
  image: string
}

const ProjectCard = ({ title, description, image }: Props) => {
  return (
    <div className='relative ml-2 flex flex-1 w-1/2'>
      <Image
        src='/images/mash.jpeg'
        layout='fill'
        alt='mash coin'
        className='object-cover'
      />
      <div className='absolute'>
        <p>{title}</p>
        <p>{description}</p>
      </div>
    </div>
  )
}

export default ProjectCard
