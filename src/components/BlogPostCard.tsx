import Link from 'next/link'

type Props = {
  title: string
  date: string
  description: string
  slug: string
  readingTime: string
}

const BlogPostCard = ({
  title,
  date,
  description,
  slug,
  readingTime,
}: Props) => {
  return (
    <div className='dark:hover:bg-gray-800 hover:bg-gray-200 hover:scale-105 transition-all duration-300 py-2 px-1 sm:p-5 rounded-md mb-2'>
      <p className='font-bold text-lg'>{title}</p>
      <div className='text-gray-500'>
        <p className='text-md mt-1'>{description}</p>
        <div className='flex text-sm mt-1'>
          <p className='mr-2'>4 months ago</p>
          <span>·</span>
          <p className='ml-2'>{readingTime}</p>
        </div>
      </div>
    </div>
  )
}

export default BlogPostCard
