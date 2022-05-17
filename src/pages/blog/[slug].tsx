import { NextPage, GetStaticPropsContext, InferGetStaticPropsType } from 'next'
import { getAllPostSlugs, getPostData } from '@/lib/posts'
import SeoContainer from '@/components/SeoContainer'

const Post: NextPage<null> = ({
  postData,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <SeoContainer
      title={postData.title}
      date={postData.date}
      description={postData.description}
      type='article'
    >
      <div className='mt-10'>
        <p className='text-2xl font-bold sm:text-4xl'>{postData.title}</p>
        <div
          className='mt-5 markdown-body prose dark:prose-invert'
          dangerouslySetInnerHTML={{ __html: postData.contentHtml }}
        />
      </div>
    </SeoContainer>
  )
}

export default Post

export async function getStaticPaths() {
  const paths = getAllPostSlugs()
  return {
    paths,
    fallback: false,
  }
}

export const getStaticProps = async (ctx: GetStaticPropsContext) => {
  const postData = await getPostData(ctx.params?.slug)
  return {
    props: {
      postData,
    },
  }
}
