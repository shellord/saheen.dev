import Image from 'next/image'

type Props = {
  title: string
  description: string
  image: string
}

const ProjectCard = ({ title, description, image }: Props) => {
  return (
    <div className='flex flex-col relative w-[22rem] h-[15rem] rounded-lg'>
      <Image src={image} alt={title} layout='fill' className='rounded-lg' />
      <div className='flex flex-1  justify-center items-end'>
        <div className='absolute w-full h-16 bg-black text-white flex flex-col items-center justify-center rounded-b-lg'>
          <p className='text-2xl font-bold'>{title}</p>
          <p className='text-sm'>{description}</p>
        </div>
      </div>
    </div>
  )
}

export default ProjectCard
