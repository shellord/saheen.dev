import { NextPage, InferGetStaticPropsType } from 'next'
import { getSortedPostsData } from '@/lib/posts'
import BlogPostCard from '@/components/BlogPostCard'

const Blog: NextPage<null> = ({
  allPostsData,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <div className='mt-10 sm:ml-[-1.25rem]'>
      {allPostsData.map(({ slug, date, title, readingTime, description }) => (
        <div key={slug}>
          <BlogPostCard
            slug={slug}
            date={date}
            title={title}
            readingTime={readingTime}
            description={description}
          />
        </div>
      ))}
    </div>
  )
}

export const getStaticProps = async () => {
  const allPostsData = await getSortedPostsData()
  return {
    props: {
      allPostsData,
    },
  }
}
export default Blog
