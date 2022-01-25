import Link from 'next/link'
import { BlogPost } from '@/types/blog-post'
import moment from 'moment'

const BlogPostCard = ({
  title,
  date,
  description,
  slug,
  readingTime,
}: BlogPost) => {
  return (
    <Link href={`/blog/${slug}`}>
      <a>
        <div className='dark:hover:bg-gray-800 hover:bg-gray-200 hover:scale-105 transition-all duration-300 py-2 px-1 sm:p-5 rounded-md mb-2'>
          <p className='font-bold text-lg'>{title}</p>
          <div className='text-gray-500'>
            <p className='text-md mt-1'>{description}</p>
            <div className='flex text-sm mt-1'>
              <p className='mr-2'>{moment(date).fromNow()}</p>
              <span>·</span>
              <p className='ml-2'>{readingTime}</p>
            </div>
          </div>
        </div>
      </a>
    </Link>
  )
}

export default BlogPostCard
